import styles from '@/app/ui/login/login.module.css';
import LoginForm from '../ui/login/loginForm/loginForm';
// import { authenticate } from '../lib/actions';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form> */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
