import * as React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  newsId: string,
  index: number
};

type Url = {
  url: string,
};

type Title = {
  title: string
};

const NewsList: React.FC<Props> = (props) => {
  const [ url , setUrl ] = useState<Url>();
  const [ title , setTitle ] = useState<Title>();
  
  const fetchApiData = async () => {
    try {
      const data = await axios
      .get("https://hacker-news.firebaseio.com/v0/item/" + props.newsId + ".json?print=pretty")
      .then(res => {
        setUrl(res.data.url);
        setTitle(res.data.title);
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    fetchApiData();
  }, []);
  
  return (
    <>
      <div className="row" onClick={()=>window.open(String(url), "_blank")}>
        <p className="index">{' '}</p>
        <p className="newstitle">{props.index}{'  '}{title}</p>
      </div>
    </>
  )
}

export default NewsList;