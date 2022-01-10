export default function AddItemForm() {
    return (
        <div className="addItemForm">
            <form>
                <h2>Add Wish</h2>
                <input type='text' placeholder="Name"/>
                <input type='text' placeholder="Link"/>
                <input type='text' placeholder="Price"/>
                <br/>


                <div className="formButtons">
                    <input type='submit' value='Create'/>
                    <input type='button' value='Cancel'/>
                </div>
            </form>
        </div>
    )
}