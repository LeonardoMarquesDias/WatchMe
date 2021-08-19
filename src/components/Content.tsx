import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

// Cria uma interface para tipar a props 
interface ContentProps {
  selectedGenre: { title: string };
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{ Value: string }>;
  }>;
}

// Declara a função com as props e declara as props passando a tipagem "ContentProps" no parâmetro da função
// { movies, selectedGenre }: ContentProps
export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title} </span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key ={movie.Title} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}