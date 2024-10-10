import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}

export const DottedSeparator = ({
  className,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DottedSeparatorProps) => {
  const isHorizonal = direction === "horizontal";

  return (
    <div
      className={cn(
        isHorizonal
          ? "flex w-full items-center"
          : "flex h-full flex-col items-center",
        className,
      )}
    >
      <div
        className={isHorizonal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizonal ? "100%" : height,
          height: isHorizonal ? height : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 25%,transparent 25% )`,
          backgroundSize: isHorizonal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizonal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
