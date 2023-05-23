import Image from "next/image";
import ImageWithCaption from "./imagewithcaption";
import Link from "next/link";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const First = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[40px] font-bold">Якутская национальная кухня</h1>
        <p className="w-[500px]">
          Приготовьтесь погрузиться в мир якутской кухни, где вкус и традиции
          сочетаются в идеальном союзе.
        </p>
      </div>
      <div>
        <div
          ref={sliderRef}
          style={{ width: "500px", height: "400px", cursor: "pointer" }}
          className="keen-slider"
        >
          <div className="keen-slider__slide ">
            <Link href="/kierchekh">
              <ImageWithCaption
                url="/Kierchekh.JPG"
                width={500}
                height={400}
                caption="Кёрчех"
              />
            </Link>
          </div>
          <div className="keen-slider__slide ">
            <Link href="/haan">
              <ImageWithCaption
                url="/haan.jpg"
                width={500}
                height={400}
                caption="Кровяная колбаса (Хаан)"
              />
            </Link>
          </div>
          <div className="keen-slider__slide ">
            <Link href="/ismine">
              <ImageWithCaption
                url="/ismine.jpeg"
                width={500}
                height={400}
                caption="Говяжьи потроха (Ис миинэ)"
              />
            </Link>
          </div>
          <div className="keen-slider__slide ">
            <Link href="/martishki">
              <ImageWithCaption
                url="/martishki.jpg"
                width={500}
                height={400}
                caption="Мартышки"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
