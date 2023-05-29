import Product from "../components/Product";
import getProducts from "@/util/getProducts";

export default async function Products() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-4 items-center justify-between gap-1 px-32">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}
