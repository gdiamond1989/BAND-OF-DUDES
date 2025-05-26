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
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#
