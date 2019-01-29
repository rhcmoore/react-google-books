import React, { Component } from "react";
import BookCard from "./BookCard";
import Row from "./Row";
import seedData from "../seedData.json"
import SearchForm from "./SearchForm";
import API from "../utils/API";

class Container extends Component {

    state = {
        books: seedData,
        search: "",
        results: []
        };

    // on page load, 
    componentDidMount() {
        console.log("Mounted");
        this.searchBooks("Jim Harrison");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({results:res.data.items})).then(console.log(this.state.results))
            .catch(err => console.log(err));
    }

    // on Book click,
    handleBookClick = event => {
    // Log book ID (which is the event)
        let bookId = event;
        console.log(bookId);
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Google Books search</h1>
                <Row>
                <SearchForm 
                        search={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </Row>
                <Row >
                    {this.state.results.map(book => ( 
                        <BookCard
                            id={book.volumeInfo.id} 
                            title={book.volumeInfo.title} 
                            description={book.searchInfo.textSnippet} 
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            link={book.volumeInfo.infoLink} 
                            handleClick={this.handleBookClick}
                        />
                    ))}
                </Row>
            </div>
        )
    }
}

export default Container;