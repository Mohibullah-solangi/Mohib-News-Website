import React from 'react'
import loading from './Loading.gif'
 const Spinner = ()=> {

    return (
      <div>
        <img className="my-3" src={loading} alt="Loading" style={{width: "50px", height: "auto"}}/>
      </div>
    )
  }

  export default Spinner