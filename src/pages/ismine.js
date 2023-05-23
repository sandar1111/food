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
          img="/ismine.jpeg"
          title="Говяжья потроха (Ис миинэ)"
          desc="Суп из потрошков"
          history="Рецепт: Потроха тщательно промыть. Поставить вариться, примерно на 2 часа.
Когда потроха начнут становиться мягкими, добавить картошку и домашнюю лапшу. Посолить, поперчить, кинуть лаврушку и укроп. Вместо лапши также можно просто добавить сэлиэй (в предварительно остуженном бульоне размешать 2-3 ст.л. муки в зависимости от обьема кастрюли ）для густоты за 5 минут до готовности.
Перед подачей добавить зеленый лук. "
        ></FoodMore>
      </div>
      <Footer></Footer>
    </main>
  );
}
