import { toPad } from "../toPad";

export interface IEpisode {
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
    medium: string | null;
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
      {props.image.medium && <img src={props.image.medium} alt=""></img>}
      <p>{props.summary.replace(/(<([^>]+)>)/gi, "")}</p>
    </div>
  );
}

export default Post;
