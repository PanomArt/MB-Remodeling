import React from 'react'

export default function Contact() {
  return (
    <section className='contact-maindiv'>
            {/*LeftSide Content*/}
            <div className='leftside'>
                  <h2 className='content-title'>Let's Discuss Your Next Project</h2>
                  
                  <p className='title-description'>
                    Fill out the form, or call us to <br/>
                    set up a free in-home consultation.
                  </p>
                  
                  <span>Service Areas:</span>
                  <p className='address-info'>
                        San Francisco, Santa Clara, Alameda, San Mateo <br/>
                        500 Terry Francine Street San Francisco, CA 94158<br/>
                        <span>
                          info@mysite.com<br/>
                          123-456-7890
                        </span>
                  </p>
            </div>
            {/*Rightside*/}
            <div className='rightside'>
                  <form className='contact-form'>
                        {/*Name and Last Name */}
                        <div className='grid-2'>
                              <div className='input-form'>
                                  <p className='input-title'>First Name *</p>
                                  <input type='text'></input>
                              </div>

                              <div className='input-form'>
                                  <p className='input-title'>Last Name *</p>
                                  <input type='text'></input>
                              </div>
                        </div>
                        {/*Email and Phone*/}
                        <div className='grid-2'>
                              <div className='input-form'>
                                  <p className='input-title'>Email</p>
                                  <input type='email'></input>
                              </div>

                              <div className='input-form'>
                                  <p className='input-title'>Phone</p>
                                  <input type='text'></input>
                              </div>
                        </div>

                      
                        <div className='input-form'>
                            <p className='input-title'>Address</p>
                            <input type='text'></input>
                        </div>
                        <div className='input-form'>
                            <p className='input-title'>Subject</p>
                            <input type='text'></input>
                        </div>

                        <div className='input-form'>
                             <p className='input-title'>Type your message here...</p>
                             <textarea className='textfield'/>
                        </div>

                        <button className='submit-btn' type='submit'>Submit</button>
                  </form>

            </div>  
    </section>
  )
}
