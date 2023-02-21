
import bgImage from './../../../assets/images/bg-login.png';

const PasswordRecovery = () => {
    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div>Hello</div>
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full hidden lg:block" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default PasswordRecovery;