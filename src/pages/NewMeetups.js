import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../conponents/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch('https://learn-react-3ed54-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/');
        })
    }

    return <div> 
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>;
}

export default NewMeetupsPage;