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
        searchInput: ''
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
        }
    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsDe-Lite</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#0065F8' }} to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#FFCC00' }} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#FF2DF1' }} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#FF0B55' }} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#8B5DFF' }} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#16C47F' }} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{ color: '#C4E1E6' }} to="/technology">Technology</Link></li>

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
