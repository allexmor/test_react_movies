import React from 'react';
import { Movies } from '../components/Movies';
import { Preloder } from '../components/Preloader';
import { Search } from '../components/Search';
import { Filter } from '../components/Filter';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        type: '',
        loading: true,
    }

    componentDidMount() {

        this.setState({ filter: 1 });

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    setType = (type) => {
        if (type === 'All')
            type = '';
        this.setState({ type: type });
        console.log('25', this.state.type);
    }

    searchMovies = (searchText) => {

        console.log(searchText, this.state.type);

        if (searchText.length > 2) {
            this.setState({ loading: true });
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&type=${this.state.type}`)
                .then(response => {
                    return response.json()
                }
                )
                .then(data => {
                    if (data) {
                        console.log('data.Response:' + data.Response);
                        //  if (data.Response == 'True')
                        this.setState({ movies: data.Search, loading: false })
                    }
                }).catch(err => {
                    console.eror(err);
                    this.setState({ loading: false });
                })
        }

    }



    render() {
        const { movies, loading } = this.state;

        return (<main className="content container">
            {/* <Movies movies={props.movies} /> */}
            <Search searchMovies={this.searchMovies} />
            <Filter setType={this.setType} />
            {
                !loading ?
                    (<Movies movies={movies} />)
                    : <Preloder />
            }
        </main>)
    }
}

export { Main }