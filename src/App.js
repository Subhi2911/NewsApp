import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  handleSearch=(id)=>{
    return id;
  }
  pageSize=8;
  render() {
    return (
      <div>
        <Router>
          <NavBar searchEngine={this.handleSearch}/>
          {/* <News pageSize={6} country='us' category='general'/> */}
          
            <Routes>
              <Route path="/" element={ <News pageSize={this.pageSize} country='us' category='general' search={this.handleSearch}/>} /> 
              <Route path="/general" element={ <News pageSize={this.pageSize} country='us' category='general'search={this.handleSearch}/>} />
              <Route path="/entertainment" element={ <News pageSize={this.pageSize} country='us' category='entertainment'search={this.handleSearch}/>} />
              <Route path="/business" element={ <News pageSize={this.pageSize} country='us' category='business'search={this.handleSearch}/>} />
              <Route path="/health" element={ <News pageSize={this.pageSize} country='us' category='health'search={this.handleSearch}/>} />
              <Route path="/science" element={ <News pageSize={this.pageSize} country='us' category='science'search={this.handleSearch}/>} />
              <Route path="/sports" element={ <News pageSize={this.pageSize} country='us' category='sports'search={this.handleSearch}/>} />
              <Route path="/technology" element={ <News pageSize={this.pageSize} country='us' category='technology'search={this.handleSearch}/>} />
              <Route path="/search" element={ <News pageSize={this.pageSize} country='us' category='technology' search={this.handleSearch}/>} />
              {/* <Route path=" " element={ <News pageSize={6} country='us' category='general'/>} />
              <Route path=" " element={ <News pageSize={6} country='us' category='general'/>} /> */}
            </Routes>
        </Router>
      </div>
    )
  }
}
