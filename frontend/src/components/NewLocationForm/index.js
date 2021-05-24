import {useState, useEffect} from 'react';

const NewEvent = ({locations}) => {


    const [name, setName] = useState('');
    const [state, setState] = useState(1);
    const [country, setCountry] = useState(1);
    const [city, setCity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <h2>Add A Location</h2>
            <form onSubmit={handleSubmit}>
                <label>Location Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Country of Location</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    {}
                </select>
            </form>
        </div>
    )
}
