// import React, { useReducer, useState } from 'react';
// import './LoginStyle.css';
// import { useNavigate, Link } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// // import {jwt_decode} from 'jwt-decode';
// import axios from "axios";
// import { useGoogleLogin } from '@react-oauth/google';
// // import home from "../../user/Home/Home.js"
// import { toast } from 'react-toastify';
// const formReducer = (state, event) => {
//     return {
//         ...state,
//         [event.target.name]: event.target.value
//     }
// }

// var emailOfUser;


// const Login = () => {

    


//     const navigate = useNavigate();

//     const login = (event) => {

//         const signin_email = document.getElementById("exampleFormControlInput2");
//         const signin_pass = document.getElementById("exampleFormControlInput22");


//         if (signin_email.value === "" || signin_pass.value === "") {
//             event.preventDefault();

//             // alert("Fillup All details");
//             // toast.alert("Fillup All details");

//         }
//         else if (signin_email.value === "admin@gmail.com" && signin_pass.value === "admin") {
//             navigate('/admin_dashboard');
            
//         }
//         else {
//             emailOfUser=signin_email.value;
//             navigate('/home');
//             // navigate('/admin_dashboard');
//         }

//     };


//     const [formData, setFormData] = useReducer(formReducer, {});
//     const [response, setresponse] = useState('');
//     // const {Login} = useAuth();

//     const handleSubmit = event => {
//         event.preventDefault();
//         // const hello = "hi i am here" 
//         // console.log(formData);
//         axios.post("http://localhost:8080/login", formData)
//             .then((response) => {
//                 //messeage = response.data.mes;
//                 console.log(response)
//                 localStorage.setItem('id', response.data.key)
//                 localStorage.setItem('user', JSON.stringify(response.data.user))
//                 setresponse(response.data.mes);

//                 if (response.data.key != null) {
//                     login(response.data);
//                     const signin_email = document.getElementById("exampleFormControlInput2");
//                     const signin_pass = document.getElementById("exampleFormControlInput22");


//                     if (signin_email.value === "" || signin_pass.value === "") {
//                         event.preventDefault();

//                         // alert("Fillup All details");
                       

//                     }
//                     else if (signin_email.value === "admin@gmail.com" && signin_pass.value === "admin") {
//                         toast.success("Admin Sucessfully Login")
//                         navigate('/admin_dashboard');

//                     }
//                     else {
//                         navigate('/home');
//                     }
//                 }

//             })


//     }

//     return (
//         <section className="h-screen">
//             <div className="h-full">
//                 <div
//                     className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//                     <div
//                         className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
//                         <img
//                             src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                             className="w-full"
//                             alt="Sample image" />
//                     </div>

//                     <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
//                         <form onSubmit={handleSubmit}>
//                             <div
//                                 className="flex flex-row items-center justify-center lg:justify-start">
//                                 <p className="mb-0 mr-4 text-lg">Sign in with</p>


//                                 <GoogleOAuthProvider clientId="288931065809-3cg540n2q6ketuphi1eradtr5fqf0ld4.apps.googleusercontent.com">
//                                     <GoogleLogin
//                                         onSuccess={credentialResponse => {
//                                             const details = jwt_decode(credentialResponse.credential);
//                                             console.log(details);
//                                             console.log(credentialResponse);
//                                         }}
//                                         onError={() => {
//                                             console.log('Login Failed');
//                                         }}

//                                     />
//                                 </GoogleOAuthProvider>
//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-sky-950 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                                     </svg>
//                                 </button>

//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-sky-950 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                                     </svg>
//                                 </button>

//                                 <button
//                                     type="button"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-sky-950 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="mx-auto h-3.5 w-3.5"
//                                         fill="currentColor"
//                                         viewBox="0 0 24 24">
//                                         <path
//                                             d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             <div
//                                 className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-950 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-950">
//                                 <p
//                                     className="mx-4 mb-0 text-center font-semibold dark:text-black">
//                                     Or
//                                 </p>
//                             </div>

//                             <div className="relative mb-6" data-te-input-wrapper-init>
//                                 Email address
//                                 <input
//                                     type="text"
//                                     className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
//                                     id="exampleFormControlInput2"
//                                     name='email'
//                                     placeholder="Email address"
//                                     onChange={setFormData}
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="exampleFormControlInput2"
//                                     className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
//                                 >
//                                 </label>
//                             </div>

