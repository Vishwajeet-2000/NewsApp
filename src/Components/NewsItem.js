import React from 'react'


const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;  //This is called de-structuring in Js
    return (
        <div className="my3">
            <div className="card" >
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cardBadge" style={{zIndex: '1'}}>
                        {source}
                    </span>
                {/* <img src={imageUrl} className='card-img-top' alt='...'/> */}

                {/* The above img tag will fetch images from News Api site
                    and Below image tag will also do the same job but we have used ternary operator in it hence if any image is not provided by News api it will add defult img from added url below or else it will fetch from  :imageUrl
                */}
                <img src={!imageUrl ? "https://reactjsexample.com/content/images/2021/11/Snipaste_2021-11-28_13-55-49.jpg" : imageUrl} className='card-img-top' alt='...' />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">View More</a>
                </div>
            </div>
        </div>
    )
    
}

export default NewsItem
