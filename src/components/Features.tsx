<section className="bg-[#f3f9fe] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Cómo actúa el biomagnetismo en tu cuerpo
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      La terapia trabaja de manera profunda para restaurar el equilibrio en todo el organismo
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#f3f9fe] p-6 rounded-xl shadow-sm border border-[#0080ff]/10 hover:shadow-md transition-shadow duration-300"
        >
          {/* ... existing code ... */}
        </div>
      ))}
    </div>
  </div>
</section> 