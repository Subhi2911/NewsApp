import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

// da1abdb15f6e4db8a745a9cc7047104a
// 629c256e8600416e9087fb1b1f8a8206
export default class News extends Component {
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

    constructor(){
        super();
        console.log("Hello I am constructor from news component");
        this.state={
            articles: [],
            loading: false,
            page:1,
            totalResults: 0,
        }
    }
    // buildUrl=()=>{
    //     if (this.props.useEverything){
    //         return `https://newsapi.org/v2/everything?q=${this.props.country}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=1&pageSize=${this.props.pageSize}`;
    //     }
    //     else{
    //         return `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=1&pageSize=${this.props.pageSize}`;
    //     }
    // }

    async componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
        // This will run the existing code inside componentDidMount logic
            this.setState({ page: 1, loading: true });
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da1abdb15f6e4db8a745a9cc7047104a&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles || [],
                totalResults: parsedData.totalResults || 0,
                loading: false,
            });
        }
    }
    async updateNews(pageNo){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da1abdb15f6e4db8a745a9cc7047104a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles || [],
            loading:false ,
        })
    }
    
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da1abdb15f6e4db8a745a9cc7047104a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles || [], 
            totalResults:parsedData.totalResults || 0,
            loading:false ,
        })
    }

     handlePreviousClick=async()=>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da1abdb15f6e4db8a745a9cc7047104a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data= await fetch(url);
        // let parsedData= await data.json()
        // this.setState({
        //     page:this.state.page - 1,
        //     articles: parsedData.articles || [],
        //     loading:false ,
        // })
        this.setState({page: this.state.page -1})
        this.updateNews();
    }

    handleNextClick=async()=>{
    //     console.log("Next");
        // if ( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        // {
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da1abdb15f6e4db8a745a9cc7047104a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data= await fetch(url);
        //     let parsedData= await data.json()
            
        //     this.setState({
        //         page:this.state.page + 1,
        //         articles: parsedData.articles || [],
        //         loading:false,
        //     })
        // }
        this.setState({page: this.state.page -1})
        this.updateNews();
    }

  render() {
    return (
        <div className='container my-3' >
            <h3 className='text-center' style={{marginBottom:'1rem'} }>NewsDe-Lite Top Headlines</h3>
            {this.state.loading && <Spinner/>}
            <div className="row" >
                {!this.state.loading && Array.isArray(this.state.articles) && this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-3 " key={element.url} >
                            <NewsItem title={element.title?element.title.slice(0,45)+"...":" "} description={element.description?element.description.slice(0,88)+"...": " "} imageUrl={element.urlToImage} newsUrl=
                            {element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    )
                })} 
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <=1 ?true:false} type="button" className="btn btn-dark " onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </div>
    )
  }
}
