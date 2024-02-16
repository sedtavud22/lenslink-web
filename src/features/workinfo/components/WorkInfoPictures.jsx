import ImageGallery from "react-image-gallery";
import useWorkInfo from "../hooks/use-workinfo";

function WorkInfoPictures() {
  const { workInfo } = useWorkInfo();

  const subImages = workInfo.workImages?.map((imageObj) => imageObj.imageUrl);

  const images = [
    {
      original: `${workInfo.cardImageUrl}`,
      thumbnail: `${workInfo.cardImageUrl}`,
    },
  ];

  if (subImages?.[0]) {
    images.push({ original: subImages?.[0], thumbnail: subImages?.[0] });
  }
  if (subImages?.[1]) {
    images.push({ original: subImages?.[1], thumbnail: subImages?.[1] });
  }
  if (subImages?.[2]) {
    images.push({ original: subImages?.[2], thumbnail: subImages?.[2] });
  }

  return (
    <div className="col-span-6">
      <div>
        <ImageGallery
          items={images}
          showBullets={false}
          showPlayButton={false}
          thumbnailPosition="left"
        />
      </div>
    </div>
  );
}

export default WorkInfoPictures;
