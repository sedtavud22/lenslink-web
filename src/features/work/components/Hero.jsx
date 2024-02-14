import Breadcrumbs from "../../../components/Breadcrumbs";

function Hero() {
  return (
    <div className="py-28 bg-slate-300">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-semibold">Works</h1>
        <Breadcrumbs links={{ "": "Home" }} currentPage="Work" />
      </div>
    </div>
  );
}

export default Hero;
