export const dynamic = "force-static"

import {
  ParkingCircle,
  Baby,
  Users,
  Moon,
  Smartphone,
  CreditCard,
} from "lucide-react";

export default function Details() {
  return (
    <section id="details" className="py-24 lg:py-32 bg-[#F0EBE4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-[#C4A77D] tracking-widest uppercase mb-4">
            Practical Details
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#2C1A14] mb-6">
            Everything You Need
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-12">
            <h3 className="font-serif text-2xl text-[#2C1A14] mb-6">
              Amenities
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: ParkingCircle, label: "Free Parking" },
                { icon: Baby, label: "High Chairs" },
                { icon: Users, label: "Private Dining" },
                { icon: Moon, label: "Late Hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#C4A77D]" />
                  </div>
                  <span className="text-[#2C1A14] font-medium text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#2C1A14] rounded-3xl p-8 lg:p-12">
            <h3 className="font-serif text-2xl text-[#FAF8F5] mb-6">
              Payment Methods
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Smartphone, label: "NFC Mobile Pay" },
                { icon: CreditCard, label: "Credit Cards" },
                { icon: CreditCard, label: "Debit Cards" },
                { icon: Smartphone, label: "Digital Wallets" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[#FAF8F5]/10 rounded-xl p-4"
                >
                  <item.icon className="w-5 h-5 text-[#C4A77D]" />
                  <span className="text-[#FAF8F5] text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
