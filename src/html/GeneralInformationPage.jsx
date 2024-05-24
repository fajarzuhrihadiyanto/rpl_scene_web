import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'

const GeneralInformationPage = () => {
    return (
        <Html
            transform
            position={[-0.539, 1.312, 2.297]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat Datang di halaman Laboratorium Grafika, Interaksi dan Game.</h1>
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>Laboratorium ini di bidang minat ini menawarkan bidang keahlian yang ditekankan pada kemampuan lulusan dalam mendesain, mengembangkan dan mendokumentasikan proses pembuatan game sesuai dengan standar. Serta membuat model 3 dimensi dan pemograman di dalam realitas virtual serta aplikasi realitas virtual 3 dimensi dengan menggunakan game engine.</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage