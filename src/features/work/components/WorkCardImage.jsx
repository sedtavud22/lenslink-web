import logo from "../../../assets/lenslink.png";

function WorkCardImage({ src }) {
  console.log(src);
  return (
    <figure>
      <img
        src={src || logo}
        alt="CardImg"
        className="aspect-[4/3] object-cover"
      />
    </figure>
  );
}

export default WorkCardImage;
