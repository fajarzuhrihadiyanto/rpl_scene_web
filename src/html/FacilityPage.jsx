import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'
import useDataStore from "../store/dataStore"

const FacilityPage = ({ isShow }) => {
    const facilities = useDataStore.useFacilities()
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
                    {facilities.map((facility, index) => <li key={index}>{facility.name}</li>)}
                </ul>
            </div>
        </Html>
    )
}

export default FacilityPage