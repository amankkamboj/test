import React from 'react';
import Card from '../ui/Card';

const MeetupItem = (props) => {
  // Array destructuring
  const {id,title,image,address,description}=props.meetup;
  return (
    <>   
    <div className='col' key={id}>
      <Card>
      <div>
        <img className='card-img-top' src={image} alt={title} />
      </div>
      <div className='card-body'>
            <h3 className='card-title'>{title}</h3>
            <address>{address}</address>
            <p className='card-text'>{description}</p>
          <div>
            <button className='btn btn-primary'>To Favorites</button>
          </div>
        </div>
      </Card>
        
    </div>    
    </>    
  )
}

export default MeetupItem;