import episodes from './episodes.json';
import Post from './utils/Components/Post';

function App(): JSX.Element{
  const posts = episodes.map((element) => (
  <Post 
    key={element.id}
    id={element.id}
    url={element.url}
    name={element.name}
    season={element.season}
    number={element.number}
    type={element.type}
    airdate={element.airdate}
    airtime={element.airtime}
    airstamp={element.airstamp}
    runtime={element.runtime}
    image={element.image}
    summary={element.summary}
    _links = {element._links}  
    />));

  return(
    <>
    <header>
      <h1>Game Of Thrones</h1>
    </header>

    <main className="container">
      {posts}
    </main>

    <footer>
      <h3>The Game Of Thrones data has been obtained from <a href="https://tvmaze.com/">TVMaze.com</a>.</h3>
    </footer>
    
    </>
  );
}

export default App;
