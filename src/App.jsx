import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layoute/main-layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Shop } from "./pages/shop/shop";
import { ShopSingle } from "./pages/shopsingle/shopSingle";
import { Notfound } from "./layoute/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/:id" element={<ShopSingle />} />
        {/* <Route path="shop/shopsingle/:id" element={<ShopSingle />} /> */}
        <Route path="pages" element={<Notfound />} />
        <Route path="progect" element={<Notfound />} />
        <Route path="news" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
