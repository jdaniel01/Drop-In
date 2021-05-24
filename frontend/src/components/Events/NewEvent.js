// import {useState, useEffect} from 'react';

// const NewEvent = ({locations}) => {
//     const [title, setTitle] = useState('');
//     const [location, setLocation] = useState(0)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Event Title</label>
//                 <input id="name" name="name" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <label htmlFor="location_id">Event Location</label>
//                 <select>
//                     {locations.map(location => <option>{location.name  - location.}</option>)}
//                 </select>
//             </form>
//         </div>
//     )
// }
