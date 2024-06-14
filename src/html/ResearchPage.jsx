import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'
import useDataStore from "../store/dataStore"

const ResearchPage = ({ isShow }) => {
    const research = useDataStore.useResearch()
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
                <h1 className={styles.title}>Daftar Penelitian</h1>
                <ul className={styles.list}>
                    {research.map((research, index) => (
                        <li key={index}>{research.year} - {research.research_type} {research.title} {research.professor_fullname && `, ${research.professor_fullname}`}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default ResearchPage