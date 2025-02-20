import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

const Blogs = () => {
  const {loading,blogs} =useBlogs()
  if(loading){
    return <div>
      <Appbar/>
      <div className="flex flex-col gap-7 justify-center items-center mt-7">
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      </div>
    </div>
  }

  return ( <div className="">
     <Appbar /> 
     <div className="flex justify-center">
    <div className="max-w-xl">
      {blogs.map(blog =><BlogCard key={blog.id}
      id={blog.id}
      authorName={blog.author.name || "Anonymous"}
      title={blog.title}      
      content={blog.content}
      publishedDate="Feb 3 2025"/>)} 
    </div>
  </div>
  </div>
  )
}

export default Blogs
