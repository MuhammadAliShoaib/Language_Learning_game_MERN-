import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SMInput from '../../components/SMInput';
import { useFormik } from 'formik';
import { signupValidation } from './validation';
import Image from "../../assets/signup.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../config/contextAPI/userContext';

function Signup() {
    
    const context = useContext(UserContext);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupValidation,
            onSubmit: values => {
                console.log(values)
                context.userLogin(values)
            },
        });

    return (
        <>
            <div className="signup">
                <div className="signupBox">
                    <div className="signupDetails">
                        <h1>Signup</h1>
                        <form  >
                            <div>
                                <SMInput autoComplete="off" type="text" name="firstName" value={values.firstName} onBlur={handleBlur} onChange={handleChange} icon={<PersonIcon />} placeholder="Enter First Name" />
                                {errors.firstName && touched.firstName ? (
                                    <span className='red'>{errors.firstName}</span>
                                ) : null}
                            </div>
                            <div>
                                <SMInput autoComplete="off" type="text" name="lastName" value={values.lastName} onBlur={handleBlur} onChange={handleChange} icon={<PersonIcon />} placeholder="Enter Last Name" />
                                {errors.lastName && touched.lastName ? (
                                    <span className='red'>{errors.lastName}</span>
                                ) : null}
                            </div>
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
                                <button type='submit' className='register' onClick={handleSubmit} >Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="signupImage">
                        <img src={Image} width={300} height={300} />
                        <span>Already registered?<Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;