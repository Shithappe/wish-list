import Wish from './Wish.js'
import Notification from './Notification.js'

export default function Home() {
    let data = {
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
            
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
            <Wish data={data} />
        </div>
    )
}