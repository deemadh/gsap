import { Clock } from "./clock";
import { Marquee } from "./marquee";

window.addEventListener("load", () => {
  const clock = new Clock(".hero_clock");
  const allMarqueeElements = document.querySelectorAll(".marquee");
  allMarqueeElements.forEach((el) => new Marquee(el));
  console.log(12);
});
