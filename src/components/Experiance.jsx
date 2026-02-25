export const dynamic = "force-static"

import { Armchair, Coffee, Star, Car, Truck } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-[#C4A77D] tracking-widest uppercase mb-4">
            The Experience
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#2C1A14] mb-6">
            Your Sanctuary Awaits
          </h2>
          <p className="text-lg text-[#2C1A14]/70 max-w-2xl mx-auto">
            Haven Spot is the ideal sanctuary for deep work, university students, or solo dining. 
            Step into a world where time slows down.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: 'Quiet & Cosy', 
              desc: 'Intimate spaces designed for focus and reflection',
              icon: Armchair 
            },
            { 
              title: 'Trendy Atmosphere', 
              desc: 'Contemporary aesthetics with warm, inviting tones',
              icon: Coffee 
            },
            { 
              title: 'Upmarket Service', 
              desc: 'Premium hospitality from the moment you arrive',
              icon: Star 
            }
          ].map((item) => (
            <div 
              key={item.title}
              className="group bg-[#F0EBE4] rounded-3xl p-8 hover:bg-[#2C1A14] transition-all duration-500 cursor-default"
            >
              <div className="w-16 h-16 bg-[#C4A77D] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAF8F5] transition-colors duration-500">
                <item.icon className="w-8 h-8 text-[#FAF8F5] group-hover:text-[#2C1A14] transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2C1A14] mb-3 group-hover:text-[#FAF8F5] transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-[#2C1A14]/70 group-hover:text-[#FAF8F5]/80 transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#2C1A14] rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Car, title: 'Drive-through', desc: 'Quick & convenient ordering' },
              { icon: Truck, title: 'No-contact Delivery', desc: 'Safe, seamless service to you' },
              { icon: Armchair, title: 'Outdoor Seating', desc: 'Al fresco under the sky' }
            ].map((service) => (
              <div key={service.title} className="flex items-start gap-4 text-[#FAF8F5]">
                <div className="w-12 h-12 bg-[#C4A77D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-[#C4A77D]" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{service.title}</h4>
                  <p className="text-[#FAF8F5]/60 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
