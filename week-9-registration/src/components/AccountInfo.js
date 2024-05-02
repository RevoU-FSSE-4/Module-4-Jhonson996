import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AccountInfoStep = ({ prevStep }) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-semibold mb-4">Account Information</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <Field name="username" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <Field name="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
            </div>
            {/* Add any additional account fields */}
            <div className="flex justify-between">
                <button onClick={prevStep} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Back
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AccountInfoStep;
