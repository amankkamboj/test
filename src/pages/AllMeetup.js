import React,{useState,useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';


const AllMeetupPages = () => {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups]= useState([]);

useEffect(()=>{
  setIsLoading(true);
  fetch('https://react-test-meetup-d8220-default-rtdb.firebaseio.com/meetups.json')
  .then(response=>{
  return response.json();
  })
  .then(data =>{
    const meetups=[];
    for(const key in data){
      const meetup={
        id:key,
        ...data[key]
      };
      meetups.push(meetup);
    }

    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
},[])
  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }


  return (    
    <section className='container'>
    <h2>All Meetups</h2>
    <MeetupList meetups={loadedMeetups} />

    </section>    
        
  );
}

export default AllMeetupPages;