import { GetStaticPaths, GetStaticProps } from 'next'
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'

import { getPrismicClient } from '../../services/prismic'

import commonStyles from '../../styles/common.module.scss'
import styles from './post.module.scss'

interface Post {
  first_publication_date: string | null
  data: {
    title: string
    banner: {
      url: string
    }
    author: string
    content: {
      heading: string
      body: {
        text: string
      }[]
    }[]
  }
}

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <img src="/teste.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Mar 2022
              </li>
              <li>
                <FiUser />
                Jovemdan
              </li>
              <li>
                <FiClock />
                5 min
              </li>
            </ul>
          </div>
        </div>

        <article>
          <h2>Titulo seção</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem, est vitae unde <strong> quod aspernatur maxime?</strong> Illum quasi ad velit vero, voluptatum deserunt vel, quidem ex iure nobis aut dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora reprehenderit alias, similique, officiis sequi id vero nihil quasi omnis labore expedita suscipit totam quisquam quaerat, autem doloremque. Maxime, neque voluptates.</p>
        </article>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
