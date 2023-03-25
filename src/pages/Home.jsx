import { Link } from 'react-router-dom'
import '../css/home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="teks-home">
                <h3>Hai Selamat Datang di website ini</h3>
                <p>Pemesanan Via WhastApp bisa klik di bawah</p>
                <Link to='https://wa.me/6281375875829'>Pesan</Link>
            </div>
        </div>
    )
}