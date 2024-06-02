import React, { useState } from 'react';
import axios from 'axios';
import data from './data.json';

function Register() {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [adhaarNumber, setAdhaarNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [constituency, setConstituency] = useState('');
    const [address, setAddress] = useState('');

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeDistrict = (event) => {
        setDistrict(event.target.value);
        setConstituency(''); // Reset constituency when district changes
    };

    const handleChangeConstituency = (event) => {
        setConstituency(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            name,
            fatherName,
            dob,
            gender,
            email,
            mobileNumber,
            adhaarNumber,
            district,
            constituency,
            address
        };

        try {
            const response = await axios.post('http://localhost:5000/api/register', userData);
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className='w-[40%] flex justify-center items-center bg-gray-400 h-full'>
                <h1 className="text-8xl font-bold mb-4">Register</h1>
            </div>

            <div className='w-[60%]'>
                <form onSubmit={handleSubmit} className='border-2 p-10'>
                    <div className="flex gap-5">
                        <div className='w-[50%]'>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                <input
                                    type="text"
                                    placeholder='Father Name'
                                    value={fatherName}
                                    onChange={(e) => setFatherName(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                            </div>
                            <div className='mb-2 flex items-center gap-8'>
                                <label htmlFor="dob" className='block mb-2'>DOB:</label>
                                <input
                                    type="date"
                                    name='dob'
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                            </div>
                            <div className='mb-2 flex items-center py-2 gap-8'>
                                <label className=''>Gender:</label>
                                <div className='w-full flex items-center justify-between'>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={gender === 'male'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={gender === 'female'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            checked={gender === 'other'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Others</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='w-[50%]'>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                <input
                                    type="number"
                                    placeholder='Mobile Number'
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                <input
                                    type="number"
                                    placeholder='Adhaar Number'
                                    value={adhaarNumber}
                                    onChange={(e) => setAdhaarNumber(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                            </div>
                            <div className='mb-2'>
                                <select
                                    name="district"
                                    value={district}
                                    onChange={handleChangeDistrict}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                >
                                    <option value="">Select District</option>
                                    {data.districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-2'>
                                <select
                                    name="constituency"
                                    value={constituency}
                                    onChange={handleChangeConstituency}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                >
                                    <option value="">Select Constituency</option>
                                    {district && data.constituencies[district] && (
                                        data.constituencies[district].map((constituency, index) => (
                                            <option key={index} value={constituency}>{constituency}</option>)))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-2'>
                        <textarea
                            placeholder='Address'
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            cols="30"
                            rows="4"
                            className='w-full border-2 p-2'></textarea>
                    </div>
                    <div className='text-center mt-2'>
                        <button type="submit" className="px-20 py-2 bg-blue-500 text-white rounded ">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
