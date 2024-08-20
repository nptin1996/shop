import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import banner from "../resource/banner1.jpg";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let message = "Some thing wrong.";
  if (error.status === 222) message = error.data.message;
  if (error.status === 404) message = "404. Page Not Found!";
  return (
    <>
      <MainNavigation />
      <Container>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#9899a0",
          }}
        >
          <h2>{message}</h2>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default ErrorPage;
