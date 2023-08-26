import icons from "../icons/Icon";
import type { Name } from "../types/index";

type Props = {
  name: Name;
  size?: number;
  className?: string;
};

const DEFAULT_SIZE = 30;

export function SkillsIcon({ name, size = DEFAULT_SIZE, className }: Props) {
  const SvgComponent = icons[name];

  return (
    <SvgComponent
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: "white",
        borderRadius: `${size - 20}px`,
        padding: "3px",
        margin: "0 3px",
      }}
      className={className}
    />
  );
}
