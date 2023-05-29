import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) {
  const size = metadata.size;
  const tagNumber = metadata.tagNumber;

  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description, size, tagNumber },
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-96 h-96 object-cover rounded-lg"
        />
        <div className="font-medium">
          {/* <h1>{name}</h1> */}
          {/* <p className="text-sm">size: {size}</p> */}
          {/* <h2 className="text-sm text-teal-500">
            {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
          </h2> */}
        </div>
      </div>
    </Link>
  );
}
