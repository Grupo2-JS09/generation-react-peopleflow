// @ts-ignore: missing declaration for ../menu/gooeynav/GooeyNav.jsx
import GooeyNav from "../menu/gooeynav/GooeyNav";
export function Menu() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#" },
  ];
  return (
    <>
      <div
        className="flex justify-center p-10 h-auto"
        style={{ position: "relative" }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={["#A61774", "#731D64", "#401539", "#F2D852"]}
        />
      </div>
    </>
  );
}
