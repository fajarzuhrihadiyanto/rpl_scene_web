import { Html } from "@react-three/drei"

import styles from './styles/ResearchPage.module.css'
import useDataStore from "../store/dataStore"

const BookPage = ({ isShow }) => {
    const books = useDataStore.useBooks()
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
                <h1 className={styles.title}>Daftar Buku</h1>
                <ul className={styles.list}>
                    {books.map((book, index) => (
                        <li key={index}>{book.release_year} - {book.title}{book.professor_fullname && `, ${book.professor_fullname}`}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default BookPage