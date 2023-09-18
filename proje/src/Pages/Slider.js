import React from "react";

import logo from "../Image/istanbulPsikolojiLogo.png";
import mainPhoto from "../Image/mainFoto.PNG";
import egitimTakvimi from "../Image/egitimTakvimi.PNG";
import onlineTest from "../Image/onlineTest.PNG";
import salesPage from "../Image/salesPage.PNG";
import ciftTerapisi from "../Image/ciftTerapisi.PNG";
import oyunTerapisi from "../Image/oyunTerapisi.PNG";
import travmaTerapisi from "../Image/travmaTerapisi.PNG";
import deneyimselOyunTerapisi from "../Image/deneyimselOyunTerapisi.PNG";
import footerLogo2 from "../Image/footerLogo2.PNG";
import twitterIcon from "../Image/twitterIcon.PNG";
import facebookIcon from "../Image/facebookIcon.PNG";
import instagramIcon from "../Image/instagramIcon.PNG";
import ce1 from "../Image/heroPhoto/ce1.PNG";
import ce2 from "../Image/heroPhoto/ce2.png";
import ce3 from "../Image/heroPhoto/ce3.png";
import ce4 from "../Image/heroPhoto/ce4.png";
import ce5 from "../Image/heroPhoto/ce5.png";
import y1 from "../Image/heroPhoto/y1.png";
import y2 from "../Image/heroPhoto/y2.png";
import y3 from "../Image/heroPhoto/y3.png";
import y4 from "../Image/heroPhoto/y4.png";
import y5 from "../Image/heroPhoto/y5.png";
import co1 from "../Image/heroPhoto/co1.png";
import co2 from "../Image/heroPhoto/co2.png";
import co3 from "../Image/heroPhoto/co3.png";
import co4 from "../Image/heroPhoto/co4.png";
import co5 from "../Image/heroPhoto/co5.png";
import k1 from "../Image/heroPhoto/k1.png";
import k2 from "../Image/heroPhoto/k2.png";
import k3 from "../Image/heroPhoto/k3.png";
import k4 from "../Image/heroPhoto/k4.png";
import k5 from "../Image/heroPhoto/k5.png";
import p1 from "../Image/heroPhoto/p1.png";
import p2 from "../Image/heroPhoto/p2.png";
import p3 from "../Image/heroPhoto/p3.png";
import p4 from "../Image/heroPhoto/p4.png";
import p5 from "../Image/heroPhoto/p5.png";

