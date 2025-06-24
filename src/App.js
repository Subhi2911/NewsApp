import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state={
    progress:0,
    currentCategory: 'general',
  }
  setProgress=(progress)=>{
    this.setState({progress: progress,})
  }

  setCategory = (category) => {
    this.setState({ currentCategory: category });
  }

  handleSearch=(id)=>{
    return id;
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

  pageSize=6;
  render() {
    return (
      <div>
        <Router>
          
          <NavBar searchEngine={this.handleSearch}/>
          {/* <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/> */}
          <LoadingBar
            height='3px'
            color={this.categoryColors[this.state.currentCategory]}
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({progress: 0,})}
          />
            <Routes>
              <Route path="/" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='general' search={this.handleSearch}/>} /> 
              <Route path="/general" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='general'search={this.handleSearch}/>} />
              <Route path="/entertainment" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='entertainment'search={this.handleSearch}/>} />
              <Route path="/business" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='business'search={this.handleSearch}/>} />
              <Route path="/health" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='health'search={this.handleSearch}/>} />
              <Route path="/science" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='science'search={this.handleSearch}/>} />
              <Route path="/sports" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='sports'search={this.handleSearch}/>} />
              <Route path="/technology" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='technology'search={this.handleSearch}/>} />
              <Route path="/search" element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={this.pageSize} country='us' category='technology' search={this.handleSearch}/>} />
              {/* <Route path=" " element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/>} />
              <Route path=" " element={ <News setProgress={this.setProgress} setCategory={this.setCategory}     pageSize={6} country='us' category='general'/>} /> */}
            </Routes>
        </Router>
      </div>
    )
  }
}
