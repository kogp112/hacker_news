import * as React from "react";
import NewsList from "../news_list";
import NewsCard from "../news_card";


type NewsIds = {
  newsIds: string[]
};

const NewsTable: React.FC<NewsIds> = (props) => {
  const page: number = 100;
  
  const cardGroup = () => {
    let card = []
    for (var i = 0; i < 3; i ++) {
      card.push(
        <NewsCard newsId={props.newsIds[i]} index={i}/>
      )
    }
    return card
  }
  
  return (
    <div>
      <div className="cardgroup">
        {cardGroup()}
      </div>
      <div>
        <p className="subtitle">3 or less</p>
      </div>
      <div className="listarea">
        <ul className="ul">
          {props.newsIds && props.newsIds.map((value, index) => (
            (index > 2 && index < page) && <NewsList newsId={value} index={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NewsTable;