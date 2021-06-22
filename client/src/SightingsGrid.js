import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting, updateSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} updateSighting={updateSighting}/>
    });
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;