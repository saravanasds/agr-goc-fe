import React, { useState } from 'react';
import axios from 'axios';
import data from './data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [errors, setErrors] = useState({});

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

        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!fatherName) newErrors.fatherName = 'Father Name is required';
        if (!dob) newErrors.dob = 'Date of Birth is required';
        if (!gender) newErrors.gender = 'Gender is required';
        if (!email) newErrors.email = 'Email is required';
        if (!mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!adhaarNumber) newErrors.adhaarNumber = 'Adhaar Number is required';
        if (!district) newErrors.district = 'District is required';
        if (!constituency) newErrors.constituency = 'Constituency is required';
        if (!address) newErrors.address = 'Address is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear errors if validation passes

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
            toast.success('User registered successfully!');
        } catch (error) {
            if (error.response && error.response.data.message === 'Aadhaar number is already registered') {
                setErrors({ adhaarNumber: 'Aadhaar number is already registered' });
                toast.error('Aadhaar number is already registered');
            } else {
                console.error('There was an error registering the user!', error);
                toast.error('There was an error registering the user!');
            }
        }
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            
                <ToastContainer className='w-full flex justify-center items-center'/>
            
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
                                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                                <input
                                    type="text"
                                    placeholder='Father Name'
                                    value={fatherName}
                                    onChange={(e) => setFatherName(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                {errors.fatherName && <p className="text-red-500 text-xs">{errors.fatherName}</p>}
                            </div>
                            <div className='mb-2 flex flex-col items-center'>
                                <div className='w-full flex items-center gap-8'>
                                    <label htmlFor="dob" className='block mb-2'>DOB:</label>
                                    <input
                                        type="date"
                                        name='dob'
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className='border-2 py-2 px-3 mb-2 w-full'
                                    />
                                </div>
                                {errors.dob && <p className="text-red-500 text-xs w-full">{errors.dob}</p>}
                            </div>
                            <div className='mb-2 flex flex-col items-center py-2'>

                                <div className='w-full flex items-center justify-between'>
                                    <label className=''>Gender:</label>
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
                                {errors.gender && <p className="text-red-500 text-xs w-full">{errors.gender}</p>}
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
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                <input
                                    type="number"
                                    placeholder='Mobile Number'
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
                                <input
                                    type="number"
                                    placeholder='Adhaar Number'
                                    value={adhaarNumber}
                                    onChange={(e) => setAdhaarNumber(e.target.value)}
                                    className='border-2 py-2 px-3 mb-2 w-full'
                                />
                                {errors.adhaarNumber && <p className="text-red-500 text-xs">{errors.adhaarNumber}</p>}
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
                                {errors.district && <p className="text-red-500 text-xs">{errors.district}</p>}
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
                                {errors.constituency && <p className="text-red-500 text-xs">{errors.constituency}</p>}
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
                        {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
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
