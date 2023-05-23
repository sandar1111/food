import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import First from "@/components/first";
import Second from "@/components/second";
import Third from "@/components/third";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={inter.style}>
      <Header></Header>
      <div className="container">
        <First></First>
        <Third></Third>
      </div>
      <Footer></Footer>
    </main>
  );
}
