import createDataCntext from './createDataContext'
import trackerApi from '../api/updates'



const onlineLinksReducer = (state, action) => {
   switch (action.type) {
      case 'fetch_links':
         return { ...state, onlineLinks: action.payload }
      default:
         return state
   }

}

const fetchLinks = dispatch => async (filter, startIndex) => {
   // const response = await trackerApi.get('links')
   if (filter) {
      const filtered = data.filter(function (value, index, arr) {
         return value.title.toLowerCase().includes(filter.toLowerCase());

      })
      dispatch({ type: 'fetch_links', payload: filtered })
   } else {
      dispatch({ type: 'fetch_links', payload: data })
   }
}
const postLinks = dispatch => async (links) => {
   await trackerApi.post('links', { links })

}
const setLoadLimit = dispatch => async (limit) => {
   // const response = await trackerApi.get('links')
   dispatch({ type: 'load_limit', payload: limit })
}

export const { Provider, Context } =
   createDataCntext(onlineLinksReducer,
      { postLinks, fetchLinks },
      { onlineLinks: [], filter: "", startIndex: 0, limit: 50 })





















/*columns= [

  { name: "url", type: "string" },
  { name: "title", type: "string" },
  { name: "category", type: "string" },
  { name: "country", type: "string" },
  { name: "is_observed", type: "boolean" }
  , { name: "is_pinned", type: "boolean" }
  , { name: "last_scanned_at", type: "number" }
  , { name: "status", type: "string" }
  , { name: "old_data", type: "string" }
  , { name: "old_data", type: "string" }
]

columns: [
                { name: "url_id", type: "string" },
                { name: "text", type: "string" },
                { name: "exist", type: "boolean" }

            ]
            
            
            columns: [
                { name: "url_id", type: "string" },
                { name: "key", type: "string" },
                { name: "value", type: "string" }
                , { name: "type", type: "string" }

            ]

*/


const data = [{
   url: "www.j1",
   title: "JAMB Registration",
   category: 'job',
   country: 'Nigeria'
},
{
   url: "www.n2",
   title: "NECO Registration",
   time: "7h"
   , status: "updated",
   category: 'job',
   country: 'Nigeria'
},
{
   url: "www.n62",
   title: "NECO Registration",
   time: "7h"
   , status: "updated", category: 'job',
   country: 'Nigeria'
},
{
   url: "www.n2u",
   title: "NECO Registration",
   time: "7h"
   , status: "updated",
   category: 'job',
   country: 'Nigeria'
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