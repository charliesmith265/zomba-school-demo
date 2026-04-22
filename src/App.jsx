import logo from './assets/logo.png'
import heroImage from './assets/hero.jpg'
import gallery1 from './assets/gallery1.jpg'
import gallery2 from './assets/gallery2.jpg'
import gallery3 from './assets/gallery3.jpg'
import gallery4 from './assets/gallery4.jpg'

export default function App() {
  const features = [
    'Christian-centered learning environment',
    'Qualified and caring teachers',
    'Strong academic foundation',
    'Safe and supportive school community',
  ];

  const programs = [
    {
      title: 'Nursery Section',
      text: 'A nurturing start focused on play, discovery, and early childhood development.',
    },
    {
      title: 'Primary Section',
      text: 'Strong academic preparation with attention to discipline, values, and confidence building.',
    },
    {
      title: 'Admissions',
      text: 'Simple and guided admissions process for parents seeking quality education in Zomba.',
    },
  ];

  const notices = [
    'Admissions for 2026 are now open.',
    'Parents are welcome to contact the school for enrollment guidance.',
    'School programs are designed to support both academic and character growth.',
  ];

  const gallery = [gallery1, gallery2, gallery3, gallery4];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Zomba Baptist Private Schools logo"
              className="h-12 w-12 rounded-xl object-cover shadow"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Zomba Baptist Private Schools
              </h1>
              <p className="text-sm text-slate-500">
                Quality education for a brighter future
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#programs" className="hover:text-blue-700">Programs</a>
            <a href="#gallery" className="hover:text-blue-700">Gallery</a>
            <a href="#admissions" className="hover:text-blue-700">Admissions</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            Contact Us
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-sky-700/75" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              Admissions Open for 2026
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Nurturing young minds for a bright future
            </h2>

            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Zomba Baptist Private Schools provides a strong learning environment that supports academic excellence,
              discipline, and Christian values for children in Zomba, Malawi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-900 shadow-lg transition hover:scale-[1.02]"
              >
                Enroll Now
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Why parents choose us
              </p>
              <div className="mt-4 grid gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl bg-white/10 px-4 py-3 text-sm md:text-base"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">About the school</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              A school committed to quality and character
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              This demo website presents how Zomba Baptist Private Schools can professionally showcase its mission,
              academic environment, admissions information, and communication channels for parents and guardians.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The goal is to create a trusted digital presence that makes it easy for families to understand the school,
              inquire, and begin the enrollment process.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <p className="text-4xl font-extrabold text-blue-700">2026</p>
              <p className="mt-2 text-base font-medium text-slate-700">
                Admissions campaign highlighted clearly for parents
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <p className="text-4xl font-extrabold text-blue-700">2</p>
              <p className="mt-2 text-base font-medium text-slate-700">
                Main sections featured: Nursery and Primary
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 md:col-span-2">
              <p className="text-lg font-semibold text-slate-900">Professional impression</p>
              <p className="mt-2 text-slate-600">
                A modern website helps the school present itself with credibility to current and prospective parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Programs</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              School sections and opportunities
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Gallery</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              School life and learning environment
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A professional school website should visually show the environment, students, and school activities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200"
              >
                <img
                  src={image}
                  alt={`School gallery ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Admissions</p>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">Admission open for 2026</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Parents and guardians can contact the school for enrollment information, school visits, and fee guidance.
                This section can be expanded with application forms, downloadable requirements, and notices.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Parent full name"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-blue-600 sm:col-span-2"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-blue-600 sm:col-span-2"
                />
              </div>

              <button className="mt-6 rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                Send Inquiry
              </button>
            </div>

            <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-lg">
              <h4 className="text-2xl font-bold">School notices</h4>
              <div className="mt-6 space-y-4">
                {notices.map((notice) => (
                  <div key={notice} className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-blue-100">
                    {notice}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">Fee guide</p>
                <div className="mt-4 space-y-3 text-sm text-blue-100">
                  <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                    <span>Nursery</span>
                    <span>K132,000</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                    <span>Primary</span>
                    <span>K142,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Contact</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Get in touch with the school
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              This section can display the official phone numbers, email address, map location, and direct messaging
              channels for the school.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <div className="space-y-5 text-slate-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Location</p>
                <p className="mt-1 text-lg font-medium">Zomba City, behind Standard Bank Branch, Malawi</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</p>
                <p className="mt-1 text-lg font-medium">zombabaptistpvt@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</p>
                <p className="mt-1 text-lg font-medium">+265 999 800 178 / +265 888 510 998</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600">
                This is a professional demo website concept prepared to show how the school can present itself online.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Zomba Baptist Private Schools logo"
                className="h-12 w-12 rounded-xl object-cover shadow"
              />
              <div>
                <h4 className="text-lg font-bold text-white">Zomba Baptist Private Schools</h4>
                <p className="text-sm text-slate-400">Quality education for a brighter future</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A professional school website concept designed to present the school clearly,
              build trust with parents, and support admissions.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-white">Quick Links</h5>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#programs" className="hover:text-white">Programs</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#admissions" className="hover:text-white">Admissions</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h5 className="text-base font-semibold text-white">Contact Details</h5>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>Zomba City, behind Standard Bank Branch, Malawi</p>
              <p>zombabaptistpvt@gmail.com</p>
              <p>+265 999 800 178 / +265 888 510 998</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Zomba Baptist Private Schools Demo.</p>
            <p>Designed by BlueBite Tech Innovations</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/265999800178"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
      >
        <span className="text-lg">💬</span>
        WhatsApp Us
      </a>
    </div>
  );
}