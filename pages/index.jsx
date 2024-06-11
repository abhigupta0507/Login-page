import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'

export default function HomePage( {username} ) {
    return (
        <Layout pageTitle="Home">
        {username ?
        <>
            <nav className='index__navbar'>
                <h3 className='index__welcome__message'>Welcome {username}</h3>
                <div className='nav__link__container'>
                    <Link className='nav__link' href="/api/logout">LOGOUT</Link>
                </div>
            </nav>

            <section className='dashboard'>
                Dashboard
            </section>
        </>: 
        <>
        <nav className='index__navbar'>
                <div className='nav__link'>
                    FMC Weekend
                </div>
                <div className='nav__link__container'>
                    <Link className='nav__link' href="/login">LOGIN</Link><br/>
                    <Link className='nav__link' href="/signup">REGISTER</Link>
                </div>
            </nav>

            <section className='dashboard'>
                Please Login first 
            </section>
        </>
        }
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        username = false;
    }
    return { props: {username} };
};