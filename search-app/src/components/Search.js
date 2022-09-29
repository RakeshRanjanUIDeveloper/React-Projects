import React, { Component } from 'react'
import './Search.css';
import axios from 'axios';

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query:'',
             results:{},
             loading:false,
             message:''
        };

        this.cancel='';
    }
    
    fetchSearchResults = ( updatedPageNo = ' ', query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl= `https://pixabay.com/api/?key=22362172-6f68df0dda121230179ce4bca&q=${query}${pageNumber}`;
        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel=axios.CancelToken.source();
        axios.get(searchUrl,{
            cancelToken : this.cancel.token
        })
        .then(res =>{
            const resultNotFoundMsg= ! res.data.hits.length ? 'there are no more search results. please try a new search' : '';
            this.setState({
                results:res.data.hits,
                message:resultNotFoundMsg,
                loading:false
            })
        })
        .catch(error =>{
            if(axios.isCancel(error) || error){
                this.setState({
                    loading:false,
                    message:'Failed to Fetch the data, please check network'
                });
            };
        })
    }


    handleOnInoutChange = (event) =>{
        const query= event.target.value;
        this.setState({
            query:query,
            loading:true,
            message:''
        }, () =>{
            this.fetchSearchResults({updatedPageNo : 1, query});
        })
    }

    renderSearchResults = () => {
        const { results } =this.state;
        if(Object.keys(results).length && results.length){
            return(
                <div className="results-container">
                    {results.map(result => {
                        return (
                            <a key={result.id} href={result.previewURL} className="result-item">
                                <h6 className="image-username">{result.username}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={result.username} />
                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        }
    }
    render() {
        const { query } = this.state;
        return (
            <div className="container">
                <h2 className="heading">Live Search React Application</h2>
                <label className="search-label" htmlFor="search-input">
                    <input type="text" value={query} id="search-input" placeholder="Search....." onChange={this.handleOnInoutChange} />
                    <i className="fa fa-search search-icon" aria-hidden="true" />
                 </label>
                 {this.renderSearchResults()}
            </div>
        )
    }
}

export default Search
