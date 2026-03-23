import {
  Brain,
  Layers,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const LearningPhilosophySection = () => {
  return (
    <section className="py-8 md:py-24 bg-white text-[#00171f]">
      <div className="container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-4xl font-science font-bold leading-tight">
            Yeh Challenge Easy Aur <span className="text-[#007ea7]">Clear</span> Feel Hona Chahiye, Overload Jaisa Nahi
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-4 items-center">

          {/* LEFT – PHILOSOPHY */}
          <div className="space-y-6">
            <p className="text-md leading-relaxed text-[#00171f]/90">
              Mera approach bilkul simple hai.  
              Main is challenge mein concepts ko <span className="font-semibold">slow, clear aur structured</span>{' '}
              tareeke se samjhata hoon, taaki understanding strong ho aur confusion naturally kam ho.
            </p>

            <p className="text-md leading-relaxed text-[#00171f]/90">
              Yeh challenge un logon ke liye hai jo sirf information nahi,
              balki <span className="font-semibold">sochne ka sahi tareeqa</span> seekhna chahte hain.
            </p>

            {/* TRUST NOTE */}
            <div className="flex items-start gap-3 bg-[#f0f9ff] border border-[#00a8e8]/40 rounded-xl p-4">
              <ShieldCheck className="h-6 w-6 text-[#007ea7] mt-0.5" />
              <p className="text-sm leading-relaxed text-[#00171f]/90">
                Yeh challenge learning aur earning ke liye design kiya gaya hai,
                <span className="font-semibold"> na ki claims, guarantees ya pressure</span> ke liye.
              </p>
            </div>
          </div>

          {/* RIGHT – GOALS (UPDATED PER IMAGE TABLE) */}
          <div className="bg-[#003459] rounded-2xl p-6 md:p-8 border border-[#007ea7]/40 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-[#00a8e8]" />
              Is Challenge Ka Clear Goal:
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  Is challenge mein strategy-focused learning hogi jahan concepts aur frameworks simple language mein samjhaye jayenge
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  Challenge ka structure aisa hai ki step-by-step explanation se overthinking aur misinterpretation reduce ho
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-[#00a8e8] mt-0.5" />
                <span>
                  90 minutes mein ek logical decision-making framework build hoga
                </span>
              </li>
            </ul>

            {/* FOOT NOTE (UPDATED PER IMAGE TABLE) */}
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <Brain className="h-5 w-5 text-[#00a8e8]" />
              <span>
                Yeh challenge clarity dega — structures aur systems se, speed se nahi.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};