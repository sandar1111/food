import Image from "next/image";
const ImageWithCaption = ({ url, width, height, caption }) => {
  return (
    <div className="relative">
      <Image
        style={{ objectFit: "cover", height: "400px" }}
        src={url}
        width={width}
        height={height}
      />
      <div className="absolute w-full top-0 bg-opacity-50 bg-slate-800 h-10 flex items-center justify-center">
        <span className="text-white">{caption}</span>
      </div>
    </div>
  );
};

export default ImageWithCaption;
