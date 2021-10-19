import React from "react";
const baseURL = 'https://fitnesstrac-kr.herokuapp.com/'

export const callApi = async ({url, method, token, body}) => {
    try {
        const options = {
          method: method ? method.toUpperCase() : 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        };
        if(token) options.headers['Authorization'] = `Bearer ${token}`;
    
        console.log('options: ', options);
        
    
        const response = await fetch(`${baseURL}${url}`, options);
        const data = await response.json();
        console.log('ApiData:', data)
        if(data.error) {
          throw (data.error)
        }
        return data;
      } catch (error) {
        console.error(error);
      }
    }