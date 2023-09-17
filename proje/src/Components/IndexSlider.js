import logo from "../Image/istanbulPsikolojiLogo.png";
import mainPhoto from "../Image/mainFoto.PNG";
import egitimTakvimi from "../Image/egitimTakvimi.PNG";
import onlineTest from "../Image/onlineTest.PNG";
import salesPage from "../Image/salesPage.PNG";
import ciftTerapisi from "../Image/ciftTerapisi.PNG";
import oyunTerapisi from "../Image/oyunTerapisi.PNG";
import travmaTerapisi from "../Image/travmaTerapisi.PNG";
import deneyimselOyunTerapisi from "../Image/deneyimselOyunTerapisi.PNG";
import covid19 from "../Image/covid19.PNG";
function IndexSlider() {
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
        <img className="mx-auto mb-4" src={logo} alt="Logo" />
        <div className="flex flex-wrap justify-center">
          <a href="/services" className="btn btn-light m-2">
            HİZMETLERİMİZ
          </a>
          <a href="/articles" className="btn btn-light m-2">
            MAKALELER
          </a>
          <a href="/about" className="btn btn-light m-2">
            HAKKIMIZDA
          </a>
          <a href="/calendar" className="btn btn-light m-2">
            EĞİTİM TAKVİMİ
          </a>
          <a href="/contact" className="btn btn-light m-2">
            İLETİŞİM
          </a>
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
        <div class="bg-[#EC9D36] p-8 pb-0">
          <div class="flex justify-center flex-wrap space-x-16 ">
            <p class="bg-amber-800 rounded-3xl w-auto text-black p-4 text-center px-8 mb-4 flex-1 md:flex-none md:mb-0">
              GELECEK EĞİTİMLERİMİZ
            </p>
            <p class="bg-emerald-400 rounded-3xl w-auto text-gray-50 p-4 text-center px-8 mb-4 flex-1 md:flex-none md:mb-0">
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
          <div class="flex items-center justify-center pt-3 flex-col">
            <p class="bg-amber-800 rounded-3xl w-auto text-white p-2 text-center px-8 mb-2">
              TARİH SEÇİNİZ Ağustos 2022
            </p>
            <div class="flex items-center justify-center w-16 bg-white">
              <span class="text-[#EC9D36] text-xl font-bold"> &lt; &gt; </span>
            </div>
          </div>
        </div>
        <div class=" text-center  bg-[#65266C] py-2 ">
          <a class="text-white bg-[#833A8A] py-2 px-52">ÇİFT VE EVLİLİK</a>
        </div>
        <div className="flex ">
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
        </div>
        <div class=" text-center  bg-[#0061A6] py-2 ">
          <a class="text-white bg-[#009CE0] py-2 px-52">ÇİFT VE EVLİLİK</a>
        </div>
        <div className="flex ">
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
        </div>
        <div class=" text-center  bg-red-400 py-2 ">
          <a class="text-white bg-red-300 py-2 px-52">ÇİFT VE EVLİLİK</a>
        </div>
        <div className="flex ">
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
        </div>
        <div class=" text-center  bg-cyan-500 py-2 ">
          <a class="text-white bg-cyan-300 py-2 px-52">ÇİFT VE EVLİLİK</a>
        </div>
        <div className="flex ">
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
        </div>
        <div class=" text-center  bg-amber-500 py-2 ">
          <a class="text-white bg-amber-300 py-2 px-52">ÇİFT VE EVLİLİK</a>
        </div>
        <div className="flex ">
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
          <img
            className="mx-auto flex-grow w-full"
            src={covid19}
            alt="covid19"
          />
        </div>
      </main>
    </section>
  );
}

export default IndexSlider;
