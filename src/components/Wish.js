export default function Wish(props) {
    return (
        <div className="listItem">
            <h3>{props.name}</h3>
            <button className="doneButton"></button>
            <h4>{props.link}</h4>
            <h4>{props.price}</h4>
        </div>
    )
}