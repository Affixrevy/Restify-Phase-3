import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import account from "../assets/img/account.png"

const Signup = () => {

     const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
        phone_num: '',
        username: '',
        first_name: '',
        last_name: ''
    });

     const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigate("/login")
            } else {
                console.log('you fucked up submitting the form')
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <header className="bg-BACKGROUND_COLOR_2">
                <nav className="relative container mx-auto p-6">
                    <div className="flex item-center justify-between">
                        <Link to={"/"} className="md:p-3 px-6 pt-2 Restify_logo">Restify</Link>
                    </div>
                </nav>
            </header>

            <main className="flex bg-BACKGROUND_COLOR_1 flex-col items-center">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <form className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Sign Up
                        </div>
                        <div className="flex flex-col space-y-4 divide-y-2">
                            <div className="w-20 h-20 bg-BACKGROUND_COLOR_1 relative">
                                <img
                                    src={account} className="object-fill" alt="Account Icon"/>
                            </div>
                            <div className="pt-4">
                                <div className="relative mb-4">
                                    <input type="email" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="email"
                                           value={formData.email}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="password" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="password"
                                           value={formData.password}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="password" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="password2"
                                           value={formData.password2}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm
                                        Password</label>
                                </div>
                            </div>
                            <div className="pt-8 relative">
                                <div className="relative mb-4">
                                    <input type="tel" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="phone_num"
                                           value={formData.phone_num}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone
                                        Number</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="text" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="username"
                                           value={formData.username}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username
                                    </label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="text" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="first_name"
                                           value={formData.first_name}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First
                                        Name</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="text" id="default_filled"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           name="last_name"
                                           value={formData.last_name}
                                           onChange={handleChange}/>
                                    <label htmlFor="default_filled"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last
                                        Name</label>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <Link to={'/login'}>
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold rounded-full"
                                            onClick={handleSubmit}>
                                            <div
                                               className="block overflow-auto py-2 px-4">Confirm</div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </body>
    );
}

export default Signup;