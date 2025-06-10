import Movie from "./Movie";

function MoviesList({ filtredList }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {filtredList.map((el) => (
        <Movie {...el} />
      ))}
    </div>
  );
}

export default MoviesList;
