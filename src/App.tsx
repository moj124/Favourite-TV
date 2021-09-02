import Post, { IEpisode } from "./utils/Components/Post";
import { useState, useEffect } from "react";
import { toPad } from "./utils/toPad";

function App(): JSX.Element {
  const [text, setText] = useState("");
  const [selectText, setSelector] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/82/episodes`);
      const jsonBody: IEpisode[] = await response.json();
      setEpisodes(jsonBody);
    };

    getData();
  }, []);

  const posts = episodes
    .filter(
      (element) =>
        selectText === "Select" ||
        (
          "S" +
          toPad(element.season) +
          "E" +
          toPad(element.number) +
          " - " +
          element.name
        )
          .toLowerCase()
          .includes(selectText.toLowerCase())
    )
    .filter(
      (element) =>
        text.length === 0 ||
        (
          "S" +
          toPad(element.season) +
          "E" +
          toPad(element.number) +
          " - " +
          element.name
        )
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        element.summary.toLowerCase().includes(text.toLowerCase())
    )
    .map((element) => (
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

  const options = episodes.map((element) => (
    <option key={element.id}>
      {"S" +
        toPad(element.season) +
        "E" +
        toPad(element.number) +
        " - " +
        element.name}
    </option>
  ));

  return (
    <>
      <header>
        <h1>Game Of Thrones</h1>
        <div className="tool2">
          <select
            name="episodes"
            id="episodes"
            onChange={(e) => setSelector(e.target.value)}
            value={selectText}
          >
            <option>Select</option>
            {options}
          </select>
          {selectText !== "Select" && (
            <button onClick={() => setSelector("Select")}>Clear Select</button>
          )}
        </div>
        <div className="tools">
          <input
            placeholder="your search term..."
            onChange={(e) => setText(e.target.value)}
          />
          {text.length > 0 && text !== "Select" && (
            <p>
              Displaying {posts.length}/{episodes.length} episodes
            </p>
          )}
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
