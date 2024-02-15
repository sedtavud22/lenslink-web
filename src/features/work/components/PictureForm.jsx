import { useRef, useState } from "react";
import { ImageIcon } from "../../../icons";

function PictureForm({ initialSrc, register, name, errors, image, setImage }) {
  const fileEl = useRef(null);

  const { ref: registerRef, ...rest } = register(name);

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setImage(urlImage);
  };

  return (
    <div className="w-full">
      <input
        type="file"
        className="hidden"
        {...rest}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e);
          fileEl.current = e;
        }}
      />
      {image ? (
        <div
          className="relative bg-gray-200"
          onClick={() => fileEl.current.click()}
        >
          <img
            src={image}
            alt="cardImg"
            className="mx-auto aspect-[4/3] object-cover"
          />
          <button
            className="absolute top-0.5 right-1 font-black"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
              fileEl.current.value = "";
            }}
          >
            &#10005;
          </button>
        </div>
      ) : initialSrc ? (
        <div
          className="relative bg-gray-200"
          onClick={() => fileEl.current.click()}
        >
          <img
            src={image}
            alt="cardImg"
            className="mx-auto aspect-[4/3] object-cover"
          />
          <button
            className="absolute top-0.5 right-1 font-black"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
              fileEl.current.value = "";
            }}
          >
            &#10005;
          </button>
        </div>
      ) : (
        <div
          className="bg-gray-100 hover:bg-gray-200 flex flex-col items-center py-20 rounded-lg"
          role="button"
          onClick={() => fileEl.current.click()}
        >
          <div className="h-10 w-10 flex justify-center items-center">
            <ImageIcon className="w-8 h-8" />
          </div>
          <span>Browse</span>
        </div>
      )}
      {errors?.[name] && (
        <small className="text-error">{errors?.[name].message}</small>
      )}
    </div>
  );
}

export default PictureForm;
