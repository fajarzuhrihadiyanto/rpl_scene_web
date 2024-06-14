import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'
import useDataStore from "../store/dataStore"

const CommunnityServicePage = ({ isShow }) => {
    const communityServices = useDataStore.useCommunityServices()
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
                    {communityServices.map((communityService, index) => (
                        <li key={index}>{communityService.year} - {communityServices.community_service_type} {communityService.title} {communityService.professor_fullname && `, ${communityService.professor_fullname}`}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default CommunnityServicePage