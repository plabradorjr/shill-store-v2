"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store";
import { AiFillShopping } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import DarkLight from "./DarkLight";
import { useSession } from "next-auth/react";

export default function Nav() {
  const cartStore = useCartStore();
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center py-5 lg:px-48 px-5 bg-gray-900">
      <Link href={"/"}>
        <div className="flex">
          <h1 className="rotate-90 text-4xl">🚀</h1>
          <p className="font-bold text-2xl text-white sm:block hidden">
            Shill.lol
          </p>
        </div>
      </Link>
      <ul className="flex items-center gap-8">
        {/* Shop all button */}
        <Link href={"/products"}>
          <div className="font-bold text-lg text-white">Shop all</div>
        </Link>

        {/* DARK MODE INSET HERE */}
        {/* If the user is not signed in */}
        {!session?.user && (
          <li className="bg-primary text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        {session?.user && (
          <li>
            <div className="dropdown dropdown-end cursor-pointer">
              <Image
                src={session.user?.image as string}
                alt={session.user.name as string}
                width={36}
                height={36}
                className="rounded-full"
                tabIndex={0}
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu p-4 space-y-4 shadow bg-base-100 rounded-box w-72"
              >
                <Link
                  className="hover:bg-base-300 p-4 rounded-md"
                  href={"/dashboard"}
                  onClick={() => {
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                >
                  Orders
                </Link>
                <li
                  onClick={() => {
                    signOut();
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                  className="hover:bg-base-300 p-4 rounded-md"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </li>
        )}
        {/* Toggle the cart */}
        <li
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer"
        >
          <AiFillShopping />
          <AnimatePresence>
            {cartStore.cart.length > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center"
              >
                {cartStore.cart.length}
              </motion.span>
            )}
          </AnimatePresence>
        </li>
      </ul>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </nav>
  );
}
