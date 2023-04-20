import React, {useState} from 'react';
import image from "../assets/img/logo_w.png";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const [errorText, setErrorText] = useState('');

    // function to update the error text
    function updateErrorText() {
        setErrorText('Incorrect username or password');
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);


            if (response.ok) {
                // navigate("/login")
                console.log('you\'re in')
                const token = data.access;
                const refresh = data.refresh
                console.log(token)

                localStorage.setItem('token', token)
                localStorage.setItem('refresh', refresh)

                async function fetchProfile() {
                    const response = await fetch(`http://localhost:8000/api/profile/`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    const responseData = await response.json()

                    console.log("FETCH USER ID")
                    console.log(responseData)
                    localStorage.setItem('userID', responseData.id)
                }

                fetchProfile().then(r => {
                    navigate("/")
                })
            } else {
                console.log('you fucked up submitting the form')
                setErrorText('Incorrect username or password');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1 flex items-center justify-center">
        <div className="BACKGROUND_COLOR_1 w-full rounded flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center mb-4">
                <img className="max-h-60 flex flex-col justify-center items-center" src={image} alt={"Whatever"}/>
            </div>
            <div className="flex flex-col w-full max-w-xs">
                <form className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="relative mb-4">
                        <input type="text" id="username"
                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                               placeholder=" "
                               name="username"
                               value={formData.username}
                               onChange={handleChange}/>
                        <label htmlFor="username"
                               className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username</label>
                    </div>
                    <div className="relative mb-6">
                        <input type="password" id="password"
                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                               placeholder=" "
                               name="password"
                               value={formData.password}
                               onChange={handleChange}/>
                        <label htmlFor="password"
                               className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                    </div>
                    <p className="text-red-500 text-center mb-4" id="error_text">{errorText}</p>
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/">
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 rounded-full"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </button>
                        </Link>
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-FONT_COLOR_1 hover:text-FONT_COLOR_2 mt-6"
                            to="/signup">
                            Don't have an account yet? Sign Up
                        </Link>
                        <Link
                            className="inline-block align-baseline font-bold text-xs text-FONT_COLOR_1 hover:text-FONT_COLOR_2"
                            to={"#"}>
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        </body>
    );
};

export default Login;