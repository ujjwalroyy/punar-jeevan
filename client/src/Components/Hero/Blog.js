
import oP from '../../assets/blood/20.webp'
import oP1 from '../../assets/blood/07.webp'
import oP2 from '../../assets/blood/08.webp'
import oP3 from '../../assets/blood/11.webp'
import oP4 from '../../assets/blood/13.webp'
import oP5 from '../../assets/blood/14.webp'
import oP6 from '../../assets/blood/15.webp'
import oP7 from '../../assets/blood/22.webp'
import oP23 from '../../assets/blood/23.webp'
import oP24 from '../../assets/blood/24.webp'

const cardItem = [
  { id: 1, logo: oP, name: "O+" },
  { id: 2, logo: oP1, name: "AB+" },
  { id: 4, logo: oP3, name: "A+" },
  { id: 3, logo: oP2, name: "B+" },
  { id: 2, logo: oP7, name: "RH+" },
  { id: 6, logo: oP5, name: "O-" },
  { id: 7, logo: oP23, name: "AB-" },
  { id: 7, logo: oP6, name: "A-" },
  { id: 7, logo: oP24, name: "B-" },
  { id: 5, logo: oP4, name: "RH-" },

];
  
  export default function Blog() {
    return (
      <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-center mb-3 text-gray-900">
        Blood Types
      </h1>
      <p className="text-center text-lg mb-4 text-gray-700">
      Here are some of the basic blood types
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border rounded-xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mb-3"
            />
            <div className="text-xl font-semibold text-gray-800">{name}</div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  