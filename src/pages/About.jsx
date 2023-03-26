import '../css/about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        AOS.init()
    })

    return (
        <div className="about">
            <div className="teks-about" data-aos="fade-down" data-aos-duration="500">
                <p>"Batu Bata Adalah salah satu properti didalam bahan bangunan, Jika anda ingin bangunan anda itu <span>kokoh</span> dan <span>tahan hingga bertahun-tahun</span>, Maka hal pertama yang harus anda perhatikan adalah <span>Batu Bata</span> itu sendiri. Kami disini menyediakan Batu Bata yang memiliki kualitas <span>Terbaik</span> di kelasnya".</p>
            </div>
            <div className="teks-fitur">
                <p>Kami Juga Memberikan Fitur:</p>
            </div>
            <div className="fast-respon" data-aos="fade-up" data-aos-duration="600">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                    </svg>
                </span>
                <p>Fast Respon</p>
            </div>
            <div className="pengiriman-cepat" data-aos="fade-up" data-aos-duration="800">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-rocket-fill" viewBox="0 0 16 16">
                    <path d="M10.175 1.991c.81 1.312 1.583 3.43 1.778 6.819l1.5 1.83A2.5 2.5 0 0 1 14 12.202V15.5a.5.5 0 0 1-.9.3l-1.125-1.5c-.166-.222-.42-.4-.752-.57-.214-.108-.414-.192-.627-.282l-.196-.083C9.7 13.793 8.85 14 8 14c-.85 0-1.7-.207-2.4-.635-.068.03-.133.057-.198.084-.211.089-.411.173-.625.281-.332.17-.586.348-.752.57L2.9 15.8a.5.5 0 0 1-.9-.3v-3.298a2.5 2.5 0 0 1 .548-1.562l.004-.005L4.049 8.81c.197-3.323.969-5.434 1.774-6.756.466-.767.94-1.262 1.31-1.57a3.67 3.67 0 0 1 .601-.41A.549.549 0 0 1 8 0c.101 0 .17.027.25.064.037.017.086.041.145.075.118.066.277.167.463.315.373.297.85.779 1.317 1.537ZM9.5 6c0-1.105-.672-2-1.5-2s-1.5.895-1.5 2S7.172 8 8 8s1.5-.895 1.5-2Z"/>
                    <path d="M8 14.5c.5 0 .999-.046 1.479-.139L8.4 15.8a.5.5 0 0 1-.8 0l-1.079-1.439c.48.093.98.139 1.479.139Z"/>
                    </svg>
                </span>
                <p>Pengiriman Cepat</p>
            </div>
            <div className="terbaik" data-aos="fade-up" data-aos-duration="1000">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                </span>
                <p>Kualitas Terbaik</p>
            </div>
            <div className="lokasi" data-aos="flip-left">
                <p>Lokasi :</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1291.1057588192825!2d98.88615523000935!3d3.5145421229581126!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1679665749883!5m2!1sid!2sid"
                title='lokasi' width="350" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}