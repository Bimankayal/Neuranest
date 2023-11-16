import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const {data:session}=useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
 const handleCopy=()=>{
  setCopied(post.prompt);
  navigator.clipboard.writeText(post.prompt);
  setTimeout(()=>setCopied('') , 3000);
 }
  return (
    <div className="prompt_card">
      <div className="flex justify_between items-start gap-5">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900">
            {post.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {post.creator.email}
          </p>
        </div>

        <div
          className="copy_btn" onClick={handleCopy}
        >
          <Image
            src={
              copied == post.prompt
                ? "/assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            width={15}
            height={15}
            alt="copy_here"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathname ==='/profile'&&(
        <div className="mt-5 py-1 flex-center gap-4 border-t border-gray-400"> 
          <p className="font-inter text-sm cursor-pointer px-5 py-1.5 bg-blue-500 rounded-full text-white"
         onClick={handleEdit}>Edit</p>
          <p className="font-inter text-sm cursor-pointer px-5 py-1.5 bg-primary-orange rounded-full text-white "
         onClick={handleDelete}>Delete</p>
        </div>
      ) }
    </div>
  );
};

export default PromptCard;
