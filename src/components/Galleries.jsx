import { Component } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import SingleGalleries from './SingleGallery';

const URL = 'http://www.omdbapi.com/?apikey=249cd937&s=';

class Gallery extends Component {
  state = {
    films: [],
    loading: true,
    error: false,
  };

  getFilms = () => {
    fetch(URL + this.props.movie)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Errore nel caricamento');
        }
      })

      .then((movies) => {
        // console.log(movies.Search);
        this.setState({ films: movies.Search, loading: false });
      })

      .catch((err) => {
        console.log('Errore nella chiamata', err);
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Row className='mx-2 g-2'>
        {this.state.loading && (
          <div className='text-center'>
            <Spinner animation='border' role='status'></Spinner>
          </div>
        )}
        {this.state.films.slice(0, 6).map((movie) => (
          <Col xs={6} md={4} xl={2} key={movie.imdbID}>
            <SingleGalleries movie={movie} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Gallery;
