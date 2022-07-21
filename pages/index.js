// import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Link from 'next/link';


const Homepage = () => {
  return (
    <div className='content'>

      <h1 className={styles.title}>Welcome to NextJs App</h1>
      <p className={styles.text}>This is the Homepage Lorem Ipsum, dizgi ve baskı endüstrisinde
        kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
        matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır.
      </p>

      <Link href="/admin"><a className={styles.btn}>See Admin List</a></Link>

    </div>
  );
}

export default Homepage;