import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

// da1abdb15f6e4db8a745a9cc7047104a subhi
// 629c256e8600416e9087fb1b1f8a8206 msubh
// d6a2d33a591442f49b015ca553ccf194 arpita
export default class News extends Component {

    static defaultProps = {
        country:'in',
        pageSize:6,
        //category:'general',
       
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
   
        
    }

    capitalizer(string){
        if(!string) return ' ';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        
        this.state={
            articles: [],
            loading: false,
            page:1,
            totalResults: 0,
            searchQuery: this.props.searchQuery,
        }
        document.title= `NewsDe-Lite || ${window.location.pathname==="/search"?this.props.searchQuery:this.capitalizer(this.props.category)}`;
    }
   
    async updateNews(props){
        this.props.setProgress(10); // Start loader
        
        let url=''
        
        if (window.location.pathname === '/search' && this.props.searchQuery && this.props.searchQuery.trim() !== '') {
            url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        }
        else if (this.props.category==='home' && window.location.pathname === '/'){
        url = `https://newsapi.org/v2/everything?q=all&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        }

        else {
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        }

        this.setState({loading:true});
        let data= await fetch(url);

        this.props.setProgress(30); // Progress update

        let parsedData= await data.json()

        this.props.setProgress(70); // Progress update

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
            document.title= `NewsDe-Lite || ${window.location.pathname==="/search"?'Search':this.capitalizer(this.props.category)}`;
        }
        if (this.props.searchQuery !== prevProps.searchQuery || this.props.category !== prevProps.category) {
            await this.setState({ page: 1, articles: [] });
            this.updateNews();
        }
    }

    fetchMoreData=async()=>{
        
        let url=''
        if (window.location.pathname === '/search' && this.props.searchQuery && this.props.searchQuery.trim() !== '' ) {
        url = `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        }
        else if (this.props.category==='home' && window.location.pathname === '/'){
        url = `https://newsapi.org/v2/everything?q=all&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        }
        else {
        url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        }
        this.setState({page: this.state.page +1 })

        let data= await fetch(url);
        
        let parsedData= await data.json()

        this.setState({
            totalResults:parsedData.totalResults || 0,
            articles: this.state.articles.concat(parsedData.articles) || [],
            page: this.state.page +1,
        })
        
    }

  render() {
    return (
       <>
            <h3 className='text-center' style={{ marginBottom: '1rem', marginTop: '5rem' }}>
                {this.props.searchQuery && this.props.searchQuery.trim() !== ''&& window.location.pathname==='/search'? `Search Results for "${this.props.searchQuery}"`: this.props.category === 'home'? `Latest News from Around the World`: `NewsDe-Lite Top Headlines from ${this.capitalizer(this.props.category)}`}
            </h3>
            
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
           
        </>
    )
  }
}
