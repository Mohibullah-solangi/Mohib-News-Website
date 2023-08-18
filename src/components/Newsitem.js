import React from "react";

const Newsitem =(props)=> {
  
    

    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex: "1", left: "90%"}}>
            {props.source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p className="card-text my-2">
              <small className="text-muted">
                By {props.author ? props.author : "Unknow"} on{" "}
                {new Date(props.date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
