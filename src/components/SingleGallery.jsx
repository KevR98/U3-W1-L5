const SingleGallery = (props) => {
  return (
    <img
      className='img-fluid img'
      src={props.movie.Poster}
      alt='movie picture'
    />
  );
};

export default SingleGallery;