//                             <div className="relative mb-6" data-te-input-wrapper-init>
//                                 Password
//                                 <input
//                                     type="password"
//                                     className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                                     id="exampleFormControlInput22"
//                                     placeholder="Password"
//                                     name='pwd'
//                                     onChange={setFormData}
//                                     required
//                                 />
//                                 <label
//                                     htmlFor="exampleFormControlInput22"
//                                     className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
//                                 >
//                                 </label>
//                             </div>

//                             {/* <div className="mb-6 flex items-center justify-between">

//                                 <a href="#">Forgot password?</a>
//                             </div> */}

//                             <div className="text-center lg:text-left">
//                                 <button
//                                     type="button"
//                                     className="inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                                     data-te-ripple-init
//                                     data-te-ripple-color="light"
//                                     onClick={handleSubmit}>
//                                     Login
//                                 </button>

//                                 <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
//                                     Don't have an account?
//                                     <Link
//                                         to="/signup"
//                                         className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
//                                     >Register</Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


// export {emailOfUser}
// export default Login;

import React, { useReducer, useState } from 'react';
import './LoginStyle.css';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import {jwt_decode} from 'jwt-decode';
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google';
// import home from "../../user/Home/Home.js"
import { toast } from 'react-toastify';
import Head from '../../user/Components/Common/Heading/Head';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

var emailOfUser;


const Login = () => {




    const navigate = useNavigate();

    const login = (event) => {

        const signin_email = document.getElementById("exampleFormControlInput2");
        const signin_pass = document.getElementById("exampleFormControlInput22");


        if (signin_email.value === "" || signin_pass.value === "") {
            alert("Fillup All details");
            event.preventDefault();

            // alert("Fillup All details");
            // toast.alert("Fillup All details");

        }
        else if (signin_email.value === "admin@gmail.com" && signin_pass.value === "admin") {
            navigate('/admin_dashboard');

        }
        else {
           
            emailOfUser = signin_email.value;
            navigate('/home');
            // navigate('/admin_dashboard');
        }

    };


    const [formData, setFormData] = useReducer(formReducer, {});
    const [response, setresponse] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", formData)
            .then((response) => {
                
                console.log(response)
                localStorage.setItem('id', response.data.key)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                setresponse(response.data.mes);

                
                if(response.data.key===null)
                {
                    alert("enter correct details")
                }
                else{

                if (response.data.key != null) {
                    login(response.data);
                    const signin_email = document.getElementById("exampleFormControlInput2");
                    const signin_pass = document.getElementById("exampleFormControlInput22");

                    console.log("emaillllllllllll", signin_email)
                    console.log("passssssssssssssss", signin_pass)

                    if (signin_email.value === "" || signin_pass.value === "") {
                        
                        alert("Fillup All details");
                        event.preventDefault();


                    }
                    else if (signin_email.value === "admin@gmail.com" && signin_pass.value === "admin") {
                        toast.success("Admin Sucessfully Login")
                        navigate('/admin_dashboard');

                    }
                    else {
                       
                    
                        // if(response.data.mes=== 'Password is incorrect.')
                        // {
                        //     alert("enter correct details")

                        // }
                        // else{
                           
                            
                        // navigate('/home');
                        // }
                    }
                }

                }

            })


    }

    return (
    <>
        <section className="h-screen bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900">
        <Head />
            <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen flex font-medium items-center justify-center">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div
                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image" />
                    </div>

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 text-white">
                        <form onSubmit={handleSubmit}>
                            <div
                                className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-lg">Sign in with : </p>


                                <GoogleOAuthProvider clientId="288931065809-3cg540n2q6ketuphi1eradtr5fqf0ld4.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            const details = jwt_decode(credentialResponse.credential);
                                            console.log(details);
                                            console.log(credentialResponse);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}

                                    />
                                </GoogleOAuthProvider>
                          

                            </div>

                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-950 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-950">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-black">
                                    Or
                                </p>
                            </div>

                            <div className=" login-email relative mb-6" data-te-input-wrapper-init>
                                Email address
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
                                    id="exampleFormControlInput2"
                                    name='email'
                                    placeholder="Email address"
                                    onChange={setFormData}
                                    required
                                />
                                <label
                                    htmlFor="exampleFormControlInput2"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>

                            <div className="login-pass relative mb-6" data-te-input-wrapper-init>
                                Password
                                <input
                                    type="password"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput22"
                                    placeholder="Password"
                                    name='pwd'
                                    onChange={setFormData}
                                    required
                                />
                                <label
                                    htmlFor="exampleFormControlInput22"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>

                            {/* <div className="mb-6 flex items-center justify-between">

                                <a href="#">Forgot password?</a>
                            </div> */}

                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    className="inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={handleSubmit}>
                                    Login
                                </button>

                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};


export { emailOfUser }
export default Login;

