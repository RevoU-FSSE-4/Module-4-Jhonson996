import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PersonalInfoStep = ({ nextStep }) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="mb-4">
                <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <Field name="fullname" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="fullname" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <Field name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date Of Birth</label>
                <Field name="dob" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="dob" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="flex justify-end">
                <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Next
                </button>
            </div>
        </div>
    );
};

export default PersonalInfoStep;
