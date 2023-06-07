import { useRef, useState } from "react"

const FomSearch = ({setIdLocation}) => {
    const idLocationValue = useRef();    
    const [inputIsEmpty, setInputIsEmpty] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        const inputValue = idLocationValue.current.value.trim();        
        if(inputValue === ''){
            setInputIsEmpty(true)
            setTimeout(() => {
                setInputIsEmpty(false);
            }, 3000);
        }else{
            setIdLocation(inputValue);
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={idLocationValue} placeholder="Enter id location" />
            <button>Search</button>
        </form>
        {
            inputIsEmpty && <div className="cont_alert"><h3 className="alert">This field is required 👀</h3></div> 
        }
        </>
    )
}

export default FomSearch