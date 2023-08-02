import Item from "./Item"

function Items(props) {

  return (
    <ul>
    {props.items.map((item) => {
      return  <Item key={item.login.uuid}person={item}/>
    })}
  </ul>
  )
}

export default Items


