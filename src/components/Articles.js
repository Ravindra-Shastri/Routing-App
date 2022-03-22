import React from 'react';
import { NavLink } from 'react-router-dom';
import Article from './Article';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const articles = this.props.data || [];
    return (
      <>

        <ul>
          {
            articles.map((article) => {
              return (
                <li key={article.slug}>
                  <NavLink to={`/article/${article.slug}`}>
                    <h3 className="article-title">{article.title}</h3>
                  </NavLink>
                  <p className="author-name">{article.author}</p>
                </li>
              );
            })
          }
        </ul>

      </>
    )
  }
}