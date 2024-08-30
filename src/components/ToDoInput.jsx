export default function ToDoInput(props){
    // eslint-disable-next-line react/prop-types
    const {add, newValue, setNewValue} = props;

    return (
    <header>
        <input placeholder="Input to do item..." value={newValue} onChange={(e) => {
            setNewValue(e.target.value)
        }}/>
        <button onClick={() => {
            add(newValue)
            setNewValue('')
        }}>Add</button>
    </header>)
}