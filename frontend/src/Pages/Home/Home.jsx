import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
// import { Link } from 'react-router-dom';

const Home = () => {
    return <div className={styles.card}>
        <div className={styles.headingWrapper}>
            <img className={styles.headimg} src="/Images/Hand.png" alt="logo" />
            <div className={styles.heading}>Welcome to Doctor Chat!</div>
        </div>
        <p style={{"padding":"0 30px 25px"}}>
            We're working hard to bridge the gap between the doctors and the patients 
            through Doctor Chat, so thankyou for being a part in this journey :
        </p>
        <div>
            <button>
                <span>
                    Get your username
                </span>
                <img src="/Images/VectorArrow.png" alt="arrow"/>
            </button>  
        </div>
        <div>
            <span>Have an invite link ? </span>
            <Link to="/login">Sign in</Link>
        </div>
    </div>;
};

export default Home;