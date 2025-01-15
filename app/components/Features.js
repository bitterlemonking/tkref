export const Features = () => (
    <section id="services" className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">
          How We Can Support You
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Shopping & Shipping */}
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div className="text-pink-500 text-3xl font-semibold">
              Shop & Ship for Leisure
            </div>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>• Personal shopping guide for unique Chinese products</li>
              <li>• Hassle-free shipping support to your doorstep</li>
            </ul>
          </div>
  
          {/* Content Creation */}
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div className="text-pink-500 text-3xl font-semibold">
              Create & Grow in Wealth
            </div>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>• Account growth strategy for Chinese platforms</li>
              <li>• All-in-one solution for your own e-commerce brand</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );