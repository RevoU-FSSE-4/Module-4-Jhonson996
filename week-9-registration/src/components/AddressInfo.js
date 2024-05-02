import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AddressInfoStep = ({ nextStep, prevStep }) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-semibold mb-4">Address Information</h2>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <Field name="address" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <Field name="city" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="city" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">state</label>
                <Field name="state" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="state" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
                <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
                <Field name="zip" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="zip" component="div" className="text-red-500 text-xs italic" />
            </div>
            <div className="flex justify-between">
                <button onClick={prevStep} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Back
                </button>
                <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Next
                </button>
            </div>
        </div>
    );
};

export default AddressInfoStep;
