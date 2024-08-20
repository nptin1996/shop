import Spinner from "react-bootstrap/Spinner";

function Loading({ text = "Loading", size = "md" }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner
        animation="border"
        variant="secondary"
        className="me-2"
        size={size}
      />
      <h6 className="text-secondary m-0">{text}...</h6>
    </div>
  );
}

export default Loading;
