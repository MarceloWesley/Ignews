import styles from './styles.module.scss'
import Image from 'next/image'
import {SignInButton} from '../SignInButton/index'
import { ActiveLink } from '../ActiveLink'


export function Header(){
 

  return(
   <header className={styles.headerContainer}>
     <div className={styles.headerContent}>
       <Image
       src="/images/ig.news.svg"
       alt="logo"
       width={100}
       height={100}
       />
       <nav>
         <ActiveLink activeClassName={styles.active} href={'/'}>
         <a className='' href="">Home</a>
         </ActiveLink>
         <ActiveLink activeClassName={styles.active} href={'/posts'} prefetch>
         <a className='' href="">Posts</a>
         </ActiveLink>
       </nav>
      <SignInButton/>
     </div>
   </header>
  )
}