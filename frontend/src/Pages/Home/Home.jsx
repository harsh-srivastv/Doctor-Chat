import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Doctor Chat!" icon="Hand">
            <p className={styles.text}>
                    We're working hard to bridge the gap between the doctors and the patients 
                    through Doctor Chat, so thankyou for being a part in this journey :
                </p>
                <div>
                    <Button text="Get your username"/>  
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite link ? </span>
                    <Link to="/login">Sign in</Link>
                </div>
            </Card>
        </div>
    )
};

export default Home;