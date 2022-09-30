import {
    FETCH_ALL,
    FETCH_POST,
    CREATE,
    UPDATE,
    DELETE,
    FETCH_BY_SEARCH,
    START_LOADING,
    END_LOADING,
} from '../constants/ActionTypes'
import * as api from '../api'
// importing everything from the index.js file as api

// This are the action creators 
// these are the functions that return actions
// action is just an object that has a type and a payload 
// payload is the data which stores all of the posts

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchPosts(page)
        dispatch({
            type: FETCH_ALL,
            payload: data
        });

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.error(error)
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchPost(id)
        
        dispatch({ type: FETCH_POST, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.error(error)
    }
}

export const getPostBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)

        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        });

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)

    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createPost(post)
        console.log(data)
        dispatch({
            type: CREATE,
            payload: data
        })

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.error(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.error(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}