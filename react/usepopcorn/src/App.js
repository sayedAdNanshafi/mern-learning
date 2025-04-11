import { useEffect, useState,useRef } from "react";
import StarRating from "./StarRating";
import useMovies from "./useMovies";
import useLocalStorageState from "./useLocalStorageState";
import useKey from "./useKey";


const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const KEY = "ced2d1b9";
export default function App() {
  
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  
  const {movies,isLoading,error}=useMovies(query)
  const [watched,setWatched]=useLocalStorageState([],'watched')
  function handleCloseMovie(){
    setSelectedId(null)
  }
  function handleAddWatched(movie){
    setWatched(watched=>[...watched,movie])
    // localStorage.setItem('watched',JSON.stringify([...watched,movie]))
  }
  function handleDeleteWatched(id){
    setWatched(watched=>watched.filter(movie=>movie.imdbID!==id))
  }
  
  

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} setSelectedId={setSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched}/>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
function Loader() {
  return <p className="loader">Loading...</p>;
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}
function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}
function Search({ query, setQuery }) {
  const inputEl=useRef(null);
  useKey('Enter',function(){
    if(document.activeElement===inputEl.current) return;
    inputEl.current.focus()
    setQuery('')
  })
  
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
function Main({ children }) {
  return <main className="main">{children}</main>;
}
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
function MoviesList({ movies, setSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} setSelectedId={setSelectedId} />
      ))}
    </ul>
  );
}
function Movie({ movie, setSelectedId }) {
  return (
    <li
      onClick={() =>
        setSelectedId((selectedId) =>
          movie.imdbID === selectedId ? null : movie.imdbID
        )
      }
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
// function WatchedBox() {
//   const [watched, setWatched] = useState(tempWatchedData);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedSummary watched={watched} />
//           <WatchedMoviesList watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }
function MovieDetails({ selectedId, setSelectedId,onAddWatched,watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating,setUserRating]=useState('')
  const countRef=useRef(0)
  useEffect(function(){
   if(userRating) countRef.current++
  },[userRating])
  const isWatched=watched.find((el)=>el.imdbID===movie.imdbID)
  const watchedUserRating=watched.find(movie=>movie.imdbID===selectedId)?.userRating
  const {
    Poster: poster,
    Title: title,
    Year: year,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    imdbRating,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  function handleAdd(){
    const newWacthedMovie={
      imdbID:selectedId,
      title,
      year,
      poster,
      imdbRating:Number(imdbRating),
      runtime:runtime.split(' ').at(0),
      userRating,
      countRatedDecisions:countRef.current
    }
    
    onAddWatched(newWacthedMovie)
    setSelectedId(null)
  }
  // useEffect(function(){
  //   function callback(e){
      
  //       if(e.code==='Escape') setSelectedId(null)
    
  //   }
  //   document.addEventListener('keydown',callback)
  // return function(){
  //   document.removeEventListener('keydown',callback)
  // }
  // },[setSelectedId])
  useKey('Escape',()=>setSelectedId(null))
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  useEffect(function(){
    if(!title) return;
    document.title=`Movie | ${title}`
    
    return function(){
      document.title='usePopcorn'
    }
  },[title])

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => setSelectedId(null)}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched?
              <>
              <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
             {userRating>0&& <button className="btn-add" onClick={handleAdd}>+ Add To List</button>}
             </>:<p>You Rated This Movie {watchedUserRating} ⭐</p>}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}
function WatchedMoviesList({ watched,onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched}/>
      ))}
    </ul>
  );
}
function WatchedMovie({ movie,onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={()=>onDeleteWatched(movie.imdbID)}>X</button>
      </div>
    </li>
  );
}
