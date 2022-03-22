import React from 'react';

export default class People extends React.Component {
  render() {
    const { houses } = this.props.houses || [];
    return (
      <>
        <ul className="people-container no-style">
          {houses.map((people) => {
            return people.people.map((person) => {
              return (
                <li>
                  <div className="person-container">
                    <div>
                      <img className="person-img" src={person.image} alt={person} />
                      <span className="person-name">{person.name}</span>
                    </div>
                    <p>{person.description}</p>
                    <a href={person.wikiLink}>Learn More!</a>
                  </div>
                </li>
              )
            })
          })}
        </ul>
      </>

    )
  }
}
