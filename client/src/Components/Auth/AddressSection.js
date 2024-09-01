// src/components/AddressSection.js

import React from 'react';

const AddressSection = ({
    handle,
    setState,
    setDistrict,
    setAddress,
    fetchGeo,
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    data,
    state,
    district
}) => (
    <fieldset className="border border-solid border-gray-300 px-7 py-5 pb-7">
        <legend className="text-2xl font-bold">
            {handle === "bank" ? "Blood Bank " : ""}Address
        </legend>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="state" className="font-semibold leading-8">State:<font color="red">*</font></label>
                <select name="state" id="state" onChange={(e) => { setState(e.target.value); setDistrict(0); }} className="w-full p-3 text-md border border-silver rounded">
                    {data.states.map((e, i) => (
                        <option key={i} value={i}>{e.state}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="district" className="font-semibold leading-8">District:<font color="red">*</font></label>
                <select name="district" id="district" onChange={(e) => setDistrict(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                    {data.states[state].districts.map((e, i) => (
                        <option key={i} value={i}>{e}</option>
                    ))}
                </select>
            </div>
            <div className="col-span-2">
                <label className="font-semibold leading-8">Address:<font color="red">*</font></label>
                <input
                    className="w-full p-3 text-md border border-silver rounded"
                    type="text"
                    placeholder="Enter your complete address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
        </div>
        {handle === "bank" && (
            <>
                <br />
                <div>
                    <label className="font-semibold leading-7">Location:<font color="red">*</font></label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
                    <div className="w-full" style={{ gridColumn: "2/4", gridRow: "1/3" }}>
                        <div id="map" className="w-full h-[200px]"></div>
                    </div>
                    <div style={{ gridColumn: "1", gridRow: "1/2" }}>
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="number"
                            step="0.01"
                            placeholder="Latitude"
                            disabled
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                            required
                        /><br /><br />
                        <input
                            className="w-full p-3 text-md border border-silver rounded"
                            type="number"
                            step="0.01"
                            placeholder="Longitude"
                            disabled
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                            required
                        />
                        <button type="button" className="bg-purple text-center text-white-900 rounded-lg mt-4 px-4 py-2" onClick={fetchGeo}>
                            Fetch Geocode
                        </button>
                    </div>
                </div>
            </>
        )}
    </fieldset>
);

export default AddressSection;
