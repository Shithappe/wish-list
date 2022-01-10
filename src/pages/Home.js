import Wish from '../components/Wish.js'
import Notification from '../components/Notification.js'
import AddItemForm from '../components/AddItemForm.js'
// import ShareList from './ShareList.js'

export default function Home() {
    let data = {
        id: 1,
        name: 'max',
        link: 'http://localhost:3000/home',
        price: '500$'
    }
    return (
        <div className='main'>
            <div className='nav'>
                <div className='title'>
                    <h1>Wish List<span>.react</span> </h1>
                    <button>Add wish</button>
                </div>
                <button>Share wish</button>
            </div>
            <Notification name='awd'/>
            <AddItemForm/>
            {/* <ShareList /> */}
            
            {/* useForm */}
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
        </div>
    )
}