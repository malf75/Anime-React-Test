import './Text.css'

function Text(props){
    const onDigited = (event) =>{
        props.onChanged(event.target.value)
    }

    return (
        <div className='text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigited} required={props.required} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default Text