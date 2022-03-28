import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <h1>Log In</h1>
          <label htmlFor="email" className={styles.label}></label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder=" Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}></label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            placeholder=" Password"
          />
        </div>
        <div>
          <button className={styles.button}>Log In</button>
        </div>
        <Link to="/signup">create account</Link>
      </form>

    </>
  )
}

export default LoginForm
