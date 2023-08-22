import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SMInput from '../../components/SMInput';
import { useState } from 'react';
import { useFormik } from 'formik';
import { signupValidation } from './validation';
import Image from "../../assets/signup.png"
import { Link } from 'react-router-dom';

function Login() {

    const initialValues = {
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupValidation,
            onSubmit: values => {
                console.log(values)
            },
        });

    return (
        <>
            <div className="signup">
                <div className="signupBox">
                    <div className="loginDetails">
                        <h1>Login</h1>
                        <form>
                            <div>
                                <SMInput autoComplete="off" type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} icon={<EmailIcon />} placeholder="Enter email" />
                                {errors.email && touched.email ? (
                                    <span className='red'>{errors.email}</span>
                                ) : null}
                            </div>
                            <div>
                                <SMInput autoComplete="off" type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} icon={<LockIcon />} placeholder="Enter password" />
                                {errors.password && touched.password ? (
                                    <span className='red'>{errors.password}</span>
                                ) : null}
                            </div>
                            
                            <div>
                                <button className='register' onClick={handleSubmit} >Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="signupImage">
                        <img src={Image} width={300} height={300} />
                        <span>Create an account <Link to="/signup">Signup</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;