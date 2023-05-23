import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import FoodMore from "@/components/foodMore";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={inter.style}>
      <Header></Header>
      <div className="container">
        <FoodMore
          img="/butugas.jpg"
          title="Бутугас"
          desc="Традиционное якутское блюдо бутугас готовят из пахты, оставшейся после сбивания масла. "
          history="Традиционное якутское блюдо бутугас готовят из пахты, оставшейся после сбивания масла. При непрерывном помешивании всыпают муку и варят 5–7 минут, затем вливают брусничный сок и вновь доводят до кипения. Подают горячим как самостоятельное блюдо."
        ></FoodMore>
      </div>
      <Footer></Footer>
    </main>
  );
}
