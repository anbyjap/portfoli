import icons from "../icons/Icon";

type Name = keyof typeof icons;

interface CarouselItemProps {
  name: string;
  skills: Array<Name>;
  description: string;
  imgSrc: string;
  link: string;
}

export type { Name };
export type { CarouselItemProps };
