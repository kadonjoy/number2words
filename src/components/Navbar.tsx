import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-s-gray-300 shadow z-50">
      <div className="w-full flex items-center justify-between px-4 h-16">
        {/* Left: Site name and navigation */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-violet-700 transition-colors"
        >
          Home
        </Link>
        {/* Right: Logo */}
        <Image
          src="/logo.webp"
          alt="Site Logo"
          width={120}
          height={60}
          className="h-10 w-auto"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </nav>
  );
}
// Add padding to main content to avoid being covered by navbar
