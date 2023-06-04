import Product from "../components/Product";
import getProducts from "@/util/getProducts";
import Image from "next/image";
import peepoDanceSad from "@/public/emotes/peepoDanceSad.gif";

export default async function Products() {
  const products = await getProducts();

  const uniqueProducts = products.filter(
    (product, index, self) =>
      index ===
      self.findIndex((p) => p.metadata.tagNumber === product.metadata.tagNumber)
  );
  return (
    <div className="pt-10">
      <div className="flex justify-center">
        <Image
          src={peepoDanceSad}
          alt="peepo dance sad"
          width={50} // Replace 100 with your estimated width value
          height={50}
        />
      </div>
      <div className="text-center lg:text-5xl font-bold tracking-tight text-white text-3xl mb-10">
        Shop All
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center">
        {uniqueProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
