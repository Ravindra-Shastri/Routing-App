import React from 'react';

export default class Error extends React.Component {
  render() {
    return (
      <>
        <div>
          <h3 className="error-message">
            Error 404: Page not found!
          </h3>
        </div>
      </>
    )
  }
}