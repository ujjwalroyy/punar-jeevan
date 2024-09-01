// src/components/LogInSection.js

import React from 'react';

const LogInSection = ({ setPhone, setPassword }) => (
    <>
        <div>
            <label className="font-semibold leading-8">Username:<font color="red">*</font></label>
            <input
                className="w-full p-3 text-md border border-silver rounded"
                type="number"
                placeholder="Enter your mobile"
                required
                onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <br />
        <div>
            <label className="font-semibold leading-8">Password:</label><font color="red">*</font>
            <input
                className="w-full p-3 text-md border border-silver rounded"
                type="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    </>
);

export default LogInSection;
