import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"

const Blogs = () => {
  return ( <div className="">
     <Appbar /> 
     <div className="flex justify-center">
    <div className="max-w-xl">
      <BlogCard authorName="John Doe" title="How an Ugly Single-Page website makes $5000 a month with affiliate marketing" content="No need to make fancy dynamic websites with hudreds of pages - making money is easy nowadays with affiliate marketing" publishedDate="Feb 3 2025"/>
      <BlogCard authorName="John Doe" title="How an Ugly Single-Page website makes $5000 a month with affiliate marketing" content="No need to make fancy dynamic websites with hudreds of pages - making money is easy nowadays with affiliate marketing" publishedDate="Feb 3 2025"/>
      <BlogCard authorName="John Doe" title="How an Ugly Single-Page website makes $5000 a month with affiliate marketing" content="No need to make fancy dynamic websites with hudreds of pages - making money is easy nowadays with affiliate marketing" publishedDate="Feb 3 2025"/>
    </div>
  </div>
  </div>
  )
}

export default Blogs
