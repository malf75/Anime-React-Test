import './Anime.css'

function Anime({name, image, genre, backgroundColor}){
    return(
        <div className='anime'>
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