import Image from "next/image";
import Link from "next/link";

export default function Logo({
  src = "/logo/logo-597x512.png",
  alt = "letter B logo",
  link = "/",
  ...props
}) {
  return (
    <Link href={link}>
      <Image {...props} src={src} alt={alt} width={60} height={60} />
    </Link>
  );
}
