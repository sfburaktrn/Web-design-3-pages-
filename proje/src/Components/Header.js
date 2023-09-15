import logo from "../Image/istanbulPsikolojiLogo.png";
import mainPhoto from "../Image/mainFoto.PNG";
import egitimTakvimi from "../Image/egitimTakvimi.PNG";
import onlineTest from "../Image/onlineTest.PNG";
import salesPage from "../Image/salesPage.PNG";
import ciftTerapisi from "../Image/ciftTerapisi.PNG";
import oyunTerapisi from "../Image/oyunTerapisi.PNG";
import travmaTerapisi from "../Image/travmaTerapisi.PNG";
import deneyimselOyunTerapisi from "../Image/deneyimselOyunTerapisi.PNG";

function Header() {
  return (
    <section className="h-screen flex flex-col">
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
      <img
        className="mt-5 mx-auto flex-grow w-full"
        src={mainPhoto}
        alt="mainPhoto"
      />
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
      <div class="bg-[#EC9D36] p-8">
        <div class="flex justify-center flex-wrap space-x-16 ">
          <p class="bg-amber-800 rounded-3xl w-auto text-black p-4 text-center mb-4 flex-1 md:flex-none md:mb-0">
            GELECEK EĞİTİMLERİMİZ
          </p>
          <p class="bg-emerald-400 rounded-3xl w-auto text-gray-50 p-4 text-center mb-4 flex-1 md:flex-none md:mb-0">
            ÖNCEKİ EĞİTİMLERİMİZ
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center pt-3">
          <img className="mx-auto mb-2 md:mx-1" src={travmaTerapisi} />
          <img className="mx-auto mb-2 md:mx-1" src={oyunTerapisi} />
          <img className="mx-auto mb-2 md:mx-1" src={deneyimselOyunTerapisi} />
          <img className="mx-auto mb-2 md:mx-1" src={ciftTerapisi} />
        </div>
      </div>
    </section>
  );
}

export default Header;
