import Header from "../../components/Header";

function DefaultLayout({ children }) {
  function handleMoveOnTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  handleMoveOnTop();

  return (
    <div>
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
