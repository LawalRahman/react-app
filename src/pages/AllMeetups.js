import { useState, useEffect } from 'react';
import MeetupList from "../conponents/meetups/MeetupList";

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    // setIsLoading(true)
    fetch('https://learn-react-3ed54-default-rtdb.firebaseio.com/meetups.json').then(response => {
    return response.json()
    }).then(data => {
      const meetups = []

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    });
  }, [])
  
  if(isLoading){
    return (
      <div> 
          <h1>Loading....</h1>
      </div>
    );
  }else{
    return (
      <div> 
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups}/>
      </div>
    );
  }
    
}

export default AllMeetupsPage;