const stats = [
  {
    number: "25+",
    label: "Programmes Delivered",
  },
  {
    number: "50,000+",
    label: "Lives Reached",
  },
  {
    number: "15+",
    label: "Countries Engaged",
  },
  {
    number: "100+",
    label: "Youth Leaders Mentored",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-white/10 rounded-2xl p-8 hover:border-yellow-400 transition duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-black text-yellow-400">
                {stat.number}
              </h2>

              <p className="mt-4 text-zinc-400 uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}