import HeroImage from '../assets/system.jpeg';
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 pt-32">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-accent">HorlaCore</span>
        </h1>

        <p className="text-xl text-soft max-w-lg">
          I am a Full-Stack Developer building modern, scalable and fast
          applications using Html, Css, BootStrap, Tailwindcss, JavaScript, React, Php and Laravel.
        </p>

        <div className="flex gap-5 mt-4">
          <a href="https://wa.me/2349155242973?text=Hi,HorlaCore" target="__blank">
          <button className="px-6 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-[#ff7f26] transition">
            {/* <span className="gap-2 align-center pr-2 justify-center"><ion-icon name="logo-whatsapp"></ion-icon></span> */}
            Hire Me
          </button>
          </a>
          <a href="https://github.com/Gbolahan-12" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark transition">
            View Projects
          </button>
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={HeroImage}
          className="w-72 md:w-96 rounded-2xl shadow-lg border border-accent"
          alt="Profile"
        />
      </div>
    </section>
  );
}
