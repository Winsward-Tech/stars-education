import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starseducation.com"),
  title: {
    default: "Stars Education | One-to-One Tutoring in Maths, English & Science",
    template: "%s | Stars Education",
  },
  description:
    "Premium KS2 & KS3 tutoring in Maths, English, and Science. DBS-checked tutors delivering personalised lessons aligned with the UK curriculum.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
