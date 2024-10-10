import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props)=> {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
// document.title = `NewsApi - ${capitalizeFirstLetter( props.category)}`;

  // Here we have added the articles statically so we cant get fresh news as on 
  // articles = [
  //       {
  //         "source": {
  //           "id": "espn-cric-info",
  //           "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "espn-cric-info",
  //           "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "bloomberg",
  //           "name": "Bloomberg"
  //         },
  //         "author": null,
  //         "title": "China Growth Beats Estimates, Adding Signs Economy Gained Traction With Stimulus - Bloomberg",
  //         "description": "China’s strong factory output and investment growth at the start of the year raised doubts over how soon policymakers will step up support still needed to boost demand and reach an ambitious growth target.",
  //         "url": "https://www.bloomberg.com/news/articles/2024-03-18/china-s-growth-beats-estimates-as-production-investment-rev-up",
  //         "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFArdcvSu754/v1/1200x829.jpg",
  //         "publishedAt": "2024-03-18T07:22:13Z",
  //         "content": "Chinas strong factory output and investment growth at the start of the year raised doubts over how soon policymakers will step up support still needed to boost demand and reach an ambitious growth ta… [+339 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "the-verge",
  //           "name": "The Verge"
  //         },
  //         "author": "Allison Johnson",
  //         "title": "Qualcomm’s 8S Gen 3 targets more affordable high-end phones - The Verge",
  //         "description": "The Snapdragon 8S Gen 3 chipset supports a lot of the performance and on-device AI capabilities as the flagship 8 Gen 3 but comes at a lower price.",
  //         "url": "https://www.theverge.com/2024/3/18/24101903/qualcomm-snapdragon-8s-gen-3-chipset-on-device-ai",
  //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/W98XlSnPEoK7lL2nUoIq7X8CQDQ=/0x0:2000x1323/1200x628/filters:focal(1000x662:1001x663)/cdn.vox-cdn.com/uploads/chorus_asset/file/25338088/Snapdragon_8s_Gen_3___Key_Visual.jpg",
  //         "publishedAt": "2024-03-18T06:30:00Z",
  //         "content": "Qualcomms new 8S Gen 3 targets not-quite flagship phones\r\nQualcomms new 8S Gen 3 targets not-quite flagship phones\r\n / A new tier of Snapdragon chipsets aims for upper mid-tier devices or is it low-t… [+2605 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "techcrunch",
  //           "name": "TechCrunch"
  //         },
  //         "author": "Ivan Mehta",
  //         "title": "Apple is reportedly exploring a partnership with Google for Gemini-powered feature on iPhones - TechCrunch",
  //         "description": "Apple is looking to team up with Google for a mega-deal to leverage the Gemini AI model for features on iPhone, Bloomberg reported.",
  //         "url": "https://techcrunch.com/2024/03/17/apple-is-reportedly-exploring-a-partnership-with-google-for-gemini-powered-feature-on-iphones/",
  //         "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/apple-fighting-google.jpg?resize=1200,675",
  //         "publishedAt": "2024-03-18T06:22:30Z",
  //         "content": "Apple is looking to team up with Google for a mega-deal to leverage the Gemini AI model for features on iPhone, Bloomberg reported. This will put Google in a commanding position as the company alread… [+2135 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": null,
  //           "name": "WJXT News4JAX"
  //         },
  //         "author": "Aleesia Hatcher, Jennifer Waugh, Vic Micolucci",
  //         "title": "Three people shot, one dead following shooting at Jax Beach, suspects still at large - WJXT News4JAX ",
  //         "description": "The Jacksonville Sheriff’s Office, Jax Beach Police and Jacksonville Fire and Rescue are investigating a shooting that left two people injured and one person dead in Jacksonville Beach on Sunday night.",
  //         "url": "https://www.news4jax.com/news/local/2024/03/18/live-jax-beach-police-active-shooter-situation/",
  //         "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/CPKZ6TB6S5GPZHQVL63RZY4ELI.png?_a=ATAPphC0",
  //         "publishedAt": "2024-03-18T03:59:01Z",
  //         "content": "JACKSONVILLE BEACH, Fla. The Jacksonville Sheriffs Office, Jacksonville Beach Police Department and Jacksonville Fire and Rescue are investigating a shooting that left two people injured and one pers… [+728 chars]"
  //       },
  //   ]
const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Here we are fetching the articles directly from News Api site by using fetch Api 
const  updateNews = async ()=> {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=71b67540a6c04287b3e3e67e50500f85&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
}
useEffect(() => {
  updateNews();  
},[])

const handlePrevClick = async ()=>{
  console.log("Privious");
  setPage(page - 1)
  updateNews();
}


const handleNextClick = async ()=>{
setPage(page + 1)
updateNews();
}

    return (
      <div className='container my-3'>
        <h2 style={{margin:'80px 0px 40px 0px'}}>NewsApp - Top Headlines {capitalizeFirstLetter( props.category)}</h2>
        {/* If loading is true then show this Spinner */}
        {loading && <Spinner/>} 
        <div className="row my-3">
            {!loading && articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                <h1>Hello</h1>
                          <NewsItem  title={element.title?element.title.slice(0, 30):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                      </div>
             })} 
        </div>
          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Privious</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>  
      </div>
    )
}

News.defualtProps = {
  country: "us",
  pageSize: 9,
  category: "general"
}
News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string
}

export default News
