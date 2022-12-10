import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useHistory();
    function startRegister() {
        history.push('/authenticate'); 
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Doctor Chat!" icon="Hand">
                <p className={styles.text}>
                    We're working hard to bridge the gap between the doctors and the patients 
                    through Doctor Chat, so thankyou for being a part in this journey :
                </p>
                <div>
                    <Button onClick={startRegister} text="Create Your Account" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                    {/* <Link style={signInLinkStyle} to="/login">
                        Sign in
                    </Link> */}
                </div>
            </Card>
        </div>
    );
};

export default Home;
