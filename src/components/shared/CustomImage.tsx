import Image, { ImageProps } from "next/image";
import tw from "twin.macro";

export const ImageWrapper = tw.span`relative`;

/**
 * Provides default values for the `next/image` component.
 */
export const CustomImage = ({
  src = "#",
  alt = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      {...props}
    />
  );
};
