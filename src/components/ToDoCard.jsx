export default function ToDoCard(props) {
    // eslint-disable-next-line react/prop-types
    const { children, deleteItem, index, edit } = props;
  return (
    <li className="todoItem">
        {children}
        <div className="actionsContainer">
            <button onClick={() => {
                edit(index);
            }}>
                <i className="fa-solid fa-marker"></i>
            </button>
            <button onClick={() => {
                deleteItem(index);
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>
            
        </div>
    </li>
  )
}
