import "./styles.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { useEffect, useState } from "react";

export default function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://i.imgflip.com/1g8my4.jpg"
  });

  const [memesData, setMemesData] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    // console.log(value);
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  function getNewMeme() {
    const randomUrl = Math.floor(Math.random() * memesData.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: memesData[randomUrl].url
    }));
  }

  return (
    <div className="App">
      <Navbar />
      <Main
        getNewMeme={getNewMeme}
        meme={meme.imgUrl}
        topText={meme.topText}
        bottomText={meme.bottomText}
        handleChange={handleChange}
      />
    </div>
  );
}
