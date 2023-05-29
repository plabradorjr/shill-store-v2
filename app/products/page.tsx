import Product from "../components/Product";
import getProducts from "@/util/getProducts";

export default async function Products() {
  const products = await getProducts();

  const uniqueProducts = products.filter(
    (product, index, self) =>
      index ===
      self.findIndex((p) => p.metadata.tagNumber === product.metadata.tagNumber)
  );
  return (
    <div className="pt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center">
        {uniqueProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
