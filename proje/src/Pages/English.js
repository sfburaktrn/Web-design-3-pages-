import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import englishPhoto from "../Image2/englishPhoto.PNG";
import iconEnglish from "../Image2/iconEnglish.PNG";
import englishYoutube from "../Image2/englishYoutube.PNG";
import svgBaslik from "../Svg/baslik.svg";
import svgcomputer from "../Svg/computer.svg";
import svgtakvim from "../Svg/takvim.svg";
import svgkiz from "../Svg/kiz.svg";
import svgtarih from "../Svg/tarih.svg";
import svgkalp from "../Svg/kalp.svg";
import svgkaydetme from "../Svg/kaydetme.svg";
import svggönderme from "../Svg/gönderme.svg";
import search from "../Svg/search.svg";
import layer52 from "../Svg/layer52.svg";
import layer53 from "../Svg/layer53.svg";
import layer54 from "../Svg/layer54.svg";
import layer55 from "../Svg/layer55.svg";
import layer56 from "../Svg/layer56.svg";
import layer57 from "../Svg/layer57.svg";
import layer58 from "../Svg/layer58.svg";
import layer59 from "../Svg/layer59.svg";
import layer60 from "../Svg/layer60.svg";
import layer61 from "../Svg/layer61.svg";
import layer62 from "../Svg/layer62.svg";
import layer63 from "../Svg/layer63.svg";
import layer64 from "../Svg/layer64.svg";
import layer65 from "../Svg/layer65.svg";
import layer66 from "../Svg/layer66.svg";
import layer52copy from "../Svg/layer52copy.svg";
import layer53copy from "../Svg/layer53copy.svg";
import layer54copy from "../Svg/layer54copy.svg";
import layer55copy from "../Svg/layer55copy.svg";
import layer56copy from "../Svg/layer56copy.svg";
import layer57copy from "../Svg/layer57copy.svg";
import layer58copy from "../Svg/layer58copy.svg";
import layer59copy from "../Svg/layer59copy.svg";
import layer60copy from "../Svg/layer60copy.svg";
import layer61copy from "../Svg/layer61copy.svg";
import footerLogo2 from "../Image2/footerLogo2.PNG";
import twitterIcon from "../Image2/twitterIcon.PNG";
import facebookIcon from "../Image2/facebookIcon.PNG";
import instagramIcon from "../Image2/instagramIcon.PNG";

