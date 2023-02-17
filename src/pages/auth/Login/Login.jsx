
import bgImage from './../../../assets/images/bg-login.png';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <LoginForm />
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full hidden lg:block" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default Login;