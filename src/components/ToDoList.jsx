import ToDoCard from "./ToDoCard"

export default function ToDoList(props) {
    // eslint-disable-next-line react/prop-types
    const {todos} = props;
  return (
    <ul className="main">
        {todos.map((todo, index) => {
            return (
                // key={index} is necessary coz it's required by the map method, 
                // index={index} is a variable passed to ToDoCard
                <ToDoCard {...props} key={index} index={index}> 
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
    </ul>
  )
}
