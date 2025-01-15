export const Footer = () => (
    <footer className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div><a href="#services" className="text-gray-600 hover:text-pink-500">Services</a></div>
              <div><a href="#about" className="text-gray-600 hover:text-pink-500">About</a></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <div>Xiaohongshu: @mindfulbridge</div>
              <div>Email: yddcreation@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © 2025 Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );