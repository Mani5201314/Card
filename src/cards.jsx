    import React from 'react';
    import './cards.css';
    import Data from './json';
    const Card = () => {
      return (
      <div className="head">
          {Data.map(Data => (
            <div className="card" >
              
              <a href={Data.rel} target='blank'><img src={Data.imgUrl} style={{width:"100%"}} /></a>
              
            
            </div>
          ))}
      



        </div>
      );
    };

    export default Card;