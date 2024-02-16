import Breadcrumbs from "../../../components/Breadcrumbs";
import background from "../../../assets/workhero.jpg";

function Hero() {
  return (
    <div
      className="py-28"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-semibold">Works</h1>
        <Breadcrumbs links={{ "": "Home" }} currentPage="Work" />
      </div>
    </div>
  );
}

export default Hero;
