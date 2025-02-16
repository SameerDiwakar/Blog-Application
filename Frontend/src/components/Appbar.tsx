import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b py-4 flex justify-between px-10">
      <Link to={'/blogs'}>
      <div className="cursor-pointer flex flex-col justify-center">
        Medium
      </div>
      </Link>
      <div className="">
        <Avatar name="John Doe" size={"big"} />
      </div>
    </div>
  )
}

export default Appbar
