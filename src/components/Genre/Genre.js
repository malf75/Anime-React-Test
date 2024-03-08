import Anime from '../Anime/Anime'
import './Genre.css'

function Genre(props){
    const css = {backgroundColor: props.secondaryColor}

    return(
        props.animes.length > 0 && <section className='genre' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='animes'>
                {props.animes.map( anime =>  {
                    return <Anime backgroundColor={props.primaryColor} key={anime.name} image={anime.image} name={anime.name} genre={anime.genre} onDelete={props.onDelete} />
                })}
            </div>
        </section>
    )
}

export default Genre