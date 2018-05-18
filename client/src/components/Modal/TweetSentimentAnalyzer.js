import React from 'react';

const TweetSentimentAnalyzer = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12" style={{textAlign: "center"}}>
                    <h2>Tweet Sentiment Analyzer</h2>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-md-12"><h4>Overview</h4></div>
                    <div className="col">
                        User is able to input a Twitter handle and retrive most recent tweets. These tweets
                        are run through Google's Text Sentiment Analyzer API. 
                    </div>
                </div>
            </div> 
            <br/>
            <div className="row">
                <div className="row">
                    <div className="col-md-12"><h4>Technology Used</h4></div>
                    <br/>
                    <div className="col">
                        HTML5, CSS, React, NodeJs, Heroku
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <a href="https://github.com/NZepeda/google-naturallanguage-tweetanalyzer">Github Link</a>
                </div>
                <div className="col">
                    <a href="https://user-tweet-sentiment-analyzer.herokuapp.com/">Live Website</a>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default TweetSentimentAnalyzer;