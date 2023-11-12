//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //const history = useHistory();
  const navigate = useNavigate();

  function addMeetupHandler(meetupData){
    fetch(
      'https://react-getting-started-44b04-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then(()=> {
      //history.replace('/');
      navigate('/');
    });
  }
    return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    );
  }
  
  export default NewMeetupPage;