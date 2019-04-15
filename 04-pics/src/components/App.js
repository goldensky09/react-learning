import React from "react";

import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const initialState = {
    searchTerm: null,
    images: [],
    nextPage: 1,
    pageLimit: 0
};
class App extends React.Component {
    constructor(props) {
        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.state = initialState;
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight && this.state.pageLimit >= this.state.nextPage;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.querySelector('.image-list');
        if (this.isBottom(wrappedElement)) {
            this.loadItems({nextPage: this.state.nextPage});
        }
    };
    onSearchSubmit(term) {
        this.setState(initialState);
        this.setState({ searchTerm: term });
        this.loadItems({ term: term });
    }
    loadItems({ nextPage = 1, term = null }) {
        const searchTerm = term || this.state.searchTerm;
        if (!searchTerm && this.inProgress) return;
        this.inProgress = true;
        unsplash.get('/search/photos', {
            params: {
                query: searchTerm,
                per_page: 30,
                page: nextPage
            }
        }).then((response) => {
            this.setState((prevState) => {
                prevState.images.push(...response.data.results);
                prevState.nextPage = nextPage+1;
                prevState.pageLimit = response.data.total_pages
                return prevState;
            });
            this.inProgress = false;
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;