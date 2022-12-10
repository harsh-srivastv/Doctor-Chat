import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);

        fetch('http://localhost:5000', {
            method: 'POST',
            body: "hellp bhsdk"
        })
    }

    return <Step onNext={onNext} />;
};

export default Authenticate;
