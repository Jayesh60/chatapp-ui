"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ChatContainer = ({ back }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section className="w-full">
      <div className="md:flex flex-col hidden bg-gray rounded max-h-screen h-full justify-between">
        <div className="bg-light-gray flex justify-between items-center h-[10%] w-full rounded-t p-2">
          <div className="flex items-center gap-3 px-4">
            <Image
              src={"/common/add.svg"}
              height={28}
              width={28}
              className=""
              alt="profile"
            />
            <h1 className="text-sm opacity-80">Hi</h1>
          </div>
          <div className="flex gap-3 items-center px-2 opacity-80">
            <button className="flex gap-2 items-center ">
              <Image
                src={"/common/left.svg"}
                height={20}
                width={20}
                alt="left"
              />
              Back
            </button>
            <button className="flex gap-2 items-center">
              <Image
                src={"/common/trash.svg"}
                height={20}
                width={20}
                alt="left"
              />
              Delete
            </button>
          </div>
        </div>
        <div className="px-4 pb-4 flex gap-3">
          <input
            type="text"
            placeholder="Message"
            className="bg-light-gray w-full outline-none px-4 py-3 text-xs rounded-full text-white opacity-70"
          />
          <button>
            <Image src={"/common/send.svg"} height={40} width={40} alt="send"/>
          </button>
        </div>
      </div>
      <div className="md:hidden inset-0 top-0 absolute z-[100] flex flex-col justify-between w-full h-screen bg-gray">
        <div className="bg-light-gray flex justify-between items-center h-[8%] w-full rounded-t px-3 p-2">
          <div className="flex items-center gap-4">
            <button onClick={back} className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="currentColor"
                  d="M2048 1088H250l787 787l-90 90L6 1024L947 83l90 90l-787 787h1798v128z"
                />
              </svg>
              <Image
                src={"/common/add.svg"}
                height={48}
                width={48}
                className=""
                alt="profile"
              />
            </button>
            <h1 className="opacity-80">Hi</h1>
          </div>
          <button onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-light-salmon"
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
          </button>
        </div>
        <div></div>
        <div className="px-2 pb-4 flex gap-3">
          <input
            type="text"
            placeholder="Message"
            className="bg-light-gray w-full outline-none px-6 py-4 rounded-full text-white opacity-70"
          />
          <button>
            <Image src={"/common/send.svg"} height={55} width={55} alt="send"/>
          </button>
        </div>
      </div>
      {toggle && (
        <div className="h-full w-full z-[100] fixed" onClick={handleToggle}>
          <div className="flex md:hidden z-[100] flex-col gap-2 absolute right-0 mr-10 w-[35vw] px-6 py-4 mt-16 bg-gray text-white text-sm rounded">
            <Link href={"/"} className="flex gap-1">
              View Contact
            </Link>
            <Link href={"/"} className="flex gap-1">
              Delete Chat
            </Link>
            <Link href={"/"} className="flex gap-1">
              Block
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChatContainer;
