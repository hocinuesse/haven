export const dynamic = "force-static"

import { MapPin, Star, Moon, Accessibility, ChefHat } from "lucide-react";

export default function Hero(){
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0EBE4] via-[#FAF8F5] to-[#F0EBE4]" />

      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#C4A77D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#2C1A14]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-[#2C1A14] leading-[1.1]">
              Haven Spot
              <span className="block text-[#C4A77D] italic">
                Where Every Sip Finds Its Home
              </span>
            </h1>

            <p className="text-lg text-[#2C1A14]/70 leading-relaxed max-w-xl">
              From Chef Meddie's signature brioche to our refined Piccolo
              blends—experience the perfect contrast for your leisurely
              afternoon at Haven Spot.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="inline-flex items-center gap-2 bg-[#2C1A14] text-[#FAF8F5] px-8 py-4 rounded-full text-base font-medium hover:bg-[#C4A77D] transition-all duration-300"
              >
                Explore Haven Menu
              </button>
              <button
                className="inline-flex items-center gap-2 border-2 border-[#2C1A14]/20 text-[#2C1A14] px-8 py-4 rounded-full text-base font-medium hover:border-[#2C1A14] hover:bg-[#2C1A14] hover:text-[#FAF8F5] transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Find the Spot
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-[#2C1A14]/10">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#C4A77D]" />
                <span className="text-sm font-medium text-[#2C1A14]/80">
                  4.9★ Rating
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#2C1A14]/30" />
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-[#C4A77D]" />
                <span className="text-sm font-medium text-[#2C1A14]/80">
                  Late Night
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#2C1A14]/30" />
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-[#C4A77D]" />
                <span className="text-sm font-medium text-[#2C1A14]/80">
                  Accessible
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2C1A14]/10">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                  alt="Piccolo coffee next to Egg Brioche at Haven Spot"
                  className="w-full h-auto lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A14]/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#FAF8F5] p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#C4A77D] rounded-full flex items-center justify-center">
                    <Star className="w-7 h-7 text-[#FAF8F5]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2C1A14]/60">Customer Rating</p>
                    <p className="font-serif text-xl font-semibold text-[#2C1A14]">
                      4.9★
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#2C1A14] text-[#FAF8F5] px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span className="font-medium">Chef Meddie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
