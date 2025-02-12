interface BlogCardProps {
    authorName: string;
    title:string;
    content:string;
    publishedDate:string;
}

const BlogCard = ({authorName,title,content,publishedDate}: BlogCardProps) => {
  return (<div className="border-b p-4 border-slate-400">
    <div className="flex">
      <Avatar name={authorName} />
      <div className="font-extralight pl-2 text-sm flex flex-col items-center justify-center">{authorName}</div>

      <div className="flex flex-col items-center justify-center pl-2">
      <Circle />
      </div>
      <div className="pl-2 font-thin text-sm text-slate-500 flex flex-col items-center justify-center">
      {publishedDate}
      </div>
      </div>
      <div className="text-xl font-semibold pt-2">
          {title}
      </div>
      <div className="text-md font-thin">
          {content.slice(0,100)+"..."}
      </div>
      <div className="text-sm font-thin text-slate-500 pt-4">
        {`${Math.ceil(content.length/100)} minutes`}
      </div>
  </div>
  )
}

export function Avatar({name,size="small"}: {name: string, size?: "small" | "big"}) {
return <div className={`relative inline-flex items-center justify-center ${size ==="small"?"w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`${size==="small"? "text-xs":"text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
}

function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>}


export default BlogCard
