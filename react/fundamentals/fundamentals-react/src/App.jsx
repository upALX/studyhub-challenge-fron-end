import { Header } from "./components/Header";
import {Post} from './components/Post.jsx';
import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>BAR</aside>
        <main>
          <Post author="JSX" content_post="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat labore optio velit, aliquam rerum ab impedit officia doloribus vel natus voluptas dolorum minus accusamus iure debitis, molestias dolores libero. Voluptas."/>
          <Post author="José Alexandre" content_post="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat labore optio velit, aliquam rerum ab impedit officia doloribus vel natus voluptas dolorum minus accusamus iure debitis, molestias dolores libero. Voluptas."/>
        </main>
      </div>
    </div>
  )
}

