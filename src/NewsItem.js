import React from "react";

const NewsItem =(props)=>{
  let { title, description, imageUrl, newsUrl} = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2023/02/Intro-Bank-649x435.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl}   target-blank="true" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
