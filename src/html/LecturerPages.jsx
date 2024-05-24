import React from "react";
import { Html } from "@react-three/drei";

import styles from "./styles/BookPages.module.css";
import buttonStyles from "./styles/Button.module.css";

export const LecturerPagesLeft = ({shown, photo, name, isHeadLab}) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            if(shown) {
                // Page will show after book opened (1.5s)
                setTimeout(() => {
                    console.log('page opened')
                    htmlRef.current.style.opacity = 1
                }, 1500)
            } else {
                console.log('page closed')
                htmlRef.current.style.opacity = 0
            }
        }
    }, [shown])

    return (
        <Html
            ref={htmlRef}
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
    )
}



export const LecturerPagesRight = ({ shown, lecturer, backFn }) => {
    const htmlRef = React.useRef()

    React.useEffect(() => {
        if (htmlRef.current) {
            if(shown) {
                // Page will show after book opened (1.5s)
                setTimeout(() => {
                    htmlRef.current.style.opacity = 1
                }, 1500)
            } else {
                htmlRef.current.style.opacity = 0
            }
        }
    }, [shown])
    return (
        <Html
            ref={htmlRef}
            transform occlude
            scale={[.02, .02, .02]}
            rotation={[0,-Math.PI/2,Math.PI]}
            position={[-0.0001,0,-0.15]}
            className={styles.html}>
            <div className={styles.container}>
                <div className={styles.lecturer_data}>
                    <p>NIDN : {lecturer?.nidn}</p>
                    <p>Email : {lecturer?.email}</p>
                    <p>Pendidikan terakhir : {lecturer?.last_education}</p>
                    <p>Jabatan terakhir</p>
                    <ul>
                        {lecturer?.last_position.map((position, i) => (
                            <li key={i}>{position}</li>
                        ))}

                        {lecturer?.last_position.length === 0 && '-'}
                    </ul>
                    <div>
                        <h3>Publikasi</h3>
                        <div className={styles.publication}>
                            <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.scopusId}`} target="_blank" rel="noreferrer">Scopus</a>
                            <a href={`https://scholar.google.co.id/citations?user=${lecturer?.scholarId}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>
                            <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.sintaId}`} target="_blank" rel="noreferrer">Sinta</a>
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
    )
}