function Information({ className, text1, text2 = "Free shipping worlwide" }) {
  return (
    <div className={className}>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}
export default Information;
