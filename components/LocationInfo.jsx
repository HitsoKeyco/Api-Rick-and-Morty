
const locationinfo = ({location}) => {
    return (
        <div>
            <article className="card_data_general">
            <h3 className='name_location_general'>{location?.name}</h3>
                <ul className='ul_data_general'>
                    <li className='li_data_general'><span className='data_general_resident'>Type </span><span className='data_general_item'>{location?.type}</span></li>
                    <li className='li_data_general'><span className='data_general_resident'>Dimension </span><span className='data_general_item'>{location?.dimension}</span></li>
                    <li className='li_data_general'><span className='data_general_resident'>Population </span><span className='data_general_item'>{location?.residents.length}</span></li>
                </ul>
            </article>            
        </div>
    )
}

export default locationinfo