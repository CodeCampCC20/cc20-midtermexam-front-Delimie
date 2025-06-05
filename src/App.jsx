import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={2000}
      />
      <AppRouter />
    </>
  );
}

export default App;
