import React from 'react';
import MeetupItem from './MeetupItem';

const MeetupList = (props) => {
  return (
    <>
  <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5'>
  {props.meetups.map( (meetup) =>{
    return (
      <MeetupItem key={meetup.id} meetup={meetup} />
    )
    
})}
</div>
</> 
  )
}

export default MeetupList;