import { useRef, useState } from "react";

function OldSubImageForm({
  subImage,
  onChangeOldSubImage,
  onDeleteOldSubImage,
}) {
  // const [image, setImage] = useState(null);
  const fileEl = useRef(null);

  const handleUploadedFile = (e) => {
    if (e.target.files[0]) {
      // setImage(e.target.files[0]);
      onChangeOldSubImage(e.target.files[0], subImage.id);
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
      {subImage.imageUrl ? (
        <div
          className="relative bg-gray-200"
          onClick={() => fileEl.current.click()}
        >
          <img
            src={subImage.imageUrl}
            alt="cardImg"
            className="mx-auto aspect-[4/3] object-cover"
          />
          <button
            className="absolute top-0.5 right-1 font-black"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteOldSubImage(subImage.id);
              fileEl.current.value = "";
            }}
          >
            &#10005;
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default OldSubImageForm;
