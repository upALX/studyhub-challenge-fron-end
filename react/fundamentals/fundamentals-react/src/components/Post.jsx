import styles from './Post.module.css'

export function Post(props){
    return(
        <div className={styles.content_post}>
            <h2>{props.author}</h2>
            <p>{props.content_post}</p>
        </div>
    )
}