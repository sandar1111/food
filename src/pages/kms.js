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
          img="/kms.jpg"
          title="Кымыс"
          desc="кисломолочный напиток, изготавливаемый обычно из молока кобылы, получается в результате молочнокислого и спиртового брожения при помощи болгарской и ацидофильной молочнокислых палочек и дрожжей. Напиток пенный, беловатого цвета, вкус — кисловато-сладкий."
          history="Бренд Якутии, национальное богатство, целительный напиток – все это о якутском кумысе, без которого нельзя представить праздник ысыах. Этим кисломолочным напитком якуты встречают дорогих гостей, а о полезных свойствах знает каждый. Тем не менее найти его на прилавках магазинов не представляется возможным. Вместо настоящего кумыса якутянам все чаще предлагают его заменитель – быырпах."
        ></FoodMore>
      </div>
      <Footer></Footer>
    </main>
  );
}
