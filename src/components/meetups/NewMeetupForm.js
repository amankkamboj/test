import {React,useRef,} from 'react';
import {useNavigate} from 'react-router-dom';

const NewMeetupForm = () => {
    const history = useNavigate();
    const addMeetUphandler=(meetupData)=>{
        
        // To send data to server using javascript
        fetch('https://react-test-meetup-d8220-default-rtdb.firebaseio.com/meetups.json',{
            method:"POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(()=>{
            history('/');
        });
    }

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    const submitHandler =(event)=>{
       
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData={
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };
        console.log(meetupData);
        addMeetUphandler(meetupData);
    }
  return (
    <>
    <form className='form' onSubmit={submitHandler}>
        <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
            Meetup Title
            </label>
            <input type="text" className="form-control" id='title' required ref={titleInputRef} />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='image'>
            Meetup Image
            </label>
            <input type="url" className="form-control" id='image' ref={imageInputRef} />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='address'>  Address  </label>
            <input type="text" className="form-control" id='address' ref={addressInputRef} required/>
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='description'>  Description  </label>
            <textarea id='description' rows="5" className="form-control" required ref={descriptionInputRef}></textarea>
        </div>
        <div className='mb-3'>            
          <button className='btn btn-danger'>Add Meetup</button>
        </div>
    </form>
    </>
  )
}

export default NewMeetupForm;