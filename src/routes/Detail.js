import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    console.log(details);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      <h2>details</h2>
    </div>
  );
}
export default Detail;
