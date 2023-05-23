import Food from "./food";
const Third = () => {
  return (
    <div id="galerea" className="mt-10">
      <h1 className="font-bold text-4xl text-center mb-5">Галерея</h1>
      <div>
        <div className="flex justify-around mb-5">
          <Food
            href="/haan"
            img="/haan.jpg"
            header="Кровяная колбаса (Хаан)"
            text="блюдо, представляющее собой кровяную колбасу."
          ></Food>
          <Food
            href="/ismine"
            img="/ismine.jpeg"
            header="Говяжья потроха (Ис миинэ)"
            text="суп из потрошков"
          ></Food>
          <Food
            href="/martishki"
            img="/martishki.jpg"
            header="Мартышки"
            text="Якутское мороженое"
          ></Food>
        </div>
        <div className="flex justify-around">
          <Food
            href="/stroganina"
            img="/stroganina.jpg"
            header="Строганина"
            text="Нарезанная тонкой стружкой свежезамороженная рыба"
          ></Food>
          <Food
            href="/harta"
            img="/harta.jpg"
            header="Харта"
            text="Вареные жеребячьи кишки, жиром внутрь"
          ></Food>
          <Food
            href="/kierchekh"
            img="/Kierchekh.JPG"
            header="Кёрчэх"
            text="Якутское лакомство из молока и сливок"
          ></Food>
        </div>
      </div>
    </div>
  );
};

export default Third;
