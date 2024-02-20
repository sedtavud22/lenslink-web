import { useRef, useState } from "react";
import { ImageIcon } from "../../../icons";

function AddSubImageForm({ onAddSubImage }) {
  const fileEl = useRef(null);

  const handleUploadedFile = (e) => {
    if (e.target.files[0]) {
      onAddSubImage(e.target.files[0]);
      fileEl.current.value = "";
    }
  };

  return (
    <div>
      <input
        type="file"
        className="hidden"
        onChange={handleUploadedFile}
        ref={fileEl}
      />
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
    </div>
  );
}

export default AddSubImageForm;
