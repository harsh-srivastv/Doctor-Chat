import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '1px',
    };
    const history = useHistory();
    function startRegister() {
        history.push('/register');
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Doctor Chat!" icon="Hand">
            <p className={styles.text}>
                    We're working hard to bridge the gap between the doctors and the patients 
                    through Doctor Chat, so thankyou for being a part in this journey :
                </p>
                <div>
                    <Button onClick={startRegister} text="Get your username"/>  
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite link ? </span>
                    <Link style={signInLinkStyle} to="/login">Sign in</Link>
                </div>
            </Card>
        </div>
    )
};

export default Home;