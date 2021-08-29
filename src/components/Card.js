import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Card(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };
    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );

            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };


    if (!props.projectData) {
        return (
            <div className='contactFormDiv'>
                <div>
                    <div> 
                        <div>
                            <div className='contactForm'>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    {/* Row 1 of form */}
                                    <div>
                                        <div>
                                            <input
                                                type='text'
                                                name='name'
                                                {...register('name', {
                                                    required: { value: true, message: 'Please enter your name' },
                                                    maxLength: {
                                                        value: 30,
                                                        message: 'Please use 30 characters or less'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Name'
                                            ></input>
                                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                name='email'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                })}
                                                className='form-control formInput'
                                                placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                                <span className='errorMessage'>Please enter a valid email address</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 2 of form */}
                                    <div>
                                        <div>
                                            <input
                                                type='text'
                                                name='subject'
                                                {...register('subject', {
                                                    required: { value: true, message: 'Please enter a subject' },
                                                    maxLength: {
                                                        value: 75,
                                                        message: 'Subject cannot exceed 75 characters'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                                <span className='errorMessage'>{errors.subject.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 3 of form */}
                                    <div>
                                        <div>
                                            <textarea
                                                rows={3}
                                                name='message'
                                                {...register('message', {
                                                    required: true
                                                })}
                                                className='form-control formInput'
                                                placeholder='Message'
                                            ></textarea>
                                            {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                        </div>
                                    </div>
                                    <button className='submit-btn' type='submit'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        if(!props.projectData.deployedLink) {
            props.projectData.deployedLink = 'No Deployed Link'
        }
        return (
            <div className="projectCard">
                <img src={props.projectData.imgSrc} alt={props.projectData.name} />
                <h3 className={props.projectData.name}>{props.projectData.name}</h3>
                <span className='projectDetails'>{props.projectData.description}</span>
                <p>Technologies Used: </p><span className='projectDetails'>{props.projectData.techUsed}</span>
                <p>My Role: </p><span className='projectDetails'>{props.projectData.role}</span>
                <a href={props.projectData.deployedLink}>Deployed Project: {props.projectData.deployedLink}</a>
                <a href={props.projectData.githubLink}>Github Link: {props.projectData.githubLink}</a>
            </div>
        )
    }
}

export default Card