export default function OtherWish(props) {
    return (
        <div className="listItem">
            <h3>{props.data.name}</h3>
            <h4>{props.data.link}</h4>
            <h4>{props.data.price}</h4>
        </div>
    )
}