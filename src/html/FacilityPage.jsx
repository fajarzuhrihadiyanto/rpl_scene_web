import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'

const FacilityPage = ({ isShow }) => {
    return (
        <Html
            transform
            position={[0,.001,-.1]} 
            scale={isShow ? [.01, .01, .01] : [0, 0, 0]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            style={{
                opacity: Number(isShow),
                
            }}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Fasilitas</h1>
                <ul className={styles.list}>
                <li>Processor Intel Core i3 Gen-3, i5 Gen-8, sampai Intel® Xeon® E5-2640 dengan RAM 4GB-16GB.</li>
                <li>Untuk HDD sebagian besar minimal 1TB..</li>
                <li>Semua monitor berukuran 19″ untuk memudahkan mahasiswa dalam melakukan penelitian dan pembelajaran rekayasa perangkat lunak ataupun pemrograman.</li>
                <li>Dilengkapi LED TV 55″ untuk mahasiswa dalam melakukan demo pembelajaran.</li>
                </ul>
            </div>
        </Html>
    )
}

export default FacilityPage