export default function Notification(props) {
    return (
        <div className="notification">

            
            <p><b>{props.name}</b> gave you access to his list</p>
            <div className="formButtons">
                <button>Accept</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}