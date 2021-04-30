const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';
const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE: {
            return {
                ...state,
                news: state.news.map(n => {
                    if (n.id === action.newsId) {
                        return {
                            ...n,
                            liked: true,
                            likeCount: 1
                        }
                    }
                    return n;
                })
            }
        }
        case UNLIKE: {
            return {
                ...state,
                news: state.news.map(n => {
                    if (n.id === action.newsId) {
                        return {
                            ...n,
                            liked: false,
                            likeCount: 1
                        }
                    }
                    return n;
                })
            }
        }
        case SET_NEWS: {
            return {
                ...state,
                news: [...state.news, ...action.news]
            }
        }
        default:
            return state;
    }
}

export const likeAC = (newsId) => ({
    type: LIKE, newsId
})

export const unlikeAC = (newsId) => ({
    type: UNLIKE, newsId
})

export const setNewsAC = (news) => ({
    type: SET_NEWS, news
})

export default newsReducer;