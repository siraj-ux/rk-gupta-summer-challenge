import {
  Layers,
  AlignLeft,
  Brain,
  ShieldCheck,
} from 'lucide-react';

export const WorkshopLearningSection = () => {
  return (
    <section className="py-8 md:py-24 bg-white text-[#00171f]">
      <div className="container max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-science font-bold mb-4">
            Yeh Summer Challenge Aapke Liye Hai Agar
          </h2>

          <p className="text-md md:text-lg text-[#00171f]/80 leading-relaxed">
            Yeh 90-minute summer challenge un logon ke liye design kiya gaya hai jo 
            crypto ko <span className="font-semibold text-[#007ea7]">depth aur clarity</span> ke saath seekhna chahte hain.
          </p>
        </div>

        {/* CONTENT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <Layers className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-[#00171f]">
                Surface Level Se Aage Jaana Chahte Ho
              </h3>
              <p className="text-sm text-[#00171f]/80 leading-relaxed">
                Aap sirf definitions nahi, balki concepts ke peeche ka logic samajhna chahte ho. Yeh challenge wahi depth dega.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <AlignLeft className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-[#00171f]">
                Structured Challenge Prefer Karte Ho
              </h3>
              <p className="text-sm text-[#00171f]/80 leading-relaxed">
                Aapko step-by-step flow chahiye, random information nahi. Is challenge mein har step structured hai.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <Brain className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-[#00171f]">
                Calm Aur Practical Challenge Chahte Ho
              </h3>
              <p className="text-sm text-[#00171f]/80 leading-relaxed">
                Aap learning ko pressure-free aur realistic tareeke se lena pasand karte ho. Yeh challenge exactly wahi hai.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-2xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <ShieldCheck className="h-7 w-7 text-[#007ea7] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-[#00171f]">
                Hype Aur Confusion Se Door Rehna Chahte Ho
              </h3>
              <p className="text-sm text-[#00171f]/80 leading-relaxed">
                Aapko claims, noise aur shortcuts se zyada clarity aur process chahiye. Is challenge mein sirf wahi milega.
              </p>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-12 max-w-3xl mx-auto text-center border-t border-gray-100 pt-8">
          <p className="text-lg md:text-xl text-[#00171f]/90 leading-relaxed">
            Yeh challenge un logon ke liye hai jo
            <span className="font-bold text-[#007ea7]"> samajh ke seekhna aur kamana </span> 
            chahte hain, na ki shortcuts, hype ya guarantees ke liye.
          </p>
        </div>

      </div>
    </section>
  );
};