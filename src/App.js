import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
{/* <>     React.Fragment */ }

class App extends React.Component {

  state = {
    movies: []
  }

  // componentDidMount = () => {
  //   fetch('http://www.omdbapi.com/?apikey=5043d844&s=matrix')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ movies: data.Search });
  //     });
  // }

  render() {
    return (
      <>
        <Header />
        {/* <Main movies={this.state.movies} /> */}
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
