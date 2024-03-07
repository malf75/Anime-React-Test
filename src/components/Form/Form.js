import './Form.css'
import Text from '../Text/Text'
import List from '../List/List'
import Button from '../Button/Button'
import { useState } from 'react'

function Form(props){


    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onAnimeChanged({
            name,
            image,
            genre
        })
        setName('')
        setImage('')
        setGenre('')
    }

    return(
    <section className='form'>
        <form onSubmit={onSave}>
            <h2>Preencha os dados para criar o card do anime.</h2>
            <Text required={true} label="Name" placeholder="Digite o nome do anime" value={name} onChanged={value => setName(value)}/>
            <Text label="Image" placeholder="Digite o endereço da imagem" value={image} onChanged={value => setImage(value)}/>
            <List required={true} label="Genre" itens={props.genres} value={genre} onChanged={value => setGenre(value)}/>
            <Button>
                Criar Card
            </Button>
        </form>
    </section>
    )
}

export default Form