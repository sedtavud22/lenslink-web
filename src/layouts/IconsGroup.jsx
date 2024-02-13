import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "../icons";

function IconsGroup() {
  return (
    <div className="flex gap-7">
      <a className="logo-1" href="#">
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a className="logo-2" href="#">
        <XIcon className="w-6 h-6" />
      </a>
      <a className="logo-3" href="#">
        <InstagramIcon className="w-6 h-6" />
      </a>
      <a className="logo-4" href="#">
        <LinkedInIcon className="w-6 h-6" />
      </a>
    </div>
  );
}

export default IconsGroup;
