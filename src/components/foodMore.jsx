import Image from "next/image";

const FoodMore = (props) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[40px]">{props.title}</h1>
          <p className="w-[500px]">{props.desc}</p>
        </div>
        <Image src={props.img} width={500} height={500}></Image>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-[36px] mb-5">
          Подробно о блюде {props.title}
        </h1>
        <p className="w-[500px]">{props.history}</p>
      </div>
    </div>
  );
};

export default FoodMore;
