export const dynamic = "force-static"

import { Coffee, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C1A14] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-[#C4A77D]" />
              <span className="font-serif text-2xl font-semibold text-[#FAF8F5]">
                Haven Spot
              </span>
            </div>
            <p className="text-[#FAF8F5]/70 max-w-md mb-6">
              Your sanctuary for specialty coffee. Where every sip finds its home, 
              and every moment matters.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#FAF8F5] font-medium mb-4">Menu</h4>
            <ul className="space-y-3">
              {['Breakfast', 'Brunch', 'Coffee', 'Desserts'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#FAF8F5]/70 hover:text-[#C4A77D] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#FAF8F5] font-medium mb-4">Visit Us</h4>
            <ul className="space-y-3 text-[#FAF8F5]/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#C4A77D] flex-shrink-0 mt-0.5" />
                <span>123 Coffee Lane,<br />Sanctuary District</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C4A77D]" />
                <span>Mon-Sun: 7am - 12am</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#FAF8F5]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FAF8F5]/50 text-sm">
            © 2025 Haven Spot. All rights reserved.
          </p>
          <p className="text-[#FAF8F5]/50 text-sm">
            Made with ☕ and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
