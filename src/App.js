
import React, { useState, useEffect} from "react";
import './App.css'
import axios from 'axios';

const App = () => {

const [news,setnews] = useState ();

useEffect(async() => {
  const result = await axios('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0',
  );

  setnews(result.news);
},[])

  return (
   
      <ul>
      {news.map(item => (
        <li key={item.created_at}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
