import React from 'react'
import Card from './Card'

function Contact() {
    return (
        <div className='contact'>
            <h2>Email Me</h2>
            <Card projectData={false} />
            <p>rauoldm@gmail.com</p>
        </div>
    )
}

export default Contact