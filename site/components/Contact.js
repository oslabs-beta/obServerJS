import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap'
const Contact= () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log('Name: ', data.name);
    console.log('Email: ', data.email);
    console.log('Subject: ', data.subject);
    console.log('Message: ', data.message);
  };

  return (
    <>
    <h3 className= 'desc-h2' style={{textAlign:'center', marginTop:'10vh'}}>If you'd like to become a contributor or have other inquires, reach out below.</h3>
    <div className='contact-form'>
      <div className='container' >
        <div className='row'>
          <div className='col-12 text-center' >
            <div className='contactForm' >
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                   
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email'
                    ></input>
               
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                  
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div style={{marginBottom:'5vh'}} className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    
                  </div>
                </div>
                <Button variant='dark' id='button-mobile' className='submit-btn' type='submit'>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