function English() {
  const [isFiltered, setIsFiltered] = useState({
    layer52: true,
    layer53: true,
    layer54: true,
    layer55: true,
    layer56: true,
    layer57: true,
    layer58: true,
    layer59: true,
    layer60: true,
    layer61: true,
    layer62: true,
    layer63: true,
    layer64: true,
    layer65: true,
    layer66: true,
    layer52copy: true,
    layer53copy: true,
    layer54copy: true,
    layer55copy: true,
    layer56copy: true,
    layer57copy: true,
    layer58copy: true,
    layer59copy: true,
    layer60copy: true,
    layer61copy: true,
  });

  const handleMouseEnter = (layer) => {
    setIsFiltered((prevIsFiltered) => ({
      ...prevIsFiltered,
      [layer]: false, // efekt kaldır
    }));
  };

  const handleMouseLeave = (layer) => {
    setIsFiltered((prevIsFiltered) => ({
      ...prevIsFiltered,
      [layer]: true, // efekt geri getir
    }));
  };
  const handleTouchStart = (layer) => {
    setIsFiltered((prevIsFiltered) => ({
      ...prevIsFiltered,
      [layer]: !prevIsFiltered[layer], // mobil için dokunma
    }));
  };
  const handleTouchEnd = (layer) => {
    setIsFiltered((prevIsFiltered) => ({
      ...prevIsFiltered,
      [layer]: true, // mobil için dokunma geri çek
    }));
  };

  return (
    <section className="h-screen w-full  flex flex-col">
      <header>
        <div className="flex lg:justify-end sm:justify-center sm:mt-5 lg:mr-4 lg:mt-5 mb-4 sm:mb-0">
          <a href="register.html" className="btn btn-primary mr-2">
            ÜYE OL
          </a>
          <div className="border-r border-black h-6 mx-2"></div>
          <a href="login.html" className="btn btn-primary mx-2">
            GİRİŞ YAP
          </a>
          <div className="border-r border-black h-6 mx-2"></div>
          <a href="online-certificates.html" className="btn btn-primary ml-2">
            ONLINE SERTİFİKA AL
          </a>
        </div>

        <img className="mx-auto mb-4 w-auto" src={svgBaslik} alt="Logo" />
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-wrap justify-center lg:ml-auto ">
            <a href="/services" className="m-5 text-xl font-semibold">
              HİZMETLERİMİZ
            </a>
            <a href="/articles" className="m-5 text-xl font-semibold">
              MAKALELER
            </a>
            <a href="/about" className="m-5 text-xl font-semibold">
              HAKKIMIZDA
            </a>
            <a href="/calendar" className="m-5 text-xl font-semibold">
              EĞİTİM TAKVİMİ
            </a>
            <a href="/contact" className="m-5 text-xl font-semibold">
              İLETİŞİM
            </a>
          </div>
          <div className="mt-5 lg:ml-auto sm:mt-0">
            <img className="w-64 h-8" src={search} alt="Search" />
          </div>
        </div>
      </header>
      <div className=" text-center  bg-amber-500 flex justify-center items-center ">
        <span className="text-white bg-amber-300 px-8">
          ENGLISH EDUCATION SALES PAGE
        </span>
      </div>
      <div className="lg:border border-amber-500  rounded lg:ml-40 lg:mr-40 md:mr-0 md:ml-0 sm:mr-0 sm:ml-0 md:border-0 sm:border-0 ">
        <div className="flex flex-col items-center justify-center mt-5 mb-5 lg:flex-row md:flex-col sm:flex-col">
          <div className="lg:w-1/3 md:w-full sm:w-full">
            <p className="text-2xl font-bold">ENGLISH FOR BEGINNERS</p>
            <p className="pt-3">Filiz Kaya Ataklı ve Özge Altan Aytun</p>
            <img className="pt-8 mx-auto" src={iconEnglish} alt="iconEnglish" />
          </div>
          <div className="lg:w-1/3 md:w-full sm:w-full">
            <img
              className="mx-auto w-auto"
              src={englishPhoto}
              alt="englishPhoto"
            />
          </div>
          <div className="lg:w-1/3 md:w-full sm:w-full mt-10">
            <p className="lg:text-center md:text-center sm:text-center">
              <span className="font-bold">BEGINNING </span>01 Ekim 09.30
            </p>
            <p className="lg:text-center md:text-center sm:text-center">
              <span className="font-bold">FINISH </span>02 Ekim 18.00
            </p>
            <p className="lg:text-center md:text-center sm:text-center">
              <span className="font-bold">PRICE </span>910 USD
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mr-36 lg:ml-40">
        <p className="text-center ml-3">
          It's a scary time. We are in the midst of a worldwide epidemic, with
          cities and even countries shutting down. Some of us are already in
          areas heavily af- fected by the coronavirus, and we're all watching
          the news and asking. "What next?" we wonder.
        </p>
        <p className=" mt-5 ml-3 text-center">
          For many people, the uncertainty surrounding the coronavirus is the
          hardest thing to experience right now. We don't know exactly how we
          will be affect- ed or how bad things might get. And that can make it
          very easy to experience horror and panic.
        </p>
      </div>
      <div className="text-center lg:mt-10">
        <h3 className="text-2xl font-bold">EDUCATIONAL DEMO VIDEO</h3>
      </div>
      <div>
        <img
          className="mx-auto w-auto lg:items-center sm:items-center md:items-center"
          src={englishYoutube}
          alt="englishYoutube"
        />
        {/*buraya normalde youtube videosu gelecek tasarım için sadece img koydum */}
      </div>
      <div className="lg:w-auto lg:mx-auto md:w-auto md:mx-auto sm:w-auto sm:mx-auto mt-10 p-6 flex flex-col items-center">
        <div className=" mx-auto p-4 bg-white rounded-md border border-gray-300 lg:flex lg:flex-row items-center md:flex md:flex-col sm:flex sm:flex-col">
          <div className="lg:w-auto md:w-auto sm:w-auto pr-6">
            <h2 className="text-base font-bold mb-4">Kredi Kartı </h2>

            <div className="mb-4  flex items-center">
              <label
                htmlFor="cardName"
                className="block mb-1 text-gray-800 lg:mr-2 sm:mr-0"
              >
                Kart Üzerindeki İsim
              </label>
              <input
                type="text"
                id="cardName"
                className="lg:w-96 md:w-auto sm:w-auto p-2 border rounded"
                placeholder="Kart Üzerindeki İsim"
              />
            </div>

            <div className="mb-4 flex items-center">
              <label
                htmlFor="cardNumber"
                className="block mb-1 text-gray-800 lg:mr-2 sm:mr-0"
              >
                Kart Numarası
              </label>
              <input
                type="text"
                id="cardNumber"
                className="lg:w-96 md:w-auto sm:w-auto ml-10 p-2 border rounded"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>

            <div className="mb-4 flex items-center">
              <label
                htmlFor="expiry"
                className="block mb-1 text-gray-800 lg:mr-2 sm:mr-0"
              >
                Son Kullanma Tarihi
              </label>
              <input
                type="text"
                id="expiry"
                className="lg:w-96 md:w-auto sm:w-auto p-2 border rounded"
                placeholder="MM/YY"
              />
            </div>

            <div className="mb-4 flex items-center">
              <label
                htmlFor="cvc"
                className="block mb-1 text-gray-800lg:mr-2 sm:mr-0"
              >
                Güvenlik Kodu
              </label>
              <input
                type="text"
                id="cvc"
                className="lg:w-96  md:w-auto sm:w-auto lg:ml-8 md:ml-0 sm:ml-0  p-2 border rounded"
                placeholder="CVC"
              />
            </div>

            <div className="mb-4 flex items-center">
              <label
                htmlFor="paymentMethod"
                className="block mb-1 text-gray-800 lg:mr-2 sm:mr-0"
              >
                Ödeme Yöntemi
              </label>
              <select
                id="paymentMethod"
                className="lg:w-96  md:w-auto sm:w-auto lg:ml-6 md:ml-0 sm:ml-0 p-2 border rounded"
                defaultValue="tekCekim"
              >
                <option value="tekCekim">Tek Çekim</option>
                <option value="taksitli">Taksitli</option>
              </select>
            </div>
          </div>

          <div className=" pl-6 flex flex-col justify-center">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="option1" className="mr-2 h-3 w-3" />
                <label className="mt-1" htmlFor="option1">
                  GOTTMAN DOUBLE THERAPY LEVEL 1 EDUCATION
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="option2" className="mr-2 h-3 w-3" />
                <label htmlFor="option2">
                  GOTTMAN DOUBLE THERAPY LEVEL 2 EDUCATION
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="option3" className="mr-2 h-3 w-3" />
                <label htmlFor="option3">
                  GOTTMAN DOUBLE THERAPY LEVEL 3 EDUCATION
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="option3" className="mr-2 h-3 w-3" />
                <label htmlFor="option3">
                  GOTTMAN DOUBLE THERAPY LEVEL 4 EDUCATION
                </label>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none w-auto">
          Ödemeyi Tamamla
        </button>
      </div>
      <main>
        <div className="bg-zinc-700 p-4">
          <div className="flex justify-center items-center flex-wrap">
            <div className="w-full lg:w-1/3 sm:w-1/2  p-4">
              <div className="flex lg:flex-row sm:flex-col md:flex-row bg-gray-400 justify-between items-center py-4 px-4 h-44">
                <p className="mr-2 text-3xl font-extralight">
                  English Education <br /> Sales Page
                </p>
                <img className="w-32 h-28" src={svgcomputer} alt="computer" />
              </div>
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex lg:flex-row sm:flex-col md:flex-row bg-gray-400 justify-between items-center py-4 px-4 h-44">
                <p className="mr-2 text-3xl font-extralight ">Eğitim Takvimi</p>
                <img className="w-32 h-28" src={svgtakvim} alt="takvim" />
              </div>
            </div>

            <div className="w-full lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative flex lg:flex-row sm:flex-col md:flex-row justify-between items-center py-4  h-44">
                <div className="h-44 lg:w-auto sm:w-120">
                  <img
                    className="h-full w-full object-cover"
                    src={svgkiz}
                    alt="kiz"
                  />
                </div>
                <div className="absolute top-0 left-0 p-4">
                  <p className="mr-2 text-2xl font-extralight">
                    Çoktan
                    <br /> Seçmeli
                    <br /> Online
                    <br /> Testler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EC9D36] h-auto  ">
          <div className="flex flex-row justify-center items-center pt-2 mx-2">
            <span className="bg-amber-800 rounded-3xl w-auto text-black p-4 text-center px-8 mr-8">
              GELECEK EĞİTİMLERİMİZ
            </span>
            <span className="bg-emerald-400 rounded-3xl w-auto text-gray-50 p-4 text-center px-8">
              ÖNCEKİ EĞİTİMLERİMİZ
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center mt-3 ">
            <div className=" lg:w-96 md:w-auto sm:w-auto h-44 flex lg:flex-row sm:flex-col md:flex-col bg-[#F8B6A2] justify-between items-center mx-2   relative ">
              <p className="text-left lg:ml-24 text-white font-thin text-xl">
                Sensorimotor <br /> Travma Terapisi Eğitimi
              </p>
              <div className="absolute right-0 top-0 bottom-0 bg-white flex flex-col justify-center items-end">
                <img className="w-8 h-8 mb-2" src={svgtarih} alt="Image 1" />
                <img className="w-8 h-8 mb-2" src={svgkalp} alt="Image 2" />
                <img className="w-8 h-8 mb-2" src={svgkaydetme} alt="Image 3" />
                <img className="w-8 h-8 mb-2" src={svggönderme} alt="Image 4" />
              </div>
            </div>
            <div className=" lg:w-96 md:w-auto sm:w-auto   flex lg:flex-row sm:flex-col md:flex-col bg-[#40BDB7]  justify-between items-center mx-2 h-44  relative">
              <span className="text-left lg:ml-24  text-white font-thin text-xl ">
                Nilüfer Deveciğil İle <br /> Oyun Terapisinde <br />
                Aile İle Çalışmak
              </span>
              <div className="absolute right-0 top-0 bottom-0 bg-white flex flex-col justify-center items-end">
                <img className="w-8 h-8 mb-2" src={svgtarih} alt="Image 1" />
                <img className="w-8 h-8 mb-2" src={svgkalp} alt="Image 2" />
                <img className="w-8 h-8 mb-2" src={svgkaydetme} alt="Image 3" />
                <img className="w-8 h-8 mb-2" src={svggönderme} alt="Image 4" />
              </div>
            </div>
            <div className=" lg:w-96 md:w-auto sm:w-auto   flex lg:flex-row sm:flex-col md:flex-col bg-[#DC80B7]  justify-between items-center mx-2 h-44  relative">
              <p className="text-left lg:ml-24  text-white font-thin text-xl">
                Online:Deneyimsel <br />
                Oyun Terapisi
                <br /> 1.Düzey Eğitimi
              </p>
              <div className="absolute right-0 top-0 bottom-0 bg-white flex flex-col justify-center items-end">
                <img className="w-8 h-8 mb-2" src={svgtarih} alt="Image 1" />
                <img className="w-8 h-8 mb-2" src={svgkalp} alt="Image 2" />
                <img className="w-8 h-8 mb-2" src={svgkaydetme} alt="Image 3" />
                <img className="w-8 h-8 mb-2" src={svggönderme} alt="Image 4" />
              </div>
            </div>
            <div className=" lg:w-96 md:w-auto sm:w-auto  flex lg:flex-row sm:flex-col md:flex-col bg-[#95B1BE]  justify-between items-center mx-2  h-44  relative">
              <p className="text-left lg:ml-24  text-white font-thin text-xl">
                Gottman
                <br /> Çift Terapisi
                <br /> 1. Düzey Eğitimi
              </p>
              <div className="absolute right-0 top-0 bottom-0 bg-white flex flex-col justify-center items-end">
                <img className="w-8 h-8 mb-2" src={svgtarih} alt="Image 1" />
                <img className="w-8 h-8 mb-2" src={svgkalp} alt="Image 2" />
                <img className="w-8 h-8 mb-2" src={svgkaydetme} alt="Image 3" />
                <img className="w-8 h-8 mb-2" src={svggönderme} alt="Image 4" />
              </div>
            </div>
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
        <div className="text-center bg-[#65266C]  flex justify-center items-center">
          <span className="text-white bg-[#833A8A] px-20 ">
            ÇİFT VE EVLİLİK
          </span>
        </div>

        <div className="flex flex-col  sm:flex-row ">
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer52 && "filter brightness-50 "
            }`}
            onMouseEnter={() => handleMouseEnter("layer52")}
            onMouseLeave={() => handleMouseLeave("layer52")}
            onTouchStart={() => handleTouchStart("layer52")}
            onTouchEnd={() => handleTouchEnd("layer52")}
          >
            <img className="mx-auto w-full" src={layer52} alt="ce1" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Covid19 Sürecinde <br /> Psikolojik Sağlık
                </span>
              </p>
            </div>
          </div>

          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer53 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer53")}
            onMouseLeave={() => handleMouseLeave("layer53")}
            onTouchStart={() => handleTouchStart("layer53")}
            onTouchEnd={() => handleTouchEnd("layer53")}
          >
            <img className="mx-auto w-full" src={layer53} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Anksiyete Bozukluğu <br /> Olanlar İçin Covid Süreci
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer54 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer54")}
            onMouseLeave={() => handleMouseLeave("layer54")}
            onTouchStart={() => handleTouchStart("layer54")}
            onTouchEnd={() => handleTouchEnd("layer54")}
          >
            <img className="mx-auto w-full" src={layer54} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Covid-19 Sürecinin
                  <br /> Psikososyal Yükümlülükleri
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer55 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer55")}
            onMouseLeave={() => handleMouseLeave("layer55")}
            onTouchStart={() => handleTouchStart("layer55")}
            onTouchEnd={() => handleTouchEnd("layer55")}
          >
            <img className="mx-auto w-full" src={layer55} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Depresyonun Beden Dili</span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer56 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer56")}
            onMouseLeave={() => handleMouseLeave("layer56")}
            onTouchStart={() => handleTouchStart("layer56")}
            onTouchEnd={() => handleTouchEnd("layer56")}
          >
            <img className="mx-auto w-full" src={layer56} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">İlişkilerde Beklentiler</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center  bg-[#0061A6] flex justify-center items-center ">
          <span className="text-white bg-[#009CE0]   px-24">YETİŞKİN</span>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer57 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer57")}
            onMouseLeave={() => handleMouseLeave("layer57")}
            onTouchStart={() => handleTouchStart("layer57")}
            onTouchEnd={() => handleTouchEnd("layer57")}
          >
            <img className="mx-auto w-full" src={layer57} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Erkekler Ağlamaz</span>
              </p>
            </div>
          </div>

          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer58 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer58")}
            onMouseLeave={() => handleMouseLeave("layer58")}
            onTouchStart={() => handleTouchStart("layer58")}
            onTouchEnd={() => handleTouchEnd("layer58")}
          >
            <img className="mx-auto w-full" src={layer58} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Erkekler İçin Daha İyi Bir <br /> Eş Olmanın Üç Adımı
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer60 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer60")}
            onMouseLeave={() => handleMouseLeave("layer60")}
            onTouchStart={() => handleTouchStart("layer60")}
            onTouchEnd={() => handleTouchEnd("layer60")}
          >
            <img className="mx-auto w-full" src={layer60} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Duygularını Tanı
                  <br /> İfade Et,Kazan
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer61 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer61")}
            onMouseLeave={() => handleMouseLeave("layer61")}
            onTouchStart={() => handleTouchStart("layer61")}
            onTouchEnd={() => handleTouchEnd("layer61")}
          >
            <img className="mx-auto w-full" src={layer61} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Yetişkinlerde Dikkat
                  <br /> Eksikliği'nde Koçluk Desteği
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer59 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer59")}
            onMouseLeave={() => handleMouseLeave("layer59")}
            onTouchStart={() => handleTouchStart("layer59")}
            onTouchEnd={() => handleTouchEnd("layer59")}
          >
            <img className="mx-auto w-full" src={layer59} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Suçluluk Hakkında <br /> Bilmediğiniz 10 Şey
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center  bg-red-400 flex justify-center items-center">
          <span className="text-white bg-red-300   px-16">ÇOCUK VE ERGEN</span>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer62 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer62")}
            onMouseLeave={() => handleMouseLeave("layer62")}
            onTouchStart={() => handleTouchStart("layer62")}
            onTouchEnd={() => handleTouchEnd("layer62")}
          >
            <img className="mx-auto w-full" src={layer62} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  İnsanın Akış Hali:
                  <br /> Muhteşem Deneyim
                </span>
              </p>
            </div>
          </div>

          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer65 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer65")}
            onMouseLeave={() => handleMouseLeave("layer65")}
            onTouchStart={() => handleTouchStart("layer65")}
            onTouchEnd={() => handleTouchEnd("layer65")}
          >
            <img className="mx-auto w-full" src={layer65} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Yas Kaç Yıl Sürer</span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer63 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer63")}
            onMouseLeave={() => handleMouseLeave("layer63")}
            onTouchStart={() => handleTouchStart("layer63")}
            onTouchEnd={() => handleTouchEnd("layer63")}
          >
            <img className="mx-auto w-full" src={layer63} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Kalp Mi Aşık Olur,
                  <br /> Yoksa Beyin Mi?
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer64 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer64")}
            onMouseLeave={() => handleMouseLeave("layer64")}
            onTouchStart={() => handleTouchStart("layer64")}
            onTouchEnd={() => handleTouchEnd("layer64")}
          >
            <img className="mx-auto w-full" src={layer64} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Aşk Ve Beynimiz</span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer66 && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer66")}
            onMouseLeave={() => handleMouseLeave("layer66")}
            onTouchStart={() => handleTouchStart("layer66")}
            onTouchEnd={() => handleTouchEnd("layer66")}
          >
            <img className="mx-auto w-full" src={layer66} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Depresyon İle Mücadele</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center  bg-cyan-500 flex justify-center items-center ">
          <span className="text-white bg-cyan-300  px-16">KİŞİSEL GELİŞİM</span>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer52copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer52copy")}
            onMouseLeave={() => handleMouseLeave("layer52copy")}
            onTouchStart={() => handleTouchStart("layer52copy")}
            onTouchEnd={() => handleTouchEnd("layer52copy")}
          >
            <img className="mx-auto w-full" src={layer52copy} alt="ce1" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Covid19 Sürecinde <br /> Psikolojik Sağlık
                </span>
              </p>
            </div>
          </div>

          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer53copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer53copy")}
            onMouseLeave={() => handleMouseLeave("layer53copy")}
            onTouchStart={() => handleTouchStart("layer53copy")}
            onTouchEnd={() => handleTouchEnd("layer53copy")}
          >
            <img className="mx-auto w-full" src={layer53copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Anksiyete Bozukluğu <br /> Olanlar İçin Covid Süreci
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer54copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer54copy")}
            onMouseLeave={() => handleMouseLeave("layer54copy")}
            onTouchStart={() => handleTouchStart("layer54copy")}
            onTouchEnd={() => handleTouchEnd("layer54copy")}
          >
            <img className="mx-auto w-full" src={layer54copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Covid-19 Sürecinin
                  <br /> Psikososyal Yükümlülükleri
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer55copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer55copy")}
            onMouseLeave={() => handleMouseLeave("layer55copy")}
            onTouchStart={() => handleTouchStart("layer55copy")}
            onTouchEnd={() => handleTouchEnd("layer55copy")}
          >
            <img className="mx-auto w-full" src={layer55copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Depresyonun Beden Dili</span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer56copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer56copy")}
            onMouseLeave={() => handleMouseLeave("layer56copy")}
            onTouchStart={() => handleTouchStart("layer56copy")}
            onTouchEnd={() => handleTouchEnd("layer56copy")}
          >
            <img className="mx-auto w-full" src={layer56copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">İlişkilerde Beklentiler</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center  bg-amber-500 flex justify-center items-center ">
          <span className="text-white bg-amber-300 px-8">
            PSİKOLOJİ ARAŞTIRMALARI
          </span>
        </div>
        <div className="flex flex-col  sm:flex-row">
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer57copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer57copy")}
            onMouseLeave={() => handleMouseLeave("layer57copy")}
            onTouchStart={() => handleTouchStart("layer57copy")}
            onTouchEnd={() => handleTouchEnd("layer57copy")}
          >
            <img className="mx-auto w-full" src={layer57copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">Erkekler Ağlamaz</span>
              </p>
            </div>
          </div>

          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer58copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer58copy")}
            onMouseLeave={() => handleMouseLeave("layer58copy")}
            onTouchStart={() => handleTouchStart("layer58copy")}
            onTouchEnd={() => handleTouchEnd("layer58copy")}
          >
            <img className="mx-auto w-full" src={layer58copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Erkekler İçin Daha İyi Bir <br /> Eş Olmanın Üç Adımı
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer60copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer60copy")}
            onMouseLeave={() => handleMouseLeave("layer60copy")}
            onTouchStart={() => handleTouchStart("layer60copy")}
            onTouchEnd={() => handleTouchEnd("layer60copy")}
          >
            <img className="mx-auto w-full" src={layer60copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Duygularını Tanı
                  <br /> İfade Et,Kazan
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer61copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer61copy")}
            onMouseLeave={() => handleMouseLeave("layer61copy")}
            onTouchStart={() => handleTouchStart("layer61copy")}
            onTouchEnd={() => handleTouchEnd("layer61copy")}
          >
            <img className="mx-auto w-full" src={layer61copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Yetişkinlerde Dikkat
                  <br /> Eksikliği'nde Koçluk Desteği
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 relative cursor-pointer ${
              isFiltered.layer59copy && "filter brightness-50"
            }`}
            onMouseEnter={() => handleMouseEnter("layer59copy")}
            onMouseLeave={() => handleMouseLeave("layer59copy")}
            onTouchStart={() => handleTouchStart("layer59copy")}
            onTouchEnd={() => handleTouchEnd("layer59copy")}
          >
            <img className="mx-auto w-full" src={layer59copy} alt="ce1" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center items-center">
              <p className="text-white text-base font-extralight">
                <span className="p-2">
                  Suçluluk Hakkında <br /> Bilmediğiniz 10 Şey
                </span>
              </p>
            </div>
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

export default English;
