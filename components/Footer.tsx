import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-primary py-2 text-white">
      <p className="text-center text-sm text-white/70 md:text-base">
        © {new Date().getFullYear()} Stars Education. All rights reserved.
      </p>
    </footer>
  );
}