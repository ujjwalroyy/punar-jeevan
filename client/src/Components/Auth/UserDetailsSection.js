// src/components/UserDetailsSection.js

import React from 'react';

const UserDetailsSection = ({
    handle,
    setName,
    setHospital,
    setContactPerson,
    setCategory,
    setWebsite,
    setAge,
    setGender,
    setBlood,
    setMail,
    setBankMail,
    setPhone,
    setPassword,
    bloodGroups
}) => (
    <fieldset className="border border-solid border-gray-300 px-7 py-5">
        <legend className="text-2xl font-bold">
            {handle === "bank" ? "Blood Bank" : "User"} Details
        </legend>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <label className="font-semibold leading-8">
                    {handle === "bank" ? "Blood Bank " : ""}Name:<font color="red">*</font>
                </label>
                <input
                    className="w-full p-3 text-md border border-silver rounded"
                    type="text"
                    placeholder={handle !== "bank" ? "Enter your full name" : ""}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {handle === "bank" && (
                <>
                    <div>
                        <label className="font-semibold leading-8">Parent Hospital Name:<font color="red">*</font></label>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="text"
                            required
                            onChange={(e) => setHospital(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-semibold leading-8">Contact Person:</label>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="text"
                            onChange={(e) => setContactPerson(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="font-semibold leading-8">Category:<font color="red">*</font></label>
                        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                            <option value="Private">Private</option>
                            <option value="Govt.">Govt.</option>
                            <option value="Red Cross">Red Cross</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold leading-8">Website:</label>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="text"
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                </>
            )}
            {handle !== "bank" && (
                <>
                    <div>
                        <label className="font-semibold leading-8">Age:<font color="red">*</font></label>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="number"
                            placeholder="Enter your age"
                            required
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="font-semibold leading-8">Gender:<font color="red">*</font></label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="blood" className="font-semibold leading-8">Blood Group:<font color="red">*</font></label>
                        <select name="blood" id="blood" onChange={(e) => setBlood(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                            {bloodGroups.map((e, i) => (
                                <option key={i} value={i}>{e}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold leading-8">Email:</label>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                </>
            )}
            <div>
                <label className="font-semibold leading-8">{handle === "bank" ? "Email:" : "Mobile:"}<font color="red">*</font></label>
                <input
                    className="w-full p-3 text-md border border-silver rounded"
                    type="number"
                    placeholder={handle !== "bank" ? "Enter your mobile" : ""}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            {handle === "bank" && (
                <div>
                    <label className="font-semibold leading-8">Email:</label><font color="red">*</font>
                    <input
                        className="w-full p-3 text-md border border-silver rounded"
                        type="email"
                        required
                        onChange={(e) => setBankMail(e.target.value)}
                    />
                </div>
            )}
            <div>
                <label className="font-semibold leading-8">Password:</label><font color="red">*</font>
                <input
                    className="w-full p-3 text-md border border-silver rounded"
                    type="password"
                    placeholder={handle !== "bank" ? "Enter your password" : ""}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
    </fieldset>
);

export default UserDetailsSection;
