import React from "react";
import {likeAC, setNewsAC, unlikeAC} from "../../redux/news-reducer";
import {connect} from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
    return {
        news:state.newsPage.news
    };
}

let mapDispatchToProps = (dispatch) => {
    return  {
        like:(newsId) => {
            dispatch(likeAC(newsId))},
        unlike:(newsId) => {
            dispatch(unlikeAC(newsId))},
        setNews:(news) => {
            dispatch(setNewsAC(news))}
    };
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;