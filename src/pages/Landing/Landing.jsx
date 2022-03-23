import styles from './Landing.module.css'
import { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

const Landing = ({ user }) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('login')
  }, [])

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
