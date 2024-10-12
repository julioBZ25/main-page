import * as prismic from "@prismicio/client";

export const formatterImage = (image: any) => {
  if (!image) return "";
  return prismic.asImageSrc(image, {
    ar: `16:9`,
    fit: "crop",
    width: 1280,
    height: 720,
    auto: ["format"],
    fm: "webp",
  });
};
