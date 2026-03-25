import React from 'react';

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: 'Cutting-Edge Curriculum',
      description:
        'Regularly updated syllabus featuring Large Language Models (LLMs), Generative AI, and Quantum Computing fundamentals.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      title: 'Supercomputing NVIDIA COE',
      description:
        'Direct access to high-performance NVIDIA DGX stations for training complex deep learning models.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      title: 'Industry Connect',
      description:
        'Strong ties with companies like Amazon, Microsoft, and specialized AI startups for mentorship and placements.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'Global & Industry Exposure',
      description:
        'International exchange programs and hackathons that expose students to global tech standards.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Department's
            </span>
            {' '}Highlights
          </h2>
          
          <div className="flex justify-center w-full mb-8 relative">
             <div className="w-5 h-[2px] bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-[20px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="shrink-0 w-32 h-32 md:w-[130px] md:h-[130px] overflow-hidden rounded-[16px] shadow-sm">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center h-full pt-1 sm:pt-2">
                <h3 className="text-xl md:text-[22px] font-bold text-[#0f172a] mb-3 leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-[#475569] text-[15px] leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-28 text-center space-y-6">
          <h3 className="text-[28px] font-bold text-[#0f172a]">
            Why Choose Our Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '4+',
                label: 'Years of Excellence',
              },
              {
                number: '100+',
                label: 'Industry Partners',
              },
              {
                number: '95%',
                label: 'Placement Rate',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-[20px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <p
                  className="text-5xl font-extrabold mb-3"
                  style={{ color: '#F26520' }}
                >
                  {stat.number}
                </p>
                <p className="text-[#0f172a] text-lg font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
