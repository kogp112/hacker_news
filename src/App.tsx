import * as React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import ReactLoading from "react-loading";
import NewsTable from "./components/news_table";
import "./style.css";


const App = () => {
  const [ newsIds, setNewsIdes ] = useState<[""]>([""]);
  const [ loading, setLoading ] = useState(false);
  
  const fetchApiData = async () => {
    try {
      const data = await axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        setNewsIdes(res.data);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    fetchApiData();
  }, []);
  
  return (
    <>
      <h1 className="title">Hacker News List</h1>
      <div>
        <p className="subtitle">Top 3</p>
      </div>
      <div className="main">
        <div>
          {loading ? <NewsTable newsIds={newsIds}/> : <ReactLoading className="loading" type={"spin"} color="#ffafbd" /> }
        </div>
      </div>
    </>
  )
}

export default App;