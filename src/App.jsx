import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Carousel from "./Carousel";

function App() {
  const cards = [
    { title: "Project 1", content: "Content for project 1" },
    { title: "Project 2", content: "Content for project 2" },
    { title: "Project 3", content: "Content for project 3" },
    { title: "Project 4", content: "Content for project 4" },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Carousel cards={cards} />
    </>
  );
}

export default App;
