import { Blog } from "../hooks"
import Appbar from "./Appbar"
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }: { blog: Blog }) => {
 
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (<div className="">
    <Appbar />
    <div className="flex justify-center">

      <div className="grid pt-12 grid-cols-12 max-w-screen-2xl px-10 w-full">
        <div className="col-span-8">
          <div className="text-3xl font-extrabold">
            {blog.title}
          </div>
          <div className="pt-2 text-slate-500">
            Posted on 16th Feb 2025
          </div>
          <div className="pt-4">
            {blog.content}
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-lg">
            Author
          </div>
          <div className="flex">
            <div className="pr-2 flex flex-col justify-center">
              <Avatar size="big" name={blog.author.name || "Anonymous"} />
            </div>
            <div className="">
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the reader's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FullBlog


