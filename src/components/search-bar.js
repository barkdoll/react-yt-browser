import React, { Component } from 'react';



/* The reason we can just write component here instead of React.Component is because in the import statement at the top, we imported React and { Component }. This basically says to React: "Hey React, import React and the property called 'Component' into this file." It would be the same as defining it like this:

    const Component = React.Component; */

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
