import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    let myStyle={
      height:'150px'
    }
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageUrl?imageUrl:"DefaultNewsImage.jpg"} className="card-img-top" alt="..." style={ myStyle}/>
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem

