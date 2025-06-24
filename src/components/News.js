import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

// da1abdb15f6e4db8a745a9cc7047104a
// 629c256e8600416e9087fb1b1f8a8206
export default class News extends Component {
    api= '629c256e8600416e9087fb1b1f8a8206';

    static defaultProps = {
        country:'in',
        pageSize:6,
        category:'general',
        //search:'general',
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
   
        //search: PropTypes.string,
    }

    capitalizer(string){
        if(!string) return ' ';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        console.log("Hello I am constructor from news component");
        this.state={
            articles: [],
            loading: false,
            page:1,
            totalResults: 0,
            searchQuery: this.props.searchQuery,
        }
        document.title= `NewsDe-Lite || ${this.capitalizer(this.props.category)}`;
    }
    // buildUrl=()=>{
    //     if (this.props.searchQuery){
    //         return `https://newsapi.org/v2/everything?q=${this.props.country}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=1&pageSize=${this.props.pageSize}`;
    //     }
    //     else{
    //         return `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=1&pageSize=${this.props.pageSize}`;
    //     }
    // }

    async updateNews(props){
        this.props.setProgress(10); // Start loader
        
        let url=''
        
        if (window.location.pathname === '/search' && this.props.searchQuery && this.props.searchQuery.trim() !== '') {
            url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        }

        this.setState({loading:true});
        let data= await fetch(url);

        this.props.setProgress(30); // Progress update

        let parsedData= await data.json()

        this.props.setProgress(70); // Progress update

        console.log(parsedData);
        this.setState({
            totalResults:parsedData.totalResults || 0,
            articles: parsedData.articles || [],
            loading:false ,
            page: 1,
        })
        this.props.setProgress(100);
        
    }
    
    async componentDidMount(){
        this.props.setCategory(this.props.category);
        this.updateNews()
    }

    async componentDidUpdate(prevProps, prevState) {
        // When category changes, fetch new data
        if (this.props.category !== prevProps.category) {
            await this.setState({ page: 1 }); // Reset to page 1
            this.props.setCategory(this.props.category); // Send updated category
            this.updateNews();
        }
        if (this.props.searchQuery !== prevProps.searchQuery || this.props.category !== prevProps.category) {
            await this.setState({ page: 1, articles: [] });
            this.updateNews();
        }
    }

    fetchMoreData=async()=>{
        let newPage=this.state.page +1 
        // this.setState({page:this.state.page +1 })
        
        let url=''
        if (window.location.pathname === '/search' && this.props.searchQuery && this.props.searchQuery.trim() !== '') {
        url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    } else {
        url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }

        let data= await fetch(url);
        
        let parsedData= await data.json()
        
        console.log(parsedData);

        this.setState({
            totalResults:parsedData.totalResults || 0,
            articles: this.state.articles.concat(parsedData.articles) || [],
            page: newPage,
        })
        
    }
    //  handlePreviousClick=async()=>{
    //     this.setState({page:this.state.page - 1});
    //     this.updateNews();
    // }

    // handleNextClick=async()=>{
    //     this.setState({page:this.state.page +1})
    //     this.updateNews();
    // }

  render() {
    return (
       <>
            <h3 className='text-center' style={{ marginBottom: '1rem', marginTop: '5rem' }}>
                {this.props.searchQuery && this.props.searchQuery.trim() !== ''&& window.location.pathname==='/search'? `Search Results for "${this.props.searchQuery}"`: this.props.category === 'home'? `Latest News from Around the World`: `NewsDe-Lite Top Headlines from ${this.capitalizer(this.props.category)}`}
            </h3>
            {/* {this.state.loading && <Spinner/>} */}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length < this.state.totalResults}
                loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row" >
                            {this.state.articles.map((element,index)=>{
                                return(
                                    <div className="col-md-3 " key={element.url + index} >
                                        <NewsItem 
                                        title={element.title?element.title.slice(0,45)+"...":" "} 
                                        description={element.description?element.description.slice(0,88)+"...": " "} 
                                        imageUrl={element.urlToImage} 
                                        newsUrl={element.url} 
                                        author={element.author?element.author:"Unknown"} 
                                        date={element.publishedAt} 
                                        source={element.source.name}/>
                                    </div>
                                )
                            })} 
                            {this.state.articles.length === 0 && !this.state.loading && (
                                <h4 className="text-center mt-4">No results found.</h4>
                            )}
                        </div>
                    </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <=1 ?true:false} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
        </>
    )
  }
}
