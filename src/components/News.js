import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country:'india',
        pageSize:6,
        category:'sports'
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log("Hello I am constructor from news component");
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, 
            totalResults:parsedData.totalResults,
            loading:false ,
        })
    }

     handlePreviousClick=async()=>{
        console.log("Previous");
        let url= `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
            loading:false ,
        })
    }

    handleNextClick=async()=>{
        console.log("Next");
        if ( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
            let url= `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=629c256e8600416e9087fb1b1f8a8206&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data= await fetch(url);
            let parsedData= await data.json()
            
            this.setState({
                page:this.state.page + 1,
                articles: parsedData.articles,
                loading:false,
            })
        }
    }

  render() {
    return (
        <div className='container my-3' >
            <h3 className='text-center' style={{marginBottom:'1rem'} }>NewsDe-Lite Top Headlines</h3>
            {this.state.loading && <Spinner/>}
            <div className="row" >
                {!this.state.loading && this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-3 " key={element.url} >
                            <NewsItem title={element.title?element.title.slice(0,45)+"...":" "} description={element.description?element.description.slice(0,88)+"...": " "} imageUrl={element.urlToImage} newsUrl=
                            {element.url}/>
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
