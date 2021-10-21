import { VscGithubInverted } from 'react-icons/vsc'

import styles from './styles.module.scss'

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Enter and share your message</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Sign in with Github
      </a>
    </div>
  )
}