import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";
import getProducts from "@/util/getProducts";
import Link from "next/link";
import peepoLife from "@/public/emotes/peepoLife.png";

export default async function Product({ searchParams }: SearchParamTypes) {
  const currentSize = searchParams.size;
  const currentTagNumber = searchParams.tagNumber;

  const products = await getProducts();

  const getClassName = (size) => {
    return currentSize === size
      ? "btn btn-primary w-full hover:bg-indigo-400"
      : "btn btn-outline w-full";
  };

  const currentProduct = Object.values(products).find(
    (p) =>
      p.metadata.tagNumber === currentTagNumber &&
      p.metadata.size === currentSize
  );

  const findProductURL = (s) => {
    const product = Object.values(products).find(
      (p) => p.metadata.tagNumber === currentTagNumber && p.metadata.size === s
    );

    if (!product) {
      return {
        href: "/",
        as: "/",
        disabled: true,
      };
    }

    const { id, name, image, description, unit_amount } = product;
    const size = product.metadata.size;
    const tagNumber = product.metadata.tagNumber;

    const href = {
      pathname: "/product/[id]",
      query: { name, image, unit_amount, id, description, size, tagNumber },
    };

    const as = {
      pathname: `/product/${id}`,
      query: { name, image, unit_amount, id, description, size, tagNumber },
    };

    return { href, as, disabled: false };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-top justify-between lg:px-52 md:px-5 px-3 gap-5 py-7">
      <Image
        src={currentProduct?.image}
        alt={searchParams.name}
        width={600}
        height={600}
        className="w-full rounded-lg"
        priority={true}
      />

      <div className="font-medium ">
        <h1 className="text-2xl  py-2">{searchParams.name}</h1>
        <p className="py-5 text-xs">{currentProduct?.description}</p>
        <div className="grid grid-cols-4 gap-3">
          {["small", "medium", "large", "xlarge"].map((size) => {
            const { href, as, disabled } = findProductURL(size);
            const button = (
              <button className={getClassName(size)} disabled={disabled}>
                <span>{size}</span>
              </button>
            );

            return disabled ? (
              <div key={size} className="cursor-not-allowed">
                {button}
              </div>
            ) : (
              <Link key={size} href={href} as={as} className="">
                {button}
              </Link>
            );
          })}
        </div>

        <div className="grid ">
          <p className="text-orange-200 pt-5 text-xs">
            {currentProduct?.metadata.inStockAmount} left in stock (updated
            daily)
          </p>
          <p className="font-bold text-teal-500 pt-3">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>
        {currentProduct?.metadata.inStockAmount === "0" ? (
          <button className="btn no-animation w-full my-4 text-red-300">
            Sorry, this item is out of stock{" "}
          </button>
        ) : (
          <AddCart {...searchParams} />
        )}
      </div>

      {/* view other products button */}
      <div className="grid grid-cols-1 font-medium">
        <div className="mt-10 md:pt-20 flex items-center">
          <span className="text-sm">Don't like this shit?</span>
          <Image
            src={peepoLife}
            height={55}
            className="ml-1"
            style={{ marginTop: "-35px" }}
          ></Image>
        </div>
        <div className="mt-0 pt-0 text-sm">
          uWu, senpai gib one more chance pls.
        </div>
        <div className="pb-10 pt-1">
          <Link
            href="/products"
            className="btn btn-outline btn-accent w-full text-xs"
          >
            View all products
          </Link>
        </div>
      </div>
    </div>
  );
}
