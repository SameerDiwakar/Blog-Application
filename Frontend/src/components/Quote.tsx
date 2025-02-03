const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            "The best way to predict the future is to create it. Future belongs to those who believe in the beauty of their dreams."
          </div>
          <div className="text-left max-w-md text-xl font-semibold mt-4">
            - Eleanor Roosevelt
          </div>
          <div className="text-sm max-w-md font-light text-slate-400 mt-2">
            Ex President of the United States
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
