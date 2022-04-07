import { useState } from 'react';
import axios from 'axios';
import { data1, data2 } from './testData';
import matcher from './matcher';
export default () => {
  const [responce, setResponce] = useState({ status: 'Initiated' });

  const setLinkX = async ({ link, search, config }) => {
    setResponce({ status: 'Laoding' }); 
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {  
        setResponce({ status: 'Laoded rrrrrr' , data:request.responseText});
        console.log('success', request.responseText);

      } else {
          setResponce({ status: 'EEEEEEEEEEEEEEEEEEEEEE' });
        console.warn('error');
      }
    };

    request.open('GET', link);
    request.send();
  };

  const setLink = async ({ link, search, config }) => {
    setResponce({ status: 'Laoding' });

    try {
      const newConfig = config
        ? {
            headers: {
              'User-Agent': '0.21.1',
              Accept: '*/*',
              'Content-Type': 'application/json;charset=utf-8',
            },
            config,
          }
        : {
            headers: {
              'User-Agent': '0.21.1',
              Accept: '*/*',
              'Content-Type': 'application/json;charset=utf-8',
            },
          };

      const res = await axios.get(link, config);
      // console.log('received response:Offline process ');
       if (res) console.log(res.data);
      //else console.log('res null');
      setResponce({ status: 'Laoded' ,  data:res.data});
      const result = matcher(
        search.oldData,
        res.data,
        search.global,
        search.conditions
      );
     setResponce({ status: 'Laoded',res: result ,  data:res.data});
    } catch (err) {
      console.log('received error: ', err.toJSON());
      setResponce({ status: 'error Net' });
    }
  };

















const setLink4 = async ({ link, search, config }) => {
    setResponce({ status: 'Laoding' });

try{
      const response = await fetch(link, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, 
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

   // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  response.json(); // parses JSON response into native JavaScript objects
  
   setResponce({ status: 'Laoded', data:responce.data});
    } catch (err) {
      console.log('received error: ', err.toJSON());
      setResponce({ status: 'error Net' });
    }
  };






  return [responce, setLink];
};
