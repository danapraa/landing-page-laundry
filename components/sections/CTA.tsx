"use client";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-neutral">
      <div className="container mx-auto max-w-7xl">
        <div className="relative bg-gradient-to-br from-accent to-emerald-700 rounded-4xl lg:rounded-5xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-16">
            {/* Illustration */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="w-48 h-48 lg:w-64 lg:h-64 relative">
                {/* Simple thinking person illustration */}
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Body */}
                  <circle cx="100" cy="70" r="30" fill="white" opacity="0.9"/>
                  {/* Face */}
                  <circle cx="90" cy="67" r="3" fill="#2D7A4F"/>
                  <circle cx="110" cy="67" r="3" fill="#2D7A4F"/>
                  {/* Smile */}
                  <path d="M90 80 Q100 90 110 80" stroke="#2D7A4F" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  {/* Torso */}
                  <path d="M75 100 Q100 95 125 100 L130 150 L70 150 Z" fill="white" opacity="0.85"/>
                  {/* Arms */}
                  <path d="M75 110 L50 130" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
                  <path d="M125 110 L150 130 L160 120" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
                  {/* Legs */}
                  <path d="M82 148 L78 185" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
                  <path d="M118 148 L122 185" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.85"/>
                  {/* Feet */}
                  <ellipse cx="74" cy="187" rx="12" ry="6" fill="white" opacity="0.7"/>
                  <ellipse cx="126" cy="187" rx="12" ry="6" fill="white" opacity="0.7"/>
                  {/* Thought bubble */}
                  <circle cx="140" cy="45" r="5" fill="white" opacity="0.5"/>
                  <circle cx="152" cy="32" r="7" fill="white" opacity="0.6"/>
                  <circle cx="163" cy="18" r="10" fill="white" opacity="0.7"/>
                  {/* Question mark in bubble */}
                  <text x="159" y="23" fontSize="12" fill="#2D7A4F" fontWeight="bold" fontFamily="sans-serif">?</text>
                  {/* Laundry basket nearby */}
                  <rect x="20" y="148" width="40" height="30" rx="5" fill="white" opacity="0.3"/>
                  <path d="M20 155 L60 155" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M28 148 L24 140 M40 148 L40 138 M52 148 L56 140" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
            </div>

            {/* Text & CTA */}
            <div className="flex-1 text-center lg:text-start">
              <h2 className="font-outfit font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
                Masih bingung pilih paket yang tepat?
              </h2>
              <p className="font-inter text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto lg:mx-0">
                Tim kami siap membantu Anda memilih layanan yang paling sesuai dengan kebutuhan dan budget. Chat sekarang, respons cepat!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Kios%20Laundry%2C%20saya%20ingin%20konsultasi%20paket%20laundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full font-outfit font-semibold text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Konsultasi via WhatsApp
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-outfit font-semibold text-sm text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  Lihat Semua Paket
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                {[
                  { icon: "✓", text: "Tanpa biaya tersembunyi" },
                  { icon: "✓", text: "Garansi kepuasan" },
                  { icon: "✓", text: "Proses aman & higienis" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-white/80">
                    <span className="text-white font-bold text-sm">{badge.icon}</span>
                    <span className="font-inter text-xs">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
