import Image from "next/image";

export const LogoLong = () => {
  return (
    <div className="relative h-auto w-full">
      <Image
        className="mx-auto w-full h-auto"
        src="/logo-slogan.svg"
        alt="Logo"
        width={100}
        height={50}
        style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3))" }}
      />
    </div>
  );
};
