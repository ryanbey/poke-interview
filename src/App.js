import './App.css'
import PokemonList from './PokemonList'
import Favorites from './Favorites'

export default function App() {
  return (
    <div className="App">
      <h1>PokéAPI Project</h1>
      <PokemonList />
      <Favorites />
    </div>
  )
}
