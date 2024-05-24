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
                <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat Datang di halaman Laboratorium Rekayasa Perangkat Lunak.</h1>
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>Di Laboratorium ini ditawarkan bidang minat yang berfokus pada keahlian melakukan pengujian perangkat lunak, Kemampuan mengelola proyek perangkat lunak, Kemampuan mengurangi resiko kesalahan perangkat lunak, dan Kemampuan membuat perangkat lunak game.</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage