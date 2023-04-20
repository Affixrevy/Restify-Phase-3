import NavBar from "../components/NavBar";
import SubmitFile from "../components/SubmitFile";
import SetHoliday from "../components/SetHoliday";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Listing = () => {
    const navigate = useNavigate();
    const [thumbnail, setThumbnail] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleCancel = () => {
        // Navigate back to the previous page
        navigate(-1);
    };

    const handleConfirm = async () => {
        // Gather form data
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
        const num_guests = document.getElementById("num_guests").value;
        const num_beds = document.getElementById("num_beds").value;
        const num_baths = document.getElementById("num_baths").value;
        const price = document.getElementById("base_price").value;
        const amenities = document.getElementById("amenities").value;
        const description = document.getElementById("description").value;
        const country = document.getElementById("country").value;

        if (!(address !== "" && city !== "" && province !== "" && num_guests !== "" &&
            num_beds !== "" && num_baths !== "" && price !== "" && amenities !== "" &&
            description !== "" && startDate !== "" && endDate !== "" && name !== "")) {
            alert("Please fill out all fields.");

        } else {

            // Create a JavaScript object with the form data
            const formData = new FormData();

            formData.append("name", name)
            formData.append("address", address)
            formData.append("city", city)
            formData.append("province", province)
            formData.append("num_guests", num_guests)
            formData.append("num_beds", num_beds)
            formData.append("num_baths", num_baths)
            formData.append("price", price)
            formData.append("amenities", amenities)
            formData.append("description", description)
            formData.append("country", country)
            formData.append("start_date", startDate)
            formData.append("end_date", endDate)

            if (thumbnail) {
                formData.append("main_pic", thumbnail); // Append the file
            }
            try {
                const token = localStorage.getItem('token');
                // Make a POST request to your API with the form data as a JSON string
                const response = await fetch("http://localhost:8000/properties/create/", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                    body: formData
                });

                if (!response.ok) {
                    console.log(response.json())
                    throw new Error(`API request failed with status ${response.status}`);
                }

                // Log the response for debugging purposes
                const result = await response.json();
                console.log(result);

                // TODO: Handle the API response as needed
                console.log("Confirm modification");

                navigate(`/listing-addition/${result.id}`)
            } catch (error) {
                console.error("Error during API request:", error);
            }
        }
    };

    return (
        <div className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <main className="flex bg-BACKGROUND_COLOR_1 flex-col items-center">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <div className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Create Listing
                        </div>

                        <div className="flex flex-col space-y-4 divide-y-2">

                            <div className="relative mb-4">
                                <input type="text" id="name"
                                       className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                       placeholder=" "/>
                                <label htmlFor="name"
                                       className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Property Name
                                </label>
                            </div>

                            <div className="pt-4">
                                <div className="text-2xl font-bold pb-2">
                                    Address
                                </div>
                                <div className="relative mb-4">
                                    <input type="text" id="address"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "/>
                                    <label htmlFor="address"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Street
                                        Address</label>
                                </div>
                                <div className="relative mb-4">
                                    <div className="relative mb-4">
                                        <input type="text" id="city"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="city"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">City</label>
                                    </div>
                                    <div className="relative mb-4">
                                        <input type="text" id="province"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="province"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Province
                                            / State</label>
                                    </div>
                                    <div className="relative mb-4">
                                        <input type="text" id="country"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="country"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Country</label>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mb-4">
                                <div className="text-2xl font-bold py-2">
                                    Images
                                </div>
                                <div className="flex justify-center items-center h-20">
                                    <div className="items-center">
                                        {/*<SetHoliday text="Add Holiday Price"></SetHoliday>*/}
                                        <SubmitFile multiple={0} text="Add Thumbnail" title="Submit a thumbnail"
                                                    onFileSubmit={setThumbnail}/>
                                        {/*<SubmitFile multiple={1} text="Add More Pictures" title="Submit multiple images for the listing"/>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="relative mb-4">
                                <div className="text-2xl font-bold py-2">
                                    Availability
                                </div>
                                <div className="relative mb-4">
                                    <input type="date" id="start_data"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           value={startDate}
                                           onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <label htmlFor="Start_data"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Start Date</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="date" id="end_date"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           value={endDate}
                                           onChange={(e) => setEndDate(e.target.value)}
                                    />
                                    <label htmlFor="end_date"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">End Date</label>
                                </div>
                            </div>

                            <div className="pt-8 relative">
                                <div className="text-2xl font-bold py-2">
                                    Property Details
                                </div>
                                <div className="flex flex-col lg:flex-row justify-left space-x-4">
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_guests"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_guests"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Number
                                            of Guests</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_beds"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_beds"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Beds</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_baths"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_baths"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Baths</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="base_price"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="base_price"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Base
                                            Price</label>
                                    </div>
                                </div>
                                <div className="relative mb-4">
                                    <textarea id="amenities"
                                              className="block rounded-lg px-2.5 pb-10 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                              placeholder=" "/>
                                    <label htmlFor="amenities"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Amenities</label>
                                </div>
                                <div className="relative mb-6">
                                    <textarea id="description"
                                              className="block rounded-lg px-2.5 pb-32 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                              placeholder=" "/>
                                    <label htmlFor="description"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Description</label>
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <div className="flex flex-col items-start">
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full"
                                            onClick={handleCancel}
                                        >
                                            <p className="block overflow-auto py-2 px-4">Cancel</p>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-ACCENT_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full"
                                            onClick={handleConfirm}
                                        >
                                            <p className="block overflow-auto py-2 px-4">Confirm</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Listing;