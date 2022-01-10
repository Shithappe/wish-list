export default function Wish(props) {
    return (
        <div className="listItem">
            <h3>{props.data.name}</h3>
            <button className="doneButton"></button>
            <h4>{props.data.link}</h4>
            <button className="copyLinkButton">copy</button>
            <h4>{props.data.price}</h4>
        </div>
    )
}