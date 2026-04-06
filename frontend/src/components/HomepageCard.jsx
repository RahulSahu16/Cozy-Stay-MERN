function HomeCard({ home }) {
  return (
     <div className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">

      {/* Image */}
      <img
        src={home.image}
        alt={home.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-black font-medium text-base">
          {home.title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {home.price}
        </p>
      </div>
    </div>
  );
}

export default HomeCard;