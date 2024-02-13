import logo from "../assets/lenslink.png";
import IconsGroup from "./IconsGroup";

function FooterDescription() {
  return (
    <div className="flex flex-col gap-8 w-1/3">
      {/* Logo */}
      <div className="w-[240px]">
        <img src={logo} />
      </div>

      {/* Text */}
      <p className="text-lightGrayText text-sm leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <IconsGroup />

      {/* Trademark */}
      <p className="text-lightGrayText text-sm">
        © 2024 . All rights reserved.
      </p>
    </div>
  );
}

export default FooterDescription;
