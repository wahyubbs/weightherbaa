import "./page.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";

export default function Home() {
  return (
    <main className="main">
      <Section1 />
      <Section4 />
      <Section2 />
      <Section3 />
    </main>
  );
}
