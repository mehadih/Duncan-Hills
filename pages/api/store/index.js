import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import homeReducer from '../redux/home';
import postReducer from '../redux/post';
import aboutReducer from '../redux/about';
import contactReducer from '../redux/contact';
import galleryReducer from '../redux/gallery';
import penthouseReducer from '../redux/penthouse';
import projectReducer from '../redux/project';
import quintessReducer from '../redux/quintess';
import whyinvestReducer from '../redux/whyInvest';
import footerReducer from '../redux/footer';

// combined all reducers
const combinedReducer = combineReducers({
    homeReducer,
    postReducer,
    aboutReducer,
    contactReducer,
    galleryReducer,
    penthouseReducer,
    projectReducer,
    quintessReducer,
    whyinvestReducer,
    footerReducer
})

// master reducer
const masterReducer = (state, actions) => {
    if (actions.type === HYDRATE) {
        return {...state, ...actions.payload}
    } else {
        return combinedReducer(state, actions)
    }
}

// main store
export const store = () => configureStore({
    reducer: masterReducer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const wrapper = createWrapper(store) //,{debug: true} -- if need debug

