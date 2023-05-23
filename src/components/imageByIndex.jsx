import image1 from "../images/haan.jpg";
import image2 from "../images/ismine.jpeg";
import image3 from "../images/martishki.jpg";

export const images = [image1, image2, image3];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
