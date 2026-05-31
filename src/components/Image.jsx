import { useState } from "react";

const Image = ({
  src,
  alt,
  fallbackSrc = "https://via.placeholder.com/400x300?text=Image+Not+Found",
  className = "",
  rounded = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`object-cover ${rounded ? "rounded-full" : "rounded-xl"} ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
