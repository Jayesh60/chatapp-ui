"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="bg-black">
      <div className="px-10 md:px-24 py-4 md:py-6 bg-black z-[100]  max-md:fixed w-full flex justify-between items-center">
        <div className="flex gap-8 items-center ">
          <h1 className="text-3xl font-extrabold text-light-salmon">Logo</h1>
          <div className="h-10 md:flex hidden text-gray-300 w-0.5"></div>
          <Link
            href={"/"}
            className={` ${
              path === "/" ? "text-light-salmon" : ""
            } h-5  gap-2 md:flex hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="h-5 w-full text-light-salmon"
            >
              <path
                fill="currentColor"
                d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
              />
              <path
                fill="currentColor"
                d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
              />
            </svg>
            Explore
          </Link>
          <Link
            href={"/"}
            className={` ${
              path === "/create" ? "text-light-salmon" : ""
            } h-5  gap-2 md:flex hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className={`h-5 w-full ${
                path === "/create" ? "text-light-salmon" : "text-white"
              }`}
            >
              <g transform="rotate(180 14 14)">
                <path
                  fill="currentColor"
                  d="M22.5 3.75a.75.75 0 0 0-1.5 0V5h-1.25a.75.75 0 0 0 0 1.5H21v1.25a.75.75 0 0 0 1.5 0V6.5h1.25a.75.75 0 0 0 0-1.5H22.5V3.75ZM7.75 5.5a.75.75 0 0 1 .75.75V7.5h1.25a.75.75 0 0 1 0 1.5H8.5v1.25a.75.75 0 0 1-1.5 0V9H5.75a.75.75 0 0 1 0-1.5H7V6.25a.75.75 0 0 1 .75-.75Zm12 11.5a.75.75 0 0 1 .75.75V19h1.25a.75.75 0 0 1 0 1.5H20.5v1.25a.75.75 0 0 1-1.5 0V20.5h-1.25a.75.75 0 0 1 0-1.5H19v-1.25a.75.75 0 0 1 .75-.75Zm-.116-7.522a2.875 2.875 0 0 0-4.54-.636l-.848.844l4.067 4.066l.84-.84a2.875 2.875 0 0 0 .481-3.434Zm-2.383 5.334l-4.067-4.067L2.807 21.088a2.88 2.88 0 1 0 4.068 4.079l10.376-10.355Z"
                />
              </g>
            </svg>
            Create
          </Link>
          <Link
            href={"/"}
            className={` ${
              path === "/edit" ? "text-light-salmon" : ""
            } h-5  gap-2 md:flex hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className={`h-5 w-full ${
                path === "/edit" ? "text-light-salmon" : "text-white"
              }`}
            >
              <path
                fill="currentColor"
                d="m20.875 2.563l-.688.75l-1.687 1.78h-3.594v3.5l-1.719 1.813l-.687.719l2.188 2.188L3.03 25l-.719.719l.72.687l3.28 3.282l.688-.72l11.688-11.655l2.187 2.187l.719-.688l1.812-1.718h3.5V13.5l1.782-1.688l.75-.687l-2.532-2.531v-3.5h-3.5zm.031 2.874l1.375 1.375l.313.282h2.312v2.312l.282.313l1.375 1.375l-1.344 1.281l-.313.281v2.438h-2.312l-.282.281l-1.406 1.344l-.812-.813l4.531-4.531l-3.969-3.969l-.718.688l-3.813 3.844l-.844-.844l1.344-1.406l.281-.282V7.094h2.438l.281-.313zm-.25 4.782l1.125 1.156l-15.468 15.5l-1.157-1.156zM19 21v1h-1v2h1v1h2v-1h1v-2h-1v-1zm6 2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
              />
            </svg>
            Edit
          </Link>
        </div>
        <div className="h-8">
          <button className="md:flex hidden px-16 py-2 bg-light-salmon rounded-3xl text-black font-semibold">
            Login
          </button>
        </div>
        <div
          className="md:hidden flex h-8 w-8 text-light-salmon"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            viewBox="0 0 72 72"
          >
            <path
              fill="none"
              stroke="#F3AE9F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M16 26h40M16 36h40M16 46h40"
            />
          </svg>
        </div>
      </div>
      {toggle && (
        <div className="h-full w-full z-[100]  fixed" onClick={handleToggle}>
          <div className="flex md:hidden z-[100] flex-col gap-2 absolute right-0 mr-10 w-[35vw] px-6 py-4  mt-16 bg-light-gray shadow-menu2 text-white text-sm rounded">
            <Link href={"/"} className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
                />
                <path
                  fill="currentColor"
                  d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
                />
              </svg>
              Home
            </Link>
            <Link href={"/"} className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                className={`h-4 w-4 text-white`}
              >
                <g transform="rotate(180 14 14)">
                  <path
                    fill="currentColor"
                    d="M22.5 3.75a.75.75 0 0 0-1.5 0V5h-1.25a.75.75 0 0 0 0 1.5H21v1.25a.75.75 0 0 0 1.5 0V6.5h1.25a.75.75 0 0 0 0-1.5H22.5V3.75ZM7.75 5.5a.75.75 0 0 1 .75.75V7.5h1.25a.75.75 0 0 1 0 1.5H8.5v1.25a.75.75 0 0 1-1.5 0V9H5.75a.75.75 0 0 1 0-1.5H7V6.25a.75.75 0 0 1 .75-.75Zm12 11.5a.75.75 0 0 1 .75.75V19h1.25a.75.75 0 0 1 0 1.5H20.5v1.25a.75.75 0 0 1-1.5 0V20.5h-1.25a.75.75 0 0 1 0-1.5H19v-1.25a.75.75 0 0 1 .75-.75Zm-.116-7.522a2.875 2.875 0 0 0-4.54-.636l-.848.844l4.067 4.066l.84-.84a2.875 2.875 0 0 0 .481-3.434Zm-2.383 5.334l-4.067-4.067L2.807 21.088a2.88 2.88 0 1 0 4.068 4.079l10.376-10.355Z"
                  />
                </g>
              </svg>
              Create
            </Link>
            <Link href={"/"} className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className={`h-4 w-4 text-white`}
              >
                <path
                  fill="currentColor"
                  d="m20.875 2.563l-.688.75l-1.687 1.78h-3.594v3.5l-1.719 1.813l-.687.719l2.188 2.188L3.03 25l-.719.719l.72.687l3.28 3.282l.688-.72l11.688-11.655l2.187 2.187l.719-.688l1.812-1.718h3.5V13.5l1.782-1.688l.75-.687l-2.532-2.531v-3.5h-3.5zm.031 2.874l1.375 1.375l.313.282h2.312v2.312l.282.313l1.375 1.375l-1.344 1.281l-.313.281v2.438h-2.312l-.282.281l-1.406 1.344l-.812-.813l4.531-4.531l-3.969-3.969l-.718.688l-3.813 3.844l-.844-.844l1.344-1.406l.281-.282V7.094h2.438l.281-.313zm-.25 4.782l1.125 1.156l-15.468 15.5l-1.157-1.156zM19 21v1h-1v2h1v1h2v-1h1v-2h-1v-1zm6 2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
                />
              </svg>
              Edit
            </Link>
            <Link
              href={"/"}
              className="flex gap-1 px-5 text-gray font-semibold bg-light-salmon rounded-xl text-sm py-0.5"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