function Slider() {
  return (
    <section className="h-screen flex flex-col">
      <header>
        <div className="flex justify-end mr-4 mt-3">
          <a href="register.html" className="btn btn-primary">
            Üye OL
          </a>
          <div className="border-r border-black h-6 mx-2"></div>
          <a href="login.html" className="btn btn-primary">
            Giriş Yap
          </a>
          <div className="border-r border-black h-6 mx-2"></div>
          <a href="online-certificates.html" className="btn btn-primary">
            Online Sertifika Al
          </a>
        </div>
        <img className="mx-auto mb-4 w-auto" src={logo} alt="Logo" />

        <div className="flex flex-wrap  justify-center  ">
          <a href="/services" className=" ml-auto m-5 text-xl font-semibold ">
            HİZMETLERİMİZ
          </a>
          <a href="/articles" className=" m-5 text-xl font-semibold">
            MAKALELER
          </a>
          <a href="/about" className=" m-5 text-xl font-semibold">
            HAKKIMIZDA
          </a>
          <a href="/calendar" className=" m-5 text-xl font-semibold">
            EĞİTİM TAKVİMİ
          </a>
          <a href="/contact" className=" m-5 text-xl font-semibold">
            İLETİŞİM
          </a>
          <div className="mx-16">
            <input
              type="text"
              placeholder="Search"
              className="  h-8 border-collapse w-72  bg-gray-300 rounded-2xl "
            />
          </div>
        </div>
      </header>

      <img
        className="mt-5 mx-auto flex-grow w-full"
        src={mainPhoto}
        alt="mainPhoto"
      />
      <main>
        <div className="bg-zinc-700 p-4">
          <div className="flex flex-col md:flex-row md:justify-center">
            <img
              className="mx-auto mb-2 md:mx-4"
              src={salesPage}
              alt="Sales Page"
            />
            <img
              className="mx-auto mb-2 md:mx-4"
              src={egitimTakvimi}
              alt="Eğitim Takvimi"
            />
            <img
              className="mx-auto mb-2 md:mx-4"
              src={onlineTest}
              alt="Online Test"
            />
          </div>
        </div>
        <div className="bg-[#EC9D36] p-8 pb-0">
          <div className="flex justify-center flex-wrap space-x-16 ">
            <p className="bg-amber-800 rounded-3xl w-auto text-black p-4 text-center px-8 mb-4 flex-1 md:flex-none md:mb-0">
              GELECEK EĞİTİMLERİMİZ
            </p>
            <p className="bg-emerald-400 rounded-3xl w-auto text-gray-50 p-4 text-center px-8 mb-4 flex-1 md:flex-none md:mb-0">
              ÖNCEKİ EĞİTİMLERİMİZ
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center pt-3">
            <img className="mx-auto mb-2 md:mx-1" src={travmaTerapisi} />
            <img className="mx-auto mb-2 md:mx-1" src={oyunTerapisi} />
            <img
              className="mx-auto mb-2 md:mx-1"
              src={deneyimselOyunTerapisi}
            />
            <img className="mx-auto mb-2 md:mx-1" src={ciftTerapisi} />
          </div>
          <div className="flex items-center justify-center pt-3 flex-col">
            <p className="bg-amber-800 rounded-3xl w-auto text-white p-2 text-center px-8 mb-2">
              TARİH SEÇİNİZ Ağustos 2022
            </p>
            <div className="flex items-center justify-center w-16 bg-white">
              <span className="text-[#EC9D36] text-xl font-bold">
                {" "}
                &lt; &gt;{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#65266C] py-2">
          <a className="text-white bg-[#833A8A] py-2 sm:px-10 lg:px-52">
            ÇİFT VE EVLİLİK
          </a>
        </div>

        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={ce1} alt="ce1" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={ce2} alt="ce2" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={ce3} alt="ce3" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={ce4} alt="ce4" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={ce5} alt="ce5" />
          </div>
        </div>

        <div className=" text-center  bg-[#0061A6] py-2 ">
          <a className="text-white bg-[#009CE0] py-2  sm:px-10 lg:px-56">
            YETİŞKİN
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={y1} alt="y1" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={y2} alt="y2" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={y3} alt="y3" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={y4} alt="y4" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={y5} alt="y5" />
          </div>
        </div>
        <div className=" text-center  bg-red-400 py-2 ">
          <a className="text-white bg-red-300 py-2  sm:px-10 lg:px-48">
            ÇOCUK VE ERGEN
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={co1} alt="co1" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={co2} alt="co2" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={co3} alt="co3" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={co4} alt="co4" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={co5} alt="co5" />
          </div>
        </div>
        <div className=" text-center  bg-cyan-500 py-2 ">
          <a className="text-white bg-cyan-300 py-2  sm:px-10 lg:px-52">
            KİŞİSEL GELİŞİM
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={k1} alt="k1" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={k2} alt="k2" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={k3} alt="k3" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={k4} alt="k4" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={k5} alt="k5" />
          </div>
        </div>
        <div className=" text-center  bg-amber-500 py-2 ">
          <a className="text-white bg-amber-300 py-2  sm:px-10 lg:px-44">
            PSİKOLOJİ ARAŞTIRMALARI
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={p1} alt="p1" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={p2} alt="p2" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={p3} alt="p3" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={p4} alt="p4" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={p5} alt="p5" />
          </div>
        </div>
      </main>
      <footer className="bg-[#414042] lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col  pb-12  ">
        <div className="flex-1 ml-12 mt-8">
          <img
            className="self-center mb-4"
            src={footerLogo2}
            alt="footerLogo2"
          />
          <p className="text-white">Valikonağı Caddesi Sezai Selek Sk.</p>
          <p className="text-white">No:20 D:5 Nişantaşı / İstanbul</p>
          <p className="text-white">0212 233 28 38</p>
          <p className="text-white">bilgi@psikolojistanbul.com</p>
        </div>
        <div className=" h-44  border-r border-gray-400 mt-6  ">
          {/* bu dikey çizgi */}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex">
            <img src={facebookIcon} alt="facebookIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
            <img src={instagramIcon} alt="instagramIcon" />
          </div>
        </div>
        <div className=" h-44  border-r border-gray-400 mt-6  ">
          {/* bu dikey çizgi */}
        </div>
        <div className="flex-1 flex-row ml-12 mt-8">
          <h5 className="text-[#6EC0DE]">
            PSİKOLOJİ İSTANBUL EĞİTİM VE MAKALELERİNDEN
          </h5>
          <h5 className="text-[#6EC0DE]">HABERDAR OLMAK İSTİYORUM.</h5>
          <div className="flex flex-col">
            <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
              <form className="mt-4 ">
                <div className="flex">
                  <p className="text-white font-mono">AD Soyad</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-3" />
                </div>
                <div className="flex">
                  <p className="text-white font-mono">TELEFON</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-5" />
                </div>
                <div className="flex">
                  <p className="text-white font-mono">E-MAIL</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-8" />
                </div>
              </form>
              <button
                type="submit"
                className="bg-[#73A3BA] text-[#414042] mt-6 ml-10 lg:w-28 md:w-auto sm:w-auto "
              >
                GÖNDER
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Slider;
