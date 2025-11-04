// @ts-ignore: missing declaration for ../menu/gooeynav/GooeyNav.jsx
import GooeyNav from "../menu/gooeynav/GooeyNav";
// import { useNavigate } from 'react-router-dom';

export function Menu() {
  // const navigate = useNavigate();
  
  // const handleNavigation = (href: string) => {
  //   navigate(href);
  // };
  
  const items = [
    // { label: "Home", href: "/", onClick: () => handleNavigation("/") },
    { label: "Home", href: "/"},
    { label: "About", href: "#about" },
    { label: "Products", href: "/produto"},
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
