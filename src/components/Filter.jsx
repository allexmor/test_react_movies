import React from 'react';

class Filter extends React.Component {

    state = {
        checkedType: ''
    }

    setTypeValue = (event) => {
        this.setState({ checkedType: event.target.value });
        console.log(event.target.value, this.state.checkedType);
        this.props.setType(event.target.value);
    }

    componentDidMount() {
        this.setState({ checkedType: 'All' });
    }

    render() {

        return (
            <div className="radio-wrapper">
                <label>
                    <input type="radio" className="with-gap" id="all" name="type" value="All" checked={this.state.checkedType == 'All' ? true : false} onChange={this.setTypeValue} />
                    <span>All</span>
                </label>
                <label>
                    <input type="radio" className="with-gap" id="movie" name="type" value="movie" checked={this.state.checkedType == 'movie' ? true : false} onChange={this.setTypeValue} />
                    <span>Movie</span>
                </label>
                <label>
                    <input type="radio" className="with-gap" id="series" name="type" value="series" checked={this.state.checkedType == 'series' ? true : false} onChange={this.setTypeValue} />
                    <span>Series</span>
                </label>
            </div>
        )
    }
}

export { Filter };