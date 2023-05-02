import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";

export default async function Product({ searchParams }: SearchParamTypes) {
  const currentSize = searchParams.size;

  const getClassName = (size: string) => {
    return currentSize === size ? "btn btn-primary" : "btn btn-outline";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between px-5 gap-5">
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
        <div className="grid grid-cols-4 gap-2">
          <button className={getClassName("small")}>Small</button>
          <button className={getClassName("medium")}>Medium</button>
          <button className={getClassName("large")}>Large</button>
          <button className={getClassName("x-large")}>X-Large</button>
        </div>

        <p className="py-2">{searchParams.size}</p>
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
