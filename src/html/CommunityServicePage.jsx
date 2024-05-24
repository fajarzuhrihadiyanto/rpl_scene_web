import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'
import { COMMUNITY_SERVICE } from "../data/communityService"

const CommunnityServicePage = ({ isShow }) => {
    return (
        <Html
            transform
            position={[0,.001,-.1]} 
            scale={isShow ? [.01, .01, .01] : [0, 0, 0]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            style={{
                opacity: Number(isShow)
            }}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Pengabdian Masyarakat</h1>
                <ul className={styles.list}>
                    {COMMUNITY_SERVICE.map((research, index) => (
                        <li key={index}>{research.year} - {research.title}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default CommunnityServicePage