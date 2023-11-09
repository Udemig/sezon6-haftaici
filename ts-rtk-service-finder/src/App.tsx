import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import NotFound from "./pages/not-found";

function App() {
  /* Eğer bir JSX elemanının ilk harfi küçükse bu eleman DOM'a aittir. Kendi yazdığımız
  veya third party kütüphanelerden aldığımız componentlerin hepsinin ilk harfinin büyük
  olma zorunluluğu vardır. */

  return (
    <>
      <div className="container py-3">
        <Header />

        <Routes>
          <Route index element={<MainPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
