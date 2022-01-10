import Wish from './Wish.js'

export default function Home() {
    let data = {
        name: 'max',
        link: 'http://localhost:3000/home',
        price: '500$'
    }
    return (
        <div className='main'>
            <h1>Wish List<span>.react</span></h1>
            <Wish data={data} />
            <Wish data={data} />
        </div>
    )
}