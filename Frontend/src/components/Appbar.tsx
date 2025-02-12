import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b py-4 flex justify-between px-10">
      <div className="">
        Medium
      </div>
      <div className="">
        <Avatar name="John Doe" size={"big"} />
      </div>
    </div>
  )
}

export default Appbar
