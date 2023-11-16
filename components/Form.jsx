import React from 'react';
import Link from 'next/link';
const Form = ({type, post,setPost ,submitting,
  handleSubmit}) => {
  return (
   <section className='w-full amx-w-full flex-start 
   flex-col '>
    <h1 className = "head_text text-left">
      <span className='blue_gradient'>
      {type} Post  
      </span>   
    </h1>
    <p className ='desc text-left max-w-md'>
      {type} and Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta error autem commodi mollitia illum nulla consequatur quam molestias ab, quis est quaerat ex!
    </p>
    <form
    onSubmit={handleSubmit}
    className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
      <label>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
          Your AI Prompt
          </span>
          <textarea 
          value={post.prompt}
          onChange={(e)=>{
            setPost({
              ...post , prompt: e.target.value
            })
          }}
          placeholder='Write your prompt here...'required
          className ='form_textarea'
          />
      </label>
      <label>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
         Tag {` `}
         <span className ="font-normal">(#product, #coding , #webdevelopment, #idea)</span>
          </span>
          <textarea 
          value={post.tag}
          onChange={(e)=>{
            setPost({
              ...post , tag: e.target.value
            })
          }}
          placeholder='#tag'required
          className ='form_input'
          />
      </label>
      <div className =" flex-end mx-3 mb-5 gap-4">
        <Link  href="/" className="text-grat-500 text-sm">
          Cancel
        </Link>
        <button
         type="submit"
         disabled={submitting}
         className ="px-5 py-1.5 text-sm bg-blue-600 rounded-full text-white "
         >
         {type}
        </button>
      </div>
    </form>
   </section>
  )
}

export default Form