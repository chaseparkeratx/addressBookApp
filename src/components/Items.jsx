import style from './Items.module.css'
import Item from "./Item"

function Items(props) {

  return (
    <ul className={style.items}>
    {props.items.map((item) => {
      return  <Item key={item.login.uuid}person={item}/>
    })}
  </ul>
  )
}

export default Items


