import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    let myStyle={
      height:'150px'
    }
    return (
        <div className='my-3'>
          <div className="card" >
            <div>
              <span className="badge rounded-pill bg-danger" 
              style={{
                display:'flex',
                justifyContent:'flexEnd', 
                position:'absolute',
                right:'0'}}>
                {source}
              </span>
            </div>
              <img src={imageUrl?imageUrl:"DefaultNewsImage.jpg"} className="card-img-top" alt="..." style={ myStyle} loading="lazy"/>
              <div className="card-body" >
                  <h5 className="card-title">{title} </h5>
                  <p className="card-text">{description}.</p>
                  <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                  <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sn btn-dark">Read More</a>
              </div>
          </div>
        </div>
    )
  }
}

export default NewsItem

