
import React, { useEffect } from "react";
const bandLogo = "https://i.imgur.com/u3A0ALt.png";

export default function BandOfDudesLanding() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".intersect-fade-in, .intersect-slide-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#123524] text-white font-sans">
      <header className="relative w-full h-[400px] bg-gradient-to-b from-[#0e2a21] to-[#123524] flex items-center justify-center p-6">
        <img
          src={bandLogo}
          alt="Band of Dudes Logo"
          className="object-contain max-h-[120%] max-w-[120%] drop-shadow-xl"
        />
      </header>

      <main className="py-16 px-4 max-w-4xl mx-auto">
        <section className="mb-16 bg-gradient-to-b from-[#1b3a32] to-[#1f4037] py-12 px-6 rounded-2xl shadow-lg intersect-fade-in">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFC107" }}>
            When did manhood become a minefield?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Drifting through life without clear direction</li>
            <li>Feeling isolated — even with people around</li>
            <li>Wrestling with big questions but no space to ask them</li>
            <li>Trying to lead, provide, and stay strong — but burning out inside</li>
            <li>Longing for deeper friendships that go beyond surface-level banter</li>
          </ul>
          <p className="mt-6 font-semibold text-xl">
            Dudes shouldn't have to figure out <span style={{ color: "#FFC107" }}>their shit</span> alone.
          </p>
        </section>

        <section className="mb-16 text-center bg-gradient-to-b from-[#2D2D2D] to-[#1b1b1b] py-12 px-6 rounded-2xl shadow-lg intersect-slide-up">
          <h2 className="text-3xl font-bold mb-4">Here's the play</h2>
          <p className="text-lg text-gray-300 mb-6 mx-auto max-w-2xl leading-relaxed">
            A Band of Dudes membership gets you access to <span style={{ color: "#FFC107" }}>exclusive community, content, and conversations</span> — to get real with yourself, with the dudes who’ve got your back.
          </p>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-xl hover:bg-gray-200 transition">
            Join the Band
          </button>
        </section>

        <section className="mb-16 bg-gradient-to-b from-[#1b3a32] to-[#1f4037] py-12 px-6 rounded-2xl shadow-lg intersect-fade-in">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#FFC107' }}>The Dude Perks</h2>

          <h3 className="text-2xl font-bold mt-6 mb-2">👥 Community → <span className="text-base italic text-gray-400">Private Discord</span></h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Gaming, grilling, or golfing — find your dudes</li>
            <li>Flex your wins and share your hobbies</li>
            <li>Weekly challenges where dudes get better together</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-2">📚 Content → <span className="text-base italic text-gray-400">Weekly Podcast</span></h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>New drop every week on the shit dudes care about</li>
            <li>Not church. Not therapy. Just real, helpful conversations</li>
            <li>Access to mentors and guest experts</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-2">💬 Conversations → <span className="text-base italic text-gray-400">Live Streams</span></h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Live feedback on personal challenges</li>
            <li>Not school. No tests. Just shooting the shit</li>
            <li>Challenge or clarify with instant feedback</li>
          </ul>
        </section>

        <section className="text-center bg-[#2D2D2D] py-10 px-4 rounded-xl intersect-slide-up">
          <h2 className="text-3xl font-bold mb-4">This is for you if…</h2>
          <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">You’re tired of shallow friendships. You’ve got real goals —<br />and want convos that cut through the noise.</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">You don’t need another podcast. You need a crew. A challenge. A calling.</p>
          <button className="mt-6 bg-white text-black font-bold py-3 px-6 rounded-2xl shadow-xl hover:bg-gray-200 transition">
            Join the Band Now
          </button>
        </section>
      </main>

      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Band of Dudes. All rights reserved.</p>
        <p className="mt-2">Brotherhood without the B.S.</p>
      </footer>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .intersect-fade-in {
            opacity: 0;
            transition: opacity 0.6s ease;
          }

          .intersect-slide-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .in-view.intersect-fade-in {
            opacity: 1;
            animation: fade-in 0.8s ease-in forwards;
          }

          .in-view.intersect-slide-up {
            opacity: 1;
            transform: translateY(0);
            animation: slide-up 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
