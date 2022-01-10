export default function shareList() {
    return (
        <div className="shareList">
            <input type='text' placeholder='Search by username' />
            
            <div className="formButtons">
                <button>Accept</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}