import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
      style={{ borderRadius: '50%' , border: '2px solid black'}}
    />
  )
}