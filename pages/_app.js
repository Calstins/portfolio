import '../styles/globals.css';
//components
import Layout from '../components/Layout';
import Transition from '../components/Transition'
//router
import { useRouter} from 'next/router';
//framer motion effect
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key ={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
