import { Link } from "react-router";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-linear-to-b from-[#D9CEFF] to-[#F3EFFF]">
      <div
        className="
          w-full max-w-md sm:max-w-2xl
          px-6 sm:px-10 py-8 sm:py-10
          rounded-3xl
          bg-[#E7E0FF]/20  /* Softer tinted color */
          backdrop-blur-xl
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          flex flex-col
          items-center
          text-center
          wrap-break-words
          padauk-bold

        ">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-relaxed text-gray-900 drop-shadow-sm">
          “မျိုးဆက်သစ် အင်ဂျင်နီယာ မောင်မယ်များအား
          <br />
          နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)
          <br />
          <span className="font-bold text-[#6B4CFF] drop-shadow-sm">
            သုတနည်းပညာဌာနမှ
          </span>
          <br />
          လှိုက်လှဲစွာ ကြိုဆိုပါ၏”
        </h1>
      </div>

      <Link
        to="/quiz"
        className="mt-8 px-8 py-3 font-medium bg-linear-to-r from-[#7B5BFF] to-[#A88BFF] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
        Start Quiz
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
