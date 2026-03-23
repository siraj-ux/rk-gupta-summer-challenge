import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  BookOpen,
  Sun,
} from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick?: () => void;
}

export const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  // --- DYNAMIC DATA FETCHING ---
  const [sheetData, setSheetData] = useState({
    date: '24 March', // Fallback
    time: '7:00 PM – 8:30 PM', // Fallback
  });

  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNbThNq5PaLsO8hgj4EIb5CTjMp8-kOOI9jpi18eTL-p9v5vh-QeOSOeqaozauJOAy2fs5mOQIhk4G/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        if (rows.length > 1) {
          const values = rows[1].split(',');
          setSheetData({
            date: values[0]?.trim() || '24 March',
            time: values[1]?.trim() || '7:00 PM – 8:30 PM',
          });
        }
      })
      .catch((err) => console.error('CSV fetch error in FinalCTA:', err));
  }, []);

  const scrollToForm = () => {
    if (onCTAClick) {
      onCTAClick();
      return;
    }
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-black text-white overflow-hidden">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* HEADING */}
          <h2 className="text-xl md:text-4xl font-bold mb-5 leading-tight tracking-tight px-2">
            90-Minute Summer Crypto Challenge: 
            <span className="block md:inline-block md:ml-2 text-[#00a8e8]">
              Seekho Aur Kamao — Sirf ₹9 Mein
            </span>
          </h2>

          {/* BODY */}
          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            4,000+ log yeh summer challenge le chuke hain. Seekha. Samjha. Kamana shuru kiya. Ab yeh summer challenge aapka hai.
          </p>

          {/* CTA CARD */}
          <div className="bg-white rounded-2xl p-5 md:p-10 shadow-2xl text-[#00171f] border-t-4 border-[#00a8e8] mx-auto">
            
            {/* SESSION DETAILS */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#00a8e8] shrink-0" />
                <span className="text-sm md:text-base font-bold text-[#003459]">
                  {sheetData.date}
                </span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#00a8e8] shrink-0" />
                <span className="text-sm md:text-base font-bold text-[#003459]">
                  {sheetData.time}
                </span>
              </div>
            </div>

            {/* TRUST LINE */}
            <p className="text-xs md:text-base text-gray-500 italic mb-6 px-2">
              "90-minute summer challenge lo. ₹9 lagao. Crypto ka earning framework le jao."
            </p>

            {/* CTA BUTTON */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="group w-full md:w-auto h-auto bg-[#00a8e8] hover:bg-[#003459] text-[#00171f] hover:text-white font-bold px-4 py-4 md:px-12 md:py-4 rounded-xl transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-sm sm:text-base md:text-xl font-black whitespace-normal md:whitespace-nowrap">
                    Join the Summer Challenge @ ₹9
                  </span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Button>
            </div>

            {/* URGENCY & TRUST */}
            <div className="mt-8">
              <p className="text-[11px] md:text-sm font-semibold text-[#003459] mb-6">
                Seats are limited to keep the session interactive. 
                <span className="block text-[#00a8e8] mt-1 uppercase tracking-wider text-[9px] md:text-[10px]">Registration closes once full</span>
              </p>
              
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-2 opacity-50">
                <BadgeItem icon={<ShieldCheck className="h-3 w-3 md:h-4 md:w-4" />} label="Live" />
                <BadgeItem icon={<BookOpen className="h-3 w-3 md:h-4 md:w-4" />} label="Hindi" />
                <BadgeItem icon={<Sun className="h-3 w-3 md:h-4 md:w-4" />} label="Summer" />
                <BadgeItem icon={<ShieldCheck className="h-3 w-3 md:h-4 md:w-4" />} label="Educational" />
                <BadgeItem icon={<BookOpen className="h-3 w-3 md:h-4 md:w-4" />} label="Structured" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const BadgeItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center justify-center gap-1.5">
    {icon}
    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
      {label}
    </span>
  </div>
);