import { useEffect } from "react"
import useFetch from "../src/hooks/useFetch"


const ResidentCard = ({ url }) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, []);
    
    return (
        <article className="card_resident">
            <header className="resident_header">
                <img className="img_resident" src={resident?.image} alt="" />
                <div className="status_resident">
                    <span className='circle-status'></span>
                    <span className="status">{resident?.status}</span>
                </div>
            </header>

            <section>
                <div className="name">
                <h3 className="resident_name">{resident?.name}</h3>
                <hr></hr>
                </div>
                
                
                <ul>
                    <li><span className="title_items_card">Specie</span><br/><span className="resident_descripion_card">{resident?.species}</span></li>
                    <li><span className="title_items_card">Origin </span><br/><span className="resident_descripion_card">{resident?.origin.name}</span></li>
                    <li><span className="title_items_card">Eppisodes where appear </span ><br/><span className="resident_descripion_card">{resident?.episode.length}</span></li>
                </ul>
            </section>

        </article >
    )
}

export default ResidentCard