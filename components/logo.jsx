// Logo solo con la imagen logo.png
export const Logo = ({ size = "default" }) => {
  const sizeMap = { small: 24, default: 32, large: 48 }
  const px = sizeMap[size] || sizeMap.default
  return (
    <img
      src="/logo.png"
      alt="Logo PawCare"
      className={`rounded-full bg-white shadow-lg border-2 border-accent object-cover h-[${px}px] w-[${px}px]`}
      style={{ height: px, width: px }}
    />
  )
}
