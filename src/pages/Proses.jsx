import '../css/proses.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Proses() {
    useEffect(() => {
        AOS.init()
    })


    const [proses] = React.useState([
        {
            "id": "1",
            "title": "Proses Pembuatan",
            "css": "pembuatan",
            "teks": "Didalam Proses Pembauatan ini, Tanah-tanah    pilihan akan dimasukkan didalam mesin, dan mesin otomatis akan mencetak batu-bata"
        },
        {
            "id": "2",
            "title": "Proses Pengeringan",
            "css": "pengeringan",
            "teks": "Ketika Batu sudah tercetak, Makan akan langsung diteruskan kedalam proses Pengeringan, Dan proses ini biasanya memakan waktu hingan 7 Hari"
        },
        {
            "id": "3",
            "title": "Proses Pembakaran",
            "css": "pembakaran",
            "teks": "Ketika Batu dirasa sudah kering maka akan masuk kedalam proses Pembakaran, Didalam proses Pembakaran bisa memakan waktu hingga 3/4 Hari"
        },
        {
            "id": "4",
            "title": "Siap Dipasarkan",
            "css": "siap-dipasarkan",
            "teks": "Ketika Batu sudah di bakar hingga Merah, Kini waktunya Batu-Bata siap untuk dipasarkan"
        }
    ])

    return (
        <div className="proses">
            <div className="teks-proses">
                <p>Dalam Pembuatan Batu Bata ada beberapa Proses:</p>
            </div>
            {proses.map((proces) => {
                return (
                    <div className="teknik" key={proces.id} data-aos="fade-up" data-aos-duration="500">
                        <div className={proces.css}></div>
                        <div className="teks-pembuatan">
                            <h3>{proces.title}</h3>
                            <p>{proces.teks}</p>
                        </div>
                    </div>
                )
            })}
            <div className="pesan">
                <p>Jangan Lupa Di Pesan Ya❤</p>
            </div>
        </div>
    )
}