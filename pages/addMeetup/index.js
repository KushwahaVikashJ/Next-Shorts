import { useRouter } from 'next/router'
import Form from '../../components/meetups/MeetupForm'

export default function AddMeetup() {

    const router = useRouter();

    const AddMeetupHandler = async(data)=>{
      const response = await fetch('/api/addMeetup',{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
              'Content-Type':'application/Json'
          }
      });

      const responseData = await response.json();
   
      router.push('/');
    }
    return <Form onAddMeetup={AddMeetupHandler}/>
}
