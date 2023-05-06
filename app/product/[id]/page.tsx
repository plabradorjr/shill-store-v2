import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";
import getProducts from "@/util/getProducts";
import Link from "next/link";

export default async function Product({ searchParams }: SearchParamTypes) {
  const currentSize = searchParams.size;
  const currentTagNumber = searchParams.tagNumber;

  const products = await getProducts();

  const getClassName = (size) => {
    return currentSize === size
      ? "btn btn-primary w-full"
      : "btn btn-outline w-full";
  };

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
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
        className="w-full rounded-lg"
        priority={true}
      />

      <div className="font-medium ">
        <h1 className="text-2xl  py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
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

        <p className="py-2">Size: {searchParams.size}</p>
        <div className="flex gap-2">
          <p className="font-bold text-primary">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>
        {/* add choose size button here */}
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
