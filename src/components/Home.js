import React, { useState} from 'react';
import '../App.css';
import MovieAdd from './MovieAdd';
import MovieList from './MovieList';
import FilterName from './FilterName';
import FilterRating from './FilterRating';


export const Home = () => {
const [movies, setMovies] = useState([    
{
    "Title": "Troy ",
    "Year": "2004",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY212bXBUbW1lY21EVGJLUGxtanZ3.jpg",
    "Description" :"After Paris, a Trojan prince, has an affair with Menelaus ''s wife, Helen, he decides to take her with him. Later, Menelaus''s brother uses that as an excuse to wage a war against the city of Troy.",
    "Rate":"10",
    "trailer" :"https://www.youtube.com/embed/znTLzRJimeY"
},   
{
    "Title": "Enola Holmes",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg",
    "Description" :"While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
    "Rate":"6.8",
    "trailer" :"https://www.youtube.com/embed/1d0Zf9sXlHk"
},
{
    "Title": "Harry Potter and the Prisoner of Azkaban",
    "Year": "2004",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21tdk5vY21lY2FsbW1tbW1vd3htYg.jpg",
    "Description" :"Harry, Ron and Hermoine return to Hogwarts just as they learn about Sirius Black and his plans to kill Harry. However, when Harry runs into him, he learns that the truth is far from reality.",
    "Rate":"7.9",
    "trailer" :"https://www.youtube.com/embed/lAxgztbYDbs"
},
{
    "Title": "Once Upon a Snowman",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZTE5ibWJtam12RWN3TGNtelBtamNrTmo.jpg",
    "Description" :"Once Upon a Snowman is a 2020 American computer-animated musical fantasy short film produced by Walt Disney Animation Studios and was released on Disney+ on October 23, 2020. Once Upon a Snowman is part of the Frozen franchise and takes place during the events of Frozen.",
    "Rate":"6.9",
    "trailer" :"https://www.youtube.com/embed/JR7OrwlrsP0"
},
{
    "Title": "Where Hands Touch",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URW1FbUVtbW1tdmNFY2xtam1Zc2ptb3R3.jpg",
    "Description" :"A biracial girl faces the constant threat of getting targeted because of her colour in a Nazi-ruled Germany. Moreover, her lover is the son of a prominent SS officer.",
    "Rate":"5.4",
    "trailer" :"https://www.youtube.com/embed/0t8iVtFGHCc"
},
{
    "Title": "Extraction",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZcEVtVHBMY0VjUHZOZ2FtVHJOag.jpg",
    "Description" :"A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.",
    "Rate":"7.2",
    "trailer" :"https://www.youtube.com/embed/L6P3nI6VnlY",
},
{
    "Title": "Five Feet Apart",
    "Year": "2019",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URXZOcHBibWVjbXZsbUVtam12UHZ3eA.jpg",
    "Description" :"Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
    "Rate":"7.2",
    "trailer" :"https://www.youtube.com/embed/24YrEAGF32M"
},
{
    "Title": "Up",
    "Year": "2009",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21Fdk5wVGFjbXZQbG1idk5oTHc.jpg",
    "Description" :"Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    "Rate":"8.2",
    "trailer" :"https://www.youtube.com/embed/ORFWdXl_zJ4"
},
{
    "Title": "Taken 3 ",
    "Year": "2014",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZcFlZYWNtdm1td1RqbW12Y2NOdg.jpg",
    "Description" :"Bryan Mills is accused of a murder he did not commit. He does not want to accept this unjust fate and makes a run for it, but Inspector Franck Dotzler seeks to hunt him down.",
    "Rate":"9",
    "trailer" :"https://www.youtube.com/embed/HUJZjUaNzgw"
},
{
    "Title": "The Holiday",
    "Year": "2006",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZWUVtcGFjeG1ibW12TkVhbG12.jpg",
    "Description" :"Two girls from different countries swap homes for the holidays to get away from their relationship issues. However, their lives change unexpectedly when they meet and fall in love with two local guys.",
    "Rate":"7",
    "trailer" :"https://www.youtube.com/embed/BDi5zH18vxU"
},
{
    "Title": "I Am Sam",
    "Year": "2001",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URW1UbW12RWNQYXhtam1Ia05t.jpg",
    "Description" :"Sam, a man with special needs, fights for the custody of his daughter when her mother abandons them. He tries to prove that he is a capable father with the help of an infamous lawyer.",
    "Rate":"8.5",
    "trailer" :"https://www.youtube.com/embed/ir6_2EkhzAc"
},
{
    "Title": "Belle",
    "Year": "2013",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZYm1wZWNtanZ3bG1IY21yd0s.jpg",
    "Description" :"The illegitimate daughter of a navy admiral is trained and brought up by her aristocratic uncle and his wife. She grows up to abolish slavery in England.",
    "Rate":"7.2",
    "trailer" :"https://www.youtube.com/embed/9Qx90wdRD2I"
}
]);
const add=(newFilm)=>{
    setMovies(movies=>[...movies,newFilm])
  }
  const inputSearch=(input)=>{
    setMovies(movies.filter(m => m.Title.toLowerCase().includes(input)))
  }
  const rating=(rate)=>{
    setMovies(movies.filter(mo=>mo.Rate>=rate))
  }
return (
    <div className='App'>
    <nav>
        <MovieAdd add={add} />

    <FilterName inputSearch={inputSearch}/>
    <FilterRating rating={rating}/>
    </nav>
    <MovieList movies={movies}/>
    </div>
)
}

export default Home
