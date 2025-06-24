import './App.css';

import React, { Component } from 'react'
import NavBarWithNavigate from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  pageSize=8;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0,
    currentCategory: 'general',
  }
  setProgress=(progress)=>{
    this.setState({progress: progress,})
  }

  setCategory = (category) => {
    this.setState({ currentCategory: category ,});
  }

  handleSearch=(query)=>{
    this.setState({searchQuery: query});
  }

  categoryColors = {
    general: '#0065F8',
    entertainment: '#FFCC00',
    business: '#FF2DF1',
    health: '#FF0B55',
    science: '#8B5DFF',
    sports: '#16C47F',
    technology: '#C4E1E6'
};

  render() {
    return (
      <div>
        <Router>
          
          <NavBarWithNavigate searchEngine={this.handleSearch}/>
          {/* <News setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/> */}
          <LoadingBar
            height='3px'
            color={this.categoryColors[this.state.currentCategory]}
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({progress: 0,})}
          />
            <Routes>
              <Route path="/" element={ <News uKey='home' setProgress={this.setProgress} apiKey={this.apiKey}  setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='home' searchQuery='all'/>} /> 
              <Route path="/general" element={ <News uKey='general' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='general'searchQuery={this.state.searchQuery}/>} />
              <Route path="/entertainment" element={ <News uKey='entertainment' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='entertainment'searchQuery={this.state.searchQuery}/>} />
              <Route path="/business" element={ <News uKey='business' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='business' searchQuery={this.state.searchQuery}/>} />
              <Route path="/health" element={ <News uKey='health' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='health' searchQuery={this.state.searchQuery}/>} />
              <Route path="/science" element={ <News uKey='science' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='science' searchQuery={this.state.searchQuery}/>} />
              <Route path="/sports" element={ <News uKey='sports' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='sports' searchQuery={this.state.searchQuery}/>} />
              <Route path="/technology" element={ <News uKey='technology' setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='technology' searchQuery={this.state.searchQuery}/>} />
              <Route path="/search" element={ <News uKey={this.state.searchQuery} setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' searchQuery={this.state.searchQuery}/>} />
              {/* <Route path=" " element={ <News setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/>} />
              <Route path=" " element={ <News setProgress={this.setProgress} apiKey={this.apiKey} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/>} /> */}
            </Routes>
        </Router>
      </div>
    )
  }
}
