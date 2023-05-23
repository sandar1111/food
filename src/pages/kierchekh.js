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
          img="/Kierchekh.JPG"
          title=" Кёрчех"
          desc="одно из любимых традиционных блюд якутов и подается обычно к завтраку вместо масла к лепешке или хлебу."
          history="Рецепт: В чистую посуду наливают на 1/3 ее объема холодные сливки или сметану, добавляют бруснику и сахар, взбивают мутовкой (ытык) до тех пор, пока не образуется густая пышная и устойчивая пена.
Готовят кyepчех небольшими порциями, хранят не более 1,5 — 2 часа. Бруснику можно заменить голубикой или брусничным вареньем.
Подают кyepчех по 100 г в деревянной чашке (кытыйа)."
        ></FoodMore>
      </div>
      <Footer></Footer>
    </main>
  );
}
