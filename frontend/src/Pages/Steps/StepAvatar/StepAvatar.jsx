// This component imports the necessary dependencies and components, including React, useState, Card, Button, useSelector, and useDispatch.
import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './StepAvatar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http';
import { setAuth } from '../../../store/authSlice';

// This functional component renders a form that allows users to upload an avatar image and submit it for activation.
const StepAvatar = ({ onNext }) => {
    // These constants define the Redux store actions and hooks that are used in this component.
    const dispatch = useDispatch();
    const { name, avatar } = useSelector((state) => state.activate);

    // This state hook defines the default avatar image that will be displayed if the user has not uploaded an image.
    const [image, setImage] = useState('/images/monkey-avatar.png');

    // This function handles the user's selection of an image file and sets the image state and Redux store with the selected file.
    function captureImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    }

    // This asynchronous function sends the user's name and avatar data to the server for activation.
    async function submit() {
        try {
            const { data } = await activate({ name, avatar });
            if (data.auth) {
                dispatch(setAuth(data));
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    // This component returns a card that displays the user's name and allows the user to select an avatar image to upload and activate.
    return (
        <>
            <Card title={`Okay, ${name}`} icon="monkey-emoji">
                <p className={styles.subHeading}>How’s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div>
                    <Button onClick={submit} text="Next" />
                </div>
            </Card>
        </>
    );
};

// This component is exported for use in other components.
export default StepAvatar;