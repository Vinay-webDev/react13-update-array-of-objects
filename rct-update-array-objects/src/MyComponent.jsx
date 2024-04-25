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
        /* it's not that complicated as you might expect */
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar])
    }
    function handleRemoveCar(index) {

    }
    function handleCarYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleCarMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleCarModelChange(event) {
        setCarModel(event.target.value);
    }
    return(
        <div> 
            <h2> list of car objects</h2>
            <ul> 
                {cars.map((car, index) => <li key={index} > {car.year} {car.make} {car.model} </li>)}
            </ul>
            <input type="number" 
                   value={carYear}
                   onChange={handleCarYearChange} /> <br />
            <input type="text" 
                   value={carMake} 
                   onChange={handleCarMakeChange} /> <br />
            <input type="text"
                    value={carModel}
                    onChange={handleCarModelChange} /> <br />
            <button onClick={handleAddCar} > add car </button>
        </div>
    );
}
export default MyComponent





