import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='container'>
      {/* <div className='page-header1'>
        <h1 className='page-title1'>Contact with us</h1>
      </div> */}

      <div className='column-details'>
     
        <div className='contact'>
         <h1>Contact Info</h1>
          

          <div className='items'>
            <div>

            <p><strong>PHONE</strong></p>
            <p>Mobile: +91 7379297067</p>
            </div>

          </div>

          <div className='items'>
            <i className="fa-solid fa-envelope"></i>
            <div>

            <p><strong>EMAIL</strong></p>
            <p>12shivangikumari@gmail.com</p>
            </div>
          </div>


        </div>

        <div className='message'>
        <h1 className='text-center'>Send us a message</h1>
          <div className='boxes'>
           
            <div>
              <input type="text" id="input1" name="input1" placeholder='Name' />
              <span><input type="text" id="input2" name="input2" placeholder='E-mail' /></span>
            </div>

            <div>
              <input type="text" id="input3" name="input3" placeholder='Phone' />
              <span><input type="text" id="input4" name="input4" placeholder='Subject' /></span>
            </div>

            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
               
            </div>

          </div>

        </div>
      </div>



    </div>
  )
}

export default Contact
