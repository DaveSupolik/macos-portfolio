import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import React from "react";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name = "Untitled image", imageUrl } = data ?? {};
  const hasValidImage = typeof imageUrl === "string" && imageUrl.length > 0;

  const [imgSrc, setImgSrc] = React.useState(hasValidImage ? imageUrl : "");

  React.useEffect(() => {
    setImgSrc(hasValidImage ? imageUrl : "");
  }, [imageUrl, hasValidImage]);

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {hasValidImage ? (
          <div className="w-full">
            <img
              src={imgSrc}
              alt={name || "Image preview"}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
              loading="lazy"
              decoding="async"
              onError={() => setImgSrc("/images/placeholder.png")}
            />
          </div>
        ) : (
          <div className="text-sm text-gray-600">No image to display.</div>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
