import React, { useEffect , useState }  from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
 News.defaultProps = {
    country: "us",
    pagesize: 5,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string.isRequired,
    pagesize: PropTypes.number.isRequired,
    category: PropTypes.string,
  };
  const Capatilizedfunc = (string) => {
    return string.charAt(0).toUpperCase() + string.substr(1, string.length);
  };
 
    console.log("I am constructor from news component");
    const {articles, setArticles} = useState([])
    const {loading, setLoading} = useState(false)
    const {totalResults, settotalResults} = useState(0)
    const {page, setpage} = useState(1)

      
   

    const updatecontent = async () =>{
      console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8068a5539a8942ffac8cd8ce93e00f40&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
   
      setArticles(parseddata.articles) 
      settotalResults(parseddata.totalResults) 
      setLoading(false);}
  
    useEffect(()=>{
      document.title = ` ${Capatilizedfunc(
        props.category
      )} - Solangs News`;
        updatecontent();
        
      }
     
    )



  // const handlenextclick = async () => {
  //   console.log("next");

  //   if (
  //     (page + 1)  >
  //     Math.ceil(totalResults / props.pagesize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=8068a5539a8942ffac8cd8ce93e00f40&page=${
  //       page + 1
  //     }&pagesize=${props.pagesize}`;
  //     setLoading(true);
  //     let data = await fetch(url);
  //     let parseddata = await data.json();
      
  //       setpage(page + 1)
  //       setArticles(parseddata.articles)
  //       setLoading(false);
    
  //   }
  // };

  // const handleprevclick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=8068a5539a8942ffac8cd8ce93e00f40&page=${
  //    page - 1
  //   }&pagesize=${props.pagesize}`;
  //   console.log("previous");
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseddata = await data.json();

  //   setpage(page - 1)
  //       setArticles(parseddata.articles)
  //       setLoading(false);
  // };
  const fetchMoreData = async () => {
    setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8068a5539a8942ffac8cd8ce93e00f40&page=${this.state.page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    
      
      setArticles(articles.concat(parseddata.articles))
      settotalResults(parseddata.totalResults) 
      setLoading(false);
    
  };

  
    console.log("render");
    return (
      <>
        <h1 className="text-center" style={{marginTop: "90px"}}>
          Top Headlines from {Capatilizedfunc(props.category)}
          {/* {this.state.loading && <Spinner />} */}
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData()}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          hasMore={articles.length !== totalResults}
          
          
        >
          <div className="container">
          
          <div className="row my-4 row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-evenly">
            {/* {!this.state.loading && */}
              {articles.map((elem) => {
                return (
                  <div className="col" key={elem.url}>
                    <Newsitem
                      title={elem.title}
                      description={
                        elem.description > 0
                          ? elem.description.slice(0, 57)
                          : ""
                      }
                      imageUrl={elem.urlToImage}
                      newsUrl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                      source={elem.source.name}
                    />
                  </div>
                 
                );
              })}
              
              {loading && <Spinner />}
          
          </div>
          </div>
         
        </InfiniteScroll>
        {/* <div className="container">
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handleprevclick}
            >
              &larr; Previous
            </button>

            <button
              disabled={this.state.page +1 > Math.ceil(this.state.totalResults / props.pagesize)}
              className="btn btn-dark"
              onClick={this.handlenextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div> */}
      </>
    );
  
}

export default News;
