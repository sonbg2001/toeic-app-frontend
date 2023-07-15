import DefaultLayout from "./components/layouts/DefaultLayout";
import { publicRoutes } from "./components/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles/GlobalStyle.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout ?? DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
