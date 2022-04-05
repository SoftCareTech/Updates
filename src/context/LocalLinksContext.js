import createDataContext from './createDataContext'

const localLinksReducer = (state, action) => {
    switch (action.type) {
        case 'add_links':
            return { ...state, localLinks: [...state.links, action.payload] }
        case 'get_links':
            return { ...state, localLinks: action.payload }

        default: return state
    }
}


const addLinks = dispatch => (links) => {
    dispatch({
        type: 'add_link',
        payload: links
    })

}
const addLink = dispatch => (link) => {
    dispatch({
        type: 'add_link',
        payload: link
    })
}
const refresh = dispatch => (index, data) => {
    dispatch({
        type: 'refresh',
        payload: link
    })

}
const getLinks = dispatch => async (filter) => {
    if (filter) {
        const filtered = data.filter(function (value, index, arr) {

            return value.title.toLowerCase().includes(filter.toLowerCase());

        })
        dispatch({ type: 'get_links', payload: filtered })
    } else {
        dispatch({ type: 'get_links', payload: data })
    }



}
export const { Context, Provider } =
    createDataContext(
        localLinksReducer,

        { addLink, addLinks, getLinks, refresh },

        { filter: null, localLinks: [], }
    )















const data = [{
    url: "www.j1",
    title: "JAMB Registration",
    time: "7h"
    , status: "updated",
},
{
    url: "www.n2",
    title: "NECO Registration",
    time: "7h"
    , status: "updated",
},
{
    url: "www.n62",
    title: "NECO Registration",
    time: "7h"
    , status: "updated",
},
{
    url: "www.n2u",
    title: "NECO Registration",
    time: "7h"
    , status: "updated",
},
{
    url: "www.w3",
    title: "WACE Registration",
    time: "7h"
    , status: "updated",
}
    , {
    url: "www.e4",
    title: "EFFC JOB ttttttttttt ttttttttt tttttt tttttt ttvvvvvv dff",
    time: "7h"
    , status: "updated",
}

]




