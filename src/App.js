import './App.css'
import Banner from "./components/Banner/Banner";
import Genre from "./components/Genre/Genre";
import Form from "./components/Form/Form";
import { useEffect, useState } from 'react';
import Footer from "./components/Footer/Footer";

function App() {

  const [genres, setGenres] = useState([
    {
      name: 'Action',
      PrimaryColor: '#B80000',
      SecondaryColor: '#FFC6C6'
    },
    {
      name: 'Adventure',
      PrimaryColor: '#65B741',
      SecondaryColor: '#ABC3A0'
    },
    {
      name: 'Comedy',
      PrimaryColor: '#FC6736',
      SecondaryColor: '#F5C5B5'
    },
    {
      name: 'Drama',
      PrimaryColor: '#7D0A0A',
      SecondaryColor: '#866060'
    },
    {
      name: 'Horror',
      PrimaryColor: '#000000',
      SecondaryColor: '#9A9A9A'
    },
    {
      name: 'Romance',
      PrimaryColor: '#E178C5',
      SecondaryColor: '#DFB8D4'
    },
    {
      name: 'Sci-Fi',
      PrimaryColor: '#1D24CA',
      SecondaryColor: '#7D80C6'
    },
    {
      name: 'Sports',
      PrimaryColor: '#944E63',
      SecondaryColor: '#967982'
    },
    {
      name: 'Slice of Life',
      PrimaryColor: '#B5C0D0',
      SecondaryColor: '#C9CCD1'
    },
  ])

  const [animes, setAnimes] = useState([])

  const onNewAnime = (anime) => {
    localStorage.setItem("animes", JSON.stringify([...animes, anime]))
    setAnimes((prevAnimes) => [...prevAnimes, anime])
  }

  function deleteAnime(name){
    const updatedAnimes = animes.filter(anime => anime.name !== name);
    setAnimes(updatedAnimes);
    localStorage.setItem("animes", JSON.stringify(updatedAnimes));
  }

  useEffect(() => {
    const storedAnimes = localStorage.getItem("animes");
    if (storedAnimes) {
      setAnimes(JSON.parse(storedAnimes));
    }
  }, []);

  return (
    <div className="App">
      <Banner/>
      <Form genres={genres.map(genre => genre.name)} onAnimeChanged={anime => onNewAnime(anime)}/>
      {genres.map(genre => <Genre key={genre.name} name={genre.name} primaryColor={genre.PrimaryColor} secondaryColor={genre.SecondaryColor} animes={animes.filter(anime => anime.genre === genre.name)} onDelete={deleteAnime}/>)}
      <Footer/>
    </div>
  );
}

export default App;
