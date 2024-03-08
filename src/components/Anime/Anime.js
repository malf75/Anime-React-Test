import './Anime.css'
import { IoCloseCircle } from "react-icons/io5";


function Anime({name, image, genre, backgroundColor, onDelete}){
    return(
        <div className='anime'>
            <IoCloseCircle className='delete' onClick={() => onDelete(name)}/>
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{genre}</h5>
            </div>
        </div>
    )
}

export default Anime