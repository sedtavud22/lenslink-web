import { useRef } from "react";
import { ImageIcon } from "../../../icons";

function PictureForm({
  initialSrc,
  name,
  image,
  setImage,
  errorImage,
  setErrorImage,
}) {
  const fileEl = useRef(null);

  const handleUploadedFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setErrorImage((prev) => ({ ...prev, [name]: null }));
      fileEl.current.value = "";
    }
  };
  return (
    <div className="w-full">
      <input
        type="file"
        className="hidden"
        onChange={handleUploadedFile}
        ref={fileEl}
      />
      {image ? (
        <div
          className="relative bg-gray-200"
          onClick={() => fileEl.current.click()}
        >
          <img
            src={URL.createObjectURL(image)}
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
            type="button"
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
            src={initialSrc}
            alt="cardImg"
            className="mx-auto aspect-[4/3] object-cover"
          />
          <button
            className="absolute top-0.5 right-1 font-black"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
              fileEl.current.value = "";
              setErrorImage((prev) => ({
                ...prev,
                cardImage: "Main picture can be edited but not deleted",
              }));
            }}
            type="button"
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
      {errorImage && <small className="text-error">{errorImage}</small>}
    </div>
  );
}

export default PictureForm;
