function ErrorMessage({
  message = "Tải dữ liệu không thành công, vui lòng thử lại sau!",
}) {
  return (
    <div style={{ height: "40vh", padding: "1rem" }}>
      <p style={{ textAlign: "center" }} className="m-0">
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;
