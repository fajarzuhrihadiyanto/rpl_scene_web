import React from "react";
import { Html } from "@react-three/drei";

import styles from "./styles/BookPages.module.css";
import buttonStyles from "./styles/Button.module.css";

export const LecturerPagesLeft = ({ photo, name, isHeadLab}) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            // Page will show after book opened (1.5s)
            setTimeout(() => {
                htmlRef.current.scale.set(1,1,1)
            }, 1500)
        }
    }, [])

    return (
        <group ref={htmlRef} scale={[0,0,0]}>
            <Html
                className={styles.html}
                transform occlude
                scale={[.02, .02, .02]}
                rotation={[0,-Math.PI/2,0]}
                position={[-0.0001,0,-0.15]}
                >
                <div className={styles.container}>
                    <h1 className={styles.title}>{name}</h1>
                    <p style={{ fontSize: '1.5rem' }}>{isHeadLab && 'Kepala Laboratorium'}</p>
                    <img src={photo} alt={name} className={styles.picture}/>
                </div>
            </Html>
        </group>
    )
}



export const LecturerPagesRight = ({ lecturer, backFn }) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            // Page will show after book opened (1.5s)
            setTimeout(() => {
                htmlRef.current.scale.set(1,1,1)
            }, 1500)
        }
    }, [])
    return (
        <group ref={htmlRef} scale={[0,0,0]}>
            <Html
                transform occlude
                scale={[.02, .02, .02]}
                rotation={[0,-Math.PI/2,Math.PI]}
                position={[-0.0001,0,-0.15]}
                className={styles.html}>
                <div className={styles.container}>
                    <div className={styles.lecturer_data}>
                        <p>NIDN : {lecturer?.NIDN}</p>
                        <p>Email : {lecturer?.email}</p>
                        <p>Pendidikan terakhir : {lecturer?.latest_education}</p>
                        <p>Jabatan terakhir</p>
                        <ul>
                            {lecturer?.position.map((position, i) => (
                                <li key={i}>{position.name} {position.from_year && `${position.from_year} - ${position.to_year || 'Sekarang'}`}</li>
                            ))}

                            {lecturer?.position.length === 0 && '-'}
                        </ul>
                        <div>
                            <h3>Publikasi</h3>
                            <div className={styles.publication}>
                                {lecturer?.publication.scopus_id && <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.publication.scopus_id}`} target="_blank" rel="noreferrer">Scopus</a>}
                                {lecturer?.publication.google_scholar_id && <a href={`https://scholar.google.co.id/citations?user=${lecturer?.publication.google_scholar_id}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>}
                                {lecturer?.publication.sinta_id && <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.publication.sinta_id}`} target="_blank" rel="noreferrer">Sinta</a>}
                            </div>
                        </div>
                    </div>
                    <div
                        className={buttonStyles.button_container}
                        >
                            <button
                                className={buttonStyles.black_button}
                                onClick={backFn}
                                >Back</button>
                    </div>
                </div>
            </Html>
        </group>
    )
}