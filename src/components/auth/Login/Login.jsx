
import bgImage from './../../../images/bg-login.png';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="flex h-screen">
            <section className="w-1/2 h-full">
                <LoginForm />
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default Login;