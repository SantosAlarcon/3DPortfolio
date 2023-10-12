import { StarField } from "starfield-react/dist/starfield-react"

const Stars = () => {
    return (
        <StarField className="w-full h-fill-available" width={1200} height={1200} fps={60} bgStyle="transparent" />
    )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Stars />
    </div>
  )
}

export default StarsCanvas
