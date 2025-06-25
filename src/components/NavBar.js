import React, { Component  } from 'react'
//import { BrowserRouter } from 'react-router-dom'
//import PropTypes from 'prop-types'
import {
    Link, 
    useNavigate
} from 'react-router-dom'

function withNavigation(component) {
    return function(props){
        const navigate = useNavigate();
        return <NavBar {...props} navigate={navigate} />;
    };
}

export class NavBar extends Component {

    state = {
        searchInput: '',
        active: 'active',
    }

    handleInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchInput } = this.state;

        if (searchInput.trim() !== '') {
        this.props.searchEngine(searchInput);         // update App's searchQuery
        this.props.navigate('/search');               // redirect to /search
        this.setState({searchInput: ''})
        }
    }

    handleClick=(name)=>{
        this.setState({active: name,});
    }


    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg  fixed-top" style={{backgroundColor:'#F1EFEC'}}> 
                <div className="container-fluid">
                    <div className="navbar-brand" >NewsDe-Lite</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='home'?'active' : " "}`} aria-current="page" to="/" onClick={()=>this.handleClick('home')}>Home</Link></li>
                            
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='general'?'active' : " "}`} style={{ color: '#0065F8' }} onClick={()=>this.handleClick('general')} to="/general">General</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='entertainment'?'active' : " "}`} style={{ color: '#FFCC00' }} onClick={()=>this.handleClick('entertainment')} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='business'?'active' : " "}`} style={{ color: '#FF2DF1' }} onClick={()=>this.handleClick('business')} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='health'?'active' : " "}`} style={{ color: '#FF0B55' }} onClick={()=>this.handleClick('health')} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='science'?'active' : " "}`} style={{ color: '#8B5DFF' }} onClick={()=>this.handleClick('science')} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='sports'?'active' : " "}`} style={{ color: '#16C47F' }} onClick={()=>this.handleClick('sports')} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${this.state.active==='technology'?'active' : " "}`} style={{ color: '#093FB4' }} onClick={()=>this.handleClick('technology')} to="/technology">Technology</Link></li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
                        <input className="form-control me-2" 
                        id="searched-item" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={this.state.searchInput}
                        onChange={this.handleInputChange}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default withNavigation(NavBar);
