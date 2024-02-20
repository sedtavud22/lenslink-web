import { useRef, useState } from "react";

function SubImageForm({ onUpdateSubImage, onDeleteSubImage, subImage, index }) {
  // const [image, setImage] = useState(subImage || null);
  const fileEl = useRef(null);

  const handleUploadedFile = (e) => {
    if (e.target.files[0]) {
      // setImage(e.target.files[0]);
      onUpdateSubImage(e.target.files[0], index);
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

      <div
        className="relative bg-gray-200"
        onClick={() => fileEl.current.click()}
      >
        <img
          src={URL.createObjectURL(subImage)}
          alt="cardImg"
          className="mx-auto aspect-[4/3] object-cover"
        />

        {/* Delete */}
        <div
          className="absolute top-0.5 right-1 font-black"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteSubImage(index);
            fileEl.current.value = "";
          }}
          role="button"
        >
          &#10005;
        </div>
      </div>
    </div>
  );
}

export default SubImageForm;
