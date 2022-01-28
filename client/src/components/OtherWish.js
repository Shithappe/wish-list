export default function OtherWish({data}) {
    return (
        <div className="listItem">
            <h3>{data.name}</h3>
            <h4>{data.link}</h4>
            <h4>{data.price}</h4>
        </div>
    )
}