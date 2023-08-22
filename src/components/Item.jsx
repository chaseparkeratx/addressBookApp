import style from './Item.module.css'
function Item(props) {
  // console.log(props)
  return (
    <li className={style.item}>
      <img src={props.person.picture.large} alt="" />
      <h2>{props.person.name.first} {props.person.name.last}</h2>
      <p>Age: {props.person.dob.age}</p>
      <button className='' onClick={props.person.results}>Show Details</button>
    </li>
  )
}

export default Item