export default function Loading() {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}
