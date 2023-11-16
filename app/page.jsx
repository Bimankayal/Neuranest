import React from "react";
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
          Genarate & Share 
        <br className="max-md;hidden"/>
        <span className="blue_gradient text-center">
          AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates praesentium quidem maiores fuga enim hic eaque et deleniti, molestiae illum ab aliquam.
        </p>
        <Feed/>
            </section>
  )
}

export default Home