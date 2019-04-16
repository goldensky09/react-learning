import React from "react";

import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.state = {
            searchTerm: null,
            images: [],
            nextPage: 1,
            pageLimit: 0
        };
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
                let newState = {...prevState};
                if(nextPage === 1) {
                    newState.searchTerm = term;
                    newState.images = response.data.results;
                } else {
                    newState.images.push(...response.data.results);
                } 
                newState.nextPage = nextPage+1;
                newState.pageLimit = response.data.total_pages
                return newState;
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