import React from "react";
import img30 from "../../assets/blood/30.webp";
import img25 from '../../assets/blood/25.webp'
export const Middle = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];

  return (
    <div className="flex px-20 mt-10">
      <div className="grid grid-cols-3 place-items-center px-25">
        <div>
          <img className="mr-0" draggable={false} src={img30} width="100%" alt="" />
        </div>
        <div>
        <img className="mt-0" draggable={false} src={img25} width="100%" alt="" />
        </div>
        <div>
          <p>&rarr; Be the reason for someone's life❤️</p>
          <p>
          &rarr; Your single act of kindness can be the lifeline someone desperately
            needs. Donate blood, save lives.
          </p>
          <p>&rarr; Be a hero in someone's story—donate blood and give the gift of life</p>
        </div>
      </div>
      <div>
        <table className="w-max" cellPadding={5}>
          <thead>
            <tr>
              <td
                colSpan={3}
                className="border bg-blood text-white-900 text-center font-bold"
              >
                Compatible Blood Type Donors
              </td>
            </tr>
            <tr>
              <th className="border w-max text-lg">Blood Type</th>
              <th className="border w-max text-lg">Donate Blood To</th>
              <th className="border w-max text-lg">Receive Blood From</th>
            </tr>
          </thead>
          <tbody>
            {temp.map((e, index) => (
              <tr key={index}>
                <td className="border w-max text-lg">{e.blood}</td>
                <td className="border w-max text-lg">{e.donate}</td>
                <td className="border w-max text-lg">{e.recieve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Middle;
