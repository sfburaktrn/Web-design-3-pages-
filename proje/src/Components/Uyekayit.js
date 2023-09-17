import React from "react";

import logo from "../Image/istanbulPsikolojiLogo.png";
import egitimTakvimi from "../Image/egitimTakvimi.PNG";
import onlineTest from "../Image/onlineTest.PNG";
import salesPage from "../Image/salesPage.PNG";
import ciftTerapisi from "../Image/ciftTerapisi.PNG";
import oyunTerapisi from "../Image/oyunTerapisi.PNG";
import travmaTerapisi from "../Image/travmaTerapisi.PNG";
import deneyimselOyunTerapisi from "../Image/deneyimselOyunTerapisi.PNG";
import covid19 from "../Image/covid19.PNG";
import footerLogo2 from "../Image/footerLogo2.PNG";
import twitterIcon from "../Image/twitterIcon.PNG";
import facebookIcon from "../Image/facebookIcon.PNG";
import instagramIcon from "../Image/instagramIcon.PNG";

function Uyekayit() {
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
        <div class="bg-blue-500 h-3 mt-6"></div>
      </header>

      <div className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">ÜYE OLUN</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Adınız
          </label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-gray-800">
            Soyadınız
          </label>
          <input type="tel" id="phone" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            E-posta Adresiniz
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sifreniz" className="block mb-2 text-gray-800">
            Şifreniz
            <span className="text-sm text-gray-500">
              (*Minimum 6 karakter*En az bir harf*En az bir rakam)
            </span>
          </label>
          <input
            type="password"
            id="sifreniz"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="option1" className="mr-2" />
            <label className="mt-5" htmlFor="option1">
              Psikoloji İstanbul tarafıma ticari elektronik ileti göndermesi
              için <span className="font-bold">burada</span> da belirtilenlere
              iznim vardır
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="option2" className="mr-2" />
            <label htmlFor="option2">
              <span className="font-bold">Üyelik sözleşmesi'</span>ni
              okudum,onaylıyorum.
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="option3" className="mr-2" />
            <label className="mt-5" htmlFor="option3">
              <span className="font-bold">
                Psikoloji İstanbul Üyeliği Aydınlatma Metni'
              </span>
              ni okudum,anladım.
            </label>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none">
          Üye Ol
        </button>
        <div className="flex justify-center mt-2">
          <p className="mr-2">Hesabınız var mı?</p>
          <p className="text-red-500 underline">Giriş Yapın</p>
        </div>
      </div>

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
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
        </div>

        <div className=" text-center  bg-[#0061A6] py-2 ">
          <a className="text-white bg-[#009CE0] py-2  sm:px-10 lg:px-52">
            ÇİFT VE EVLİLİK
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
        </div>
        <div className=" text-center  bg-red-400 py-2 ">
          <a className="text-white bg-red-300 py-2  sm:px-10 lg:px-52">
            ÇİFT VE EVLİLİK
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
        </div>
        <div className=" text-center  bg-cyan-500 py-2 ">
          <a className="text-white bg-cyan-300 py-2  sm:px-10 lg:px-52">
            ÇİFT VE EVLİLİK
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
        </div>
        <div className=" text-center  bg-amber-500 py-2 ">
          <a className="text-white bg-amber-300 py-2  sm:px-10 lg:px-52">
            ÇİFT VE EVLİLİK
          </a>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
          <div className="flex-1">
            <img className="mx-auto w-full" src={covid19} alt="covid19" />
          </div>
        </div>
      </main>
      <footer className="bg-[#414042] flex pb-12  ">
        <div className="flex-1 ml-12 mt-8">
          <img
            className="self-center mb-4"
            src={footerLogo2}
            alt="footerLogo2"
          />
          <p>Valikonağı Caddesi Sezai Selek Sk.</p>
          <p>No:20 D:5 Nişantaşı / İstanbul</p>
          <p>0212 233 28 38</p>
          <p>bilgi@psikolojistanbul.com</p>
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
            <div className="flex flex-row">
              <form className="mt-4 ">
                <div className="flex">
                  <p>AD Soyad</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-3" />
                </div>
                <div className="flex">
                  <p>TELEFON</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-5" />
                </div>
                <div className="flex">
                  <p>E-MAIL</p>
                  <input className="border-t-0 border-l-0 border-r-0 border-b border-white bg-[#414042] ml-8" />
                </div>
              </form>
              <button
                type="submit"
                className="bg-[#73A3BA] text-[#414042] mt-6 ml-10 w-28  md:self-center"
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

export default Uyekayit;
