export const dynamic = "force-static"

import { Star, Armchair, Accessibility, ParkingCircle } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-24 lg:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-[#C4A77D] tracking-widest uppercase mb-4">
            The Haven Community
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#2C1A14] mb-6">
            Loved by Locals
          </h2>
          <p className="text-lg text-[#2C1A14]/70 max-w-2xl mx-auto">
            Hear what our community has to say about their Haven Spot experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'R R',
              role: 'Local Guide',
              content: 'Haven Spot has become my go-to workspace. The quiet atmosphere, incredible coffee, and that signature Egg Brioche make it the perfect sanctuary for focused work.',
              rating: 5
            },
            {
              name: 'Afraa',
              role: 'Local Guide',
              content: 'Finally found a place that understands late-night dining. Their Piccolo is exceptional, and the service is always warm and welcoming. A true gem in the city.',
              rating: 5
            },
            {
              name: 'Mohamed',
              role: 'Local Guide',
              content: 'The attention to detail here is unmatched. From the thoughtfully designed space to the perfectly crafted drinks—every visit feels like a special experience.',
              rating: 5
            }
          ].map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-[#F0EBE4] rounded-3xl p-8 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-[#2C1A14]/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2C1A14] rounded-full flex items-center justify-center text-[#FAF8F5] font-serif text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[#2C1A14]">{testimonial.name}</p>
                  <p className="text-sm text-[#2C1A14]/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#2C1A14] rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl text-[#FAF8F5] mb-3">Full Accessibility</h3>
              <p className="text-[#FAF8F5]/70">
                Haven Spot is committed to being accessible to everyone.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Armchair, label: 'Wheelchair Seating' },
                { icon: Accessibility, label: 'Accessible Entrance' },
                { icon: ParkingCircle, label: 'Accessible Parking' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[#FAF8F5]">
                  <div className="w-12 h-12 bg-[#C4A77D]/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#C4A77D]" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
