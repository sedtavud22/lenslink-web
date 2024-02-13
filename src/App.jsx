import { Slide, ToastContainer } from "react-toastify";
import Router from "./routes";
import useAuth from "./hooks/use-auth";
import Loading from "./components/Loading";

function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) {
    return <Loading />;
  }

  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
