/* how to update state of an array of objects 
in react */
import React, {useState} from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    /* to set the current use new Date().getFullYear() method */
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    /* we need five handler functions to work with */
    function handleAddCar() {

    }
    function handleRemoveCar(index) {

    }
    function handleCarYearChange() {

    }
    function handleCarMakeChange() {

    }
    function handleCarModelChange() {

    }
    return(
        <div> 
            <h2> list of car objects</h2>
            <ul> 

            </ul>
            <input type="number" 
                   value={carYear} /> <br />
            <input type="text" 
                   value={carMake} /> <br />
            <input type="text"
                    value={carModel} /> <br />
            <button> add car </button>
        </div>
    );
}
export default MyComponent





