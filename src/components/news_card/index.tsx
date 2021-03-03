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

const NewsCard: React.FC<Props> = (props) => {
  const [ url , setUrl ] = useState<Url>();
  const [ title , setTitle ] = useState<Title>();
  
  const itemId = props.newsId;
  const fetchApiData = async () => {
    try {
      const data = await axios
      .get("https://hacker-news.firebaseio.com/v0/item/" +　itemId + ".json?print=pretty")
      .then(res => {
        setUrl(res.data.url);
        setTitle(res.data.title);
      });
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchApiData();
  }, []);
  
  return (
    <>
      <div className={'card_' + props.index}>
        <div onClick={()=>window.open(String(url), "_blank")}>
          <p className="container">{title}</p>
        </div>
      </div>
    </>
  )
}

export default NewsCard;