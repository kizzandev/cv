import About from "../components/about";
// import Experience from "../components/experience";
import Technologies from "../components/technologies";
import Bento from "../components/bento";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    document.title = `CV | ${document.title}`;

    return () => {
      document.title = document.title.replace(`CV | `, "");
    };
  }, []);

  return (
    <>
      <About />
      <Bento />
      <Technologies />
    </>
  );
}
