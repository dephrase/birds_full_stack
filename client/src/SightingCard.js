import { deleteSighting } from "./SightingService"
import { putSighting } from "./SightingService";

const SightingCard = ({sighting, removeSighting, updateSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    const handleEdit = () => {
        putSighting(sighting._id).then(() => {
            updateSighting(sighting._id);
        })
    }

    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleEdit}><img src="https://img.icons8.com/android/24/000000/edit.png"/></button>
            <hr></hr>
        </>
    )
}

export default SightingCard;