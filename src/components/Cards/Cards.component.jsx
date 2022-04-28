import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './Cards.module.css';

const url = `https://ghibliapi.herokuapp.com/films`;

function Cards() {
    const { data, error } = useFetch(url);

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    })

    return !data ? (
        <div>
            <p>No data.</p>
        </div>
    ) : (
        <div className={styles.cards}>
            {data.map((film) => (
                <div className={styles.card} key={film.id}>
                    <div className={styles['title-bg']}>
                        <h1>{film.title}</h1>
                        <h1>{film.original_title}</h1>
                    </div>
                    <p>Director: {film.director}</p>
                    <p>Initial Release: {film.release_date}</p>
                    <p>Description:</p>
                    <p>{film.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards;