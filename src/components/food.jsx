import Image from "next/image";
import Link from "next/link";
const Food = (props) => {
  return (
    <div>
      <Link
        className="shadow hover:drop-shadow-xl flex flex-col bg-white"
        style={{ maxWidth: "300px" }}
        href={props.href}
      >
        <Image
          style={{ objectFit: "cover", height: "200px" }}
          src={props.img}
          width={300}
          height={200}
        ></Image>
        <h1 className="bg-slate-300 px-2 font-medium text-xl py-2">
          {props.header}
        </h1>
        <p className="px-2 py-2">{props.text}</p>
      </Link>
    </div>
  );
};

export default Food;
