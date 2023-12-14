import React from "react";

class Search extends React.Component {

    state = {
        search: '',
    }

    handleClick = (event) => {
        if (event.key == 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        // console.log(this.props);
        return <div className="row">
            <div className="col s12">
                <div className="input-field inline">
                    <input
                        placeholder='search'
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleClick}
                    /><br />
                    <button className="btn search-btn" onClick={this.handleClick}>Поиск</button>
                </div>
            </div>
        </div>
    }
}

export { Search };