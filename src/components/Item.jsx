function Item(props) {
  // console.log(props)
  return (
    <li>
      <img src={props.person.picture.thumbnail} alt="" />
      <h2>{props.person.name.first} {props.person.name.last}</h2>
      <p>Age: {props.person.dob.age}</p>
    </li>
  )
}

export default Item