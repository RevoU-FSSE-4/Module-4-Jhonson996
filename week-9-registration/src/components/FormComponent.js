import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PersonalInfoStep from './PersonalInfo';
import AddressInfoStep from './AddressInfo';
import AccountInfoStep from './AccountInfo';
import * as Yup from 'yup';

const FormComponent = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (values) => {
        console.log(values);
        const fullName = `${values.fullname}`;
        alert(`Welcome ${fullName}`);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInfoStep nextStep={nextStep} />;
            case 2:
                return <AddressInfoStep nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <AccountInfoStep prevStep={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <Formik
                initialValues={{
                    fullname: '',
                    dob: '',
                    email: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    // Personal Info
                    fullname: Yup.string().required('Full Name is required'),
                    dob: Yup.date().required('Date of Birth is required'),
                    email: Yup.string().email('Invalid email address').required('Email is required'),

                    // Address Info
                    address: Yup.string().required('Address is required'),
                    city: Yup.string().required('City is required'),
                    state: Yup.string().required('State is required'),
                    zip: Yup.string().required('ZIP code is required'),

                    // Account Info
                    username: Yup.string().required('Username is required'),
                    password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must be at least 8 characters')
                    .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
                    ),
                })}
                onSubmit={handleSubmit}
                // onSubmit={(values) => {
                //     // Handle form submission here
                //     console.log(values);
                // }}
            >
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {renderStep()}
                </Form>
            </Formik>
        </div>
    );
};

export default FormComponent;
