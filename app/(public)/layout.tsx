import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MotionConfig } from "motion/react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Navbar />
      </div>
      <main>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </main>
      <Footer />
      <div
        className="
          pointer-events-none
          fixed bottom-0 left-0 z-50
          h-16 md:h-32 w-full
          backdrop-blur-xl
          [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent_100%)]
        "
      />
    </div>
  );
}
