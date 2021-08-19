interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function Post(props: IEpisode): JSX.Element {
  const paddedSeason = toPad(props.season);
  const paddedEpisode = toPad(props.number);
  return (
    <div className="post" id={props.id.toString()}>
      <h2>
        {props.name} - S{paddedSeason}E{paddedEpisode}
      </h2>
      <img src={props.image.medium} alt=""></img>
      <p>{props.summary.replace(/(<([^>]+)>)/gi, "")}</p>
    </div>
  );
}

function toPad(number: number): string {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

export default Post;
