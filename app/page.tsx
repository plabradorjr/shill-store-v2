import Product from "./components/Product";
import getProducts from "@/util/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        {/* <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"> */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-24">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Degen Swegs.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cuz your fashion style is shit.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Don't buy now
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                uWu <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Images */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10 p-10">
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16 rotate-6 mx-auto lg:w-72 md:w-64 sm:w-40">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16 mx-auto lg:w-72 md:w-64 sm:w-40">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16 -rotate-3 mx-auto lg:w-72 md:w-64 sm:w-40">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16 -rotate-3 mx-auto lg:w-72 md:w-64 sm:w-40">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          />
        </div>
      </div>
    </>
  );
}
