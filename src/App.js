
import React, { useState, useEffect} from "react";
import './App.css'

const App = () => {

const [news,setnews] = useState ([]);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0')
    .then(res => res.json())
    .then(
      (result) => {
        
        setnews(result);
      },
      (error) => {
        setError(error);
      }
    )
}, [])
if (error) {
  return <div>Error: {error.message}</div>;
}  else {
  return (
   
    <ul>
        {news.map(item => (
          <li key={item.created_at}>
            {item.url} {item.title} {item.comment_text}
          </li>
        ))}
      </ul>
);
}
}

export default App;
