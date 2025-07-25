import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleGalleries from './SingleGallery';

const URL = 'http://www.omdbapi.com/?apikey=249cd937&s=';

class Gallery extends Component {
  state = {
    films: [],
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
        console.log(movies);
        this.setState({ films: movies.Search });
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
      <Row className='mx-2'>
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
