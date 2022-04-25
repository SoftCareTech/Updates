import doa, { db } from '../db/databaseR'
import createDataContext from './createDataContext'

const localLinksReducer = (state, action) => {
    switch (action.type) {
        case 'add_links':
            return { ...state, localLinks: [...state.links, action.payload] }
        case 'get_links':
            return { ...state, localLinks: action.payload }

        case 'init_link':
            return { ...state, currentLink: action.payload, error: null }
        case 'set_current':
            return { ...state, currentLink: action.payload, error: null }
        case 'edit_url': {
            return { ...state, error: null, currentLink: { ...state.currentLink, ...action.payload } }
        }
        case 'submit_current':
            return {
                ...state, localLinks: state.localLinks.map(item =>
                    item._id === state.currentLink._id ?
                        state.currentLink : item),
                currentLink: null, error: null
            }
        case 'discard_current':
            return { ...state, currentLink: null }
        case 'eror': return { ...state, error: action.payload }

        default: return state
    }
}



const addLinks = dispatch => (links) => {
    dispatch({
        type: 'add_link',
        payload: links
    })
}
const refresh = dispatch => async () => {
    const data = await doa.getUrls()


}
const getLinks = dispatch => async (filter) => {
    const data = await doa.getUrls()
    console.log(data)
    if (filter) {
        const filtered = data.filter(function (value, index, arr) {

            return value.title.toLowerCase().includes(filter.toLowerCase());

        })
        dispatch({ type: 'get_links', payload: filtered })
    } else {
        dispatch({ type: 'get_links', payload: data })
    }



}

const setCurrentLink = dispatch => async (_id) => {
    const data = await doa.getUrl(_id)

    dispatch({
        type: 'set_current',
        payload: data[0]
    })
}
const removeLink = dispatch => async (_id) => {
    try {
        const res = await doa.removeUrl(_id)
        if (res > 0) {
            const data = await doa.getUrls()
            dispatch({ type: 'get_links', payload: data })
        }
        else
            setError("Error Ocured: link not found ")
    } catch (e) {
        setError("Error Ocured: Unable to delete link ")
    }

}
const editLink = dispatch => async (_id, data) => {
    try {
        const res = await doa.updateUrl(_id, data)
        dispatch({
            type: 'edit_link',
            payload: data
        })
    } catch (e) {
        setError("Error Ocured: Unable to edit main ")
    }

}


const initLink = dispatch => async () => {
    try {
        const data = await doa.addUrl({
            url: '', title: '', category: '', country: 'All',
            isObserved: false,
            isPinned: false,
            lastScanned: new Date().getMilliseconds(),
            status: "Initialed, not Observing",
            newData: null,
            oldData: null,
            params: [],
            conditions: []
        })

        dispatch({ type: 'init_link', payload: data })
    } catch (e) {
        setError("Error Ocured: Inialisation failled ")
        console.log(e)
    }
}



const resetCurrent = dispatch => () => {
    dispatch({
        type: 'error',
        payload: "Resset currebt"
    })

}

const setError = dispatch => (data) => {
    dispatch({
        type: 'error',
        payload: "Error Ocured: unable to edit "
    })

}

export const { Context, Provider } =
    createDataContext(
        localLinksReducer,

        {
            addLinks, getLinks, refresh, initLink,
            setCurrentLink, editLink, removeLink, resetCurrent,
        },

        { filter: null, localLinks: [], currentLink: null, error: null }
    )














