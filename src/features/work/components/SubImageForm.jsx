import { useRef } from "react";

function SubImageForm({ onUpdateSubImage, onDeleteSubImage, subImage, index }) {
  const fileEl = useRef(null);

  const handleUploadedFile = (e) => {
    if (e.target.files[0]) {
      if (subImage.id) {
        onUpdateSubImage(e.target.files[0], index);
      } else {
        onUpdateSubImage(e.target.files[0], index, subImage.id);
      }
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
          src={subImage.imageUrl || URL.createObjectURL(subImage)}
          alt="cardImg"
          className="mx-auto aspect-[4/3] object-cover"
        />

        {/* Delete */}
        <div
          className="absolute top-0.5 right-1 font-black"
          onClick={(e) => {
            e.stopPropagation();
            if (subImage.id) {
              onDeleteSubImage(index, subImage.id);
            } else {
              onDeleteSubImage(index);
            }
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
