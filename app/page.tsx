import Image from "next/image";
import bootyBae from "@/public/models/bootyBae.jpg";
import carlosBae from "@/public/models/carlosBae.jpg";
import ethBae from "@/public/models/ethBae.jpg";
import ethChad from "@/public/models/ethChad.jpg";

export default function Home() {
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
          <div className="text-center">
            <h1 className="lg:text-6xl font-bold tracking-tight text-white text-5xl">
              :KEK: Swegs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Swag so based, you'll finally get a gf
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/product/prod_NlQIziy5JoxKGZ?name=ETH+Daddy+Sweg+-+medium&image=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xRFJhY2tIdHB5elFOZ1pjfGZsX2xpdmVfTzVvb0pBbHBSc2RXZ3dwMnRXZnZnVFVw00WyhsHmXO&unit_amount=100&id=prod_NlQIziy5JoxKGZ&description=%22Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipiscing+elit%2C+sed+do+eiusmod+tempor+incididunt+ut+labore+et+dolore+magna+aliqua.+Ut+enim+ad+minim+veniam%2C+quis+nostrud+exercitation+ullamco+laboris+nisi+ut+aliquip+ex+ea+commodo+consequat.&size=medium&tagNumber=69"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Don't buy now
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                uWu <span aria-hidden="true">→</span>
              </a> */}
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10 lg:px-64">
        <div className="hidden md:block flex-col items-center justify-between gap-16 -rotate-6 mx-auto lg:w-80 md:w-80">
          <Image className="rounded-lg" src={carlosBae} alt="booty bae shirt" />
        </div>
        <div className="w-72 flex-col items-center justify-between gap-16 rotate-12 mx-auto lg:w-80 md:w-80">
          <Image className="rounded-lg" alt="ETH Bae" src={ethChad} />
        </div>
        <div className="w-72 flex-col items-center justify-between gap-16 -rotate-6 mx-auto lg:w-80 md:w-80">
          <Image className="rounded-lg" alt="ETH Chad" src={bootyBae} />
        </div>
        <div className="hidden md:block flex-col items-center justify-between gap-16 rotate-3 mx-auto lg:w-80 md:w-80">
          <Image className="rounded-lg" alt="Carlos Bae" src={ethBae} />
        </div>
      </div>
      {/* PROOF OF SWEG */}
      <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto center max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Dont flirt with him
          </h2>
          <p className="p-2">Proof of sweg iNtEnSiFiEs</p>
        </div>
        <div className="flex items-center justify-center">
          <blockquote className="twitter-tweet">
            <p lang="qme" dir="ltr">
              🧐{" "}
              <a href="https://t.co/SStQXHo1jZ">pic.twitter.com/SStQXHo1jZ</a>
            </p>
            &mdash; joseph.eth (@josephdelong){" "}
            <a href="https://twitter.com/josephdelong/status/1484439237847965696?ref_src=twsrc%5Etfw">
              January 21, 2022
            </a>
          </blockquote>{" "}
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </div>
    </>
  );
}
