export const About = () => {
  return (
    <div className="bg-white text-gray-800">
 
      <section className="bg-yellow-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About QuickBite</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Serving hot meals at lightning speed. Because hunger waits for no one.
        </p>
      </section>

      <section className="py-16 px-4 md:px-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To deliver delicious meals from your favorite local spots straight to your door — fast, fresh, and fuss-free.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            A world where everyone can get quality food in minutes, not hours. We're here to feed the future, one order at a time.
          </p>
        </div>
      </section>

      {/* Why QuickBite */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuickBite?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Superfast Delivery</h3>
            <p>Get your food in under 30 minutes. Or we cry in the kitchen.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🍔</div>
            <h3 className="text-xl font-semibold mb-2">Top Restaurants</h3>
            <p>Only the tastiest joints in town. Curated with love and a lot of cravings.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>A few taps and boom — dinner’s on the way. Grandma could do it. Probably.</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-yellow-200 py-6 text-center text-sm text-gray-700">
        &copy; 2025 QuickBite. All rights reserved.
      </footer>
    </div>
  );
};
