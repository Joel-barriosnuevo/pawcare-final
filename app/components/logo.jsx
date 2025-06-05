import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="PawCare Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-primary">PawCare</span>
    </Link>
  )
} 