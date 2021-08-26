import episodes from "./episodes.json";
import Post from "./utils/Components/Post";
import { useState } from "react";

function App(): JSX.Element {
  const [text,setText] = useState('');
  const posts = episodes.filter((element) => text === '' || ((element.name.toLowerCase().includes(text.toLowerCase()) || element.summary.toLowerCase().includes(text.toLowerCase()) && text.length === 0))).map((element) => (
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
      _links={element._links}
    />
  ));

  return (
    <>
      <header>
        <h1>Game Of Thrones</h1>
        <div className='tools'>
            <input placeholder='your search term...' onChange={(e) => setText(e.target.value)}/>
            {text.length > 0 && <p>Displaying {posts.length}/{episodes.length} episodes</p>}
        </div>
      </header>

      <main className="container">{posts}</main>

      <footer>
        <h3>
          The Game Of Thrones data has been obtained from{" "}
          <a href="https://tvmaze.com/">TVMaze.com</a>.
        </h3>
      </footer>
    </>
  );
}

export default App;
