import './List.css'

function List(props){
    return(
        <div className='list'>
            <label>
                {props.label}
            </label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map((item, index) => {return <option key={index}>{item}</option>})}
            </select>
        </div>
    )
}

export default List