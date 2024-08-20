function FooterItem(props) {
  return (
    <>
      <h5>{props.title}</h5>
      <ul>
        {props.data.map((ele, i) => (
          <li key={i}>{ele}</li>
        ))}
      </ul>
    </>
  );
}

export default FooterItem;
