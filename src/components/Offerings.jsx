export const dynamic = "force-static"

import { Moon, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Offerings() {
  return (
    <section id="offerings" className="py-24 lg:py-32 bg-[#F0EBE4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block text-sm font-medium text-[#C4A77D] tracking-widest uppercase mb-4">
              Our Menu
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#2C1A14]">
              Signature Offerings
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#2C1A14] text-[#FAF8F5] rounded-full">
            <Moon className="w-4 h-4 text-[#C4A77D]" />
            <span className="text-sm font-medium">
              Late-night food available
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80"
                alt="Egg Brioche - Chef Meddie's Signature"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority={false}
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#C4A77D]/10 text-[#C4A77D] text-xs font-medium rounded-full">
                  Chef's Choice
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2C1A14] mb-2">
                Breakfast
              </h3>
              <p className="text-[#2C1A14]/70 mb-4">
                Chef Meddie's signature Egg Brioche—a perfect balance of fluffy
                pastry and rich, creamy egg.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#C4A77D]">$12</span>
                <button className="text-sm font-medium text-[#2C1A14] hover:text-[#C4A77D] transition-colors flex items-center gap-1">
                  View Menu <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className=" relative aspect-4/3 overflow-hidden">
              <div className="aspect-4/3 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80"
                  alt="Egg Brioche - Chef Meddie's Signature"
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={false} 
                />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-medium text-[#2C1A14] mb-2">
                Brunch
              </h3>
              <p className="text-[#2C1A14]/70 mb-4">
                Midday delights crafted for leisurely afternoons—avocado toasts,
                artisan sandwiches, and more.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#C4A77D]">$18</span>
                <button className="text-sm font-medium text-[#2C1A14] hover:text-[#C4A77D] transition-colors flex items-center gap-1">
                  View Menu <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className=" relative aspect-4/3 overflow-hidden">
              <div className="aspect-4/3 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80"
                  alt="Egg Brioche - Chef Meddie's Signature"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={false}
                />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#2C1A14] text-[#FAF8F5] text-xs font-medium rounded-full">
                  Signature
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2C1A14] mb-2">
                Specialty Coffee
              </h3>
              <p className="text-[#2C1A14]/70 mb-4">
                Our refined Piccolo blends paired with caramel-hinted desserts
                for the perfect afternoon.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-[#C4A77D]">$8</span>
                <button className="text-sm font-medium text-[#2C1A14] hover:text-[#C4A77D] transition-colors flex items-center gap-1">
                  View Menu <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
