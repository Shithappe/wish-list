import Wish from './Wish.js'

export default function Home() {
    return (
        <div className='main'>
            <h1>Wish List</h1>
            <Wish name='max' link='http://localhost:3000/home' price='500$' />
            <Wish name='max' link='http://localhost:3000/home' price='500$' />
        </div>
    )
}