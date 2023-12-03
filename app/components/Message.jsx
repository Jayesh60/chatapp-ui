import Image from "next/image";

const Message = ({ owner, Message, img, sameSender }) => {
  return (
    <div
      className={`flex w-full gap-2 ${
        owner
          ? "justify-items-end flex-row-reverse"
          : "flex-row justify-start"
      } `}
    >
      <div className={`${sameSender ? "opacity-0" : ""}`}>
        <Image src={img ? img : '/common/avatar.svg'} height={35} width={35} alt="profile" className="text-white" />
      </div>
      <div
        className={`${
          owner ? "bg-light-salmon rounded-l-xl" : "bg-light-gray rounded-r-xl"
        } md:max-w-[20vw] max-w-[40vw] md:text-base text-sm  px-3 py-3 rounded-t-xl`}
      >
        {Message}
      </div>
    </div>
  );
};

export default Message;
