import banner from "../../resource/banner1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userActions } from "../../store/user.js";
import { fetchData } from "../../function.js";
import Loading from "../UI/Loading";
import classes from "./AuthFrom.module.css";
function AuthForm(props) {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const fd = new FormData(e.target);
    const dataSubmit = Object.fromEntries(fd.entries());

    try {
      const res = await fetchData(`auth/${props.type}`, "POST", dataSubmit);
      if (res.status === 201) return navigate("/login");
      const dataR = await res.json();
      console.log(dataR);
      if (res.status === 200) {
        dispatch(userActions.login(dataR));
        return navigate("/");
      }
      if (dataR.message) {
        setLoading(false);
        return setMsg(dataR.message);
      }
      throw new Error();
    } catch (err) {
      setLoading(false);
      setMsg(`Can not ${props.type} now, try later!`);
    }
  };

  return (
    <div
      className={classes.authForm}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <form className={classes.form} onSubmit={handleSubmit}>
        <h3>
          {props.type === "signup" ? "Sign up" : "Sign in"}
          {msg && <span className={classes.message}>{msg}</span>}
          {loading && (
            <div className={classes.load}>
              <Loading text={props.type} size="sm" />
            </div>
          )}
        </h3>
        <ul>
          {props.type === "signup" && (
            <li>
              <input placeholder="Full Name" type="text" name="name" required />
            </li>
          )}
          <li>
            <input placeholder="Email" type="email" name="email" required />
          </li>
          <li>
            <input
              placeholder="Password"
              type="password"
              name="password"
              minLength={6}
              required
            />
          </li>
          {props.type === "signup" && (
            <li>
              <input
                placeholder="Phone"
                type="text"
                name="phone"
                minLength={10}
                required
              />
            </li>
          )}
        </ul>
        <button>{props.type === "signup" ? "SIGN UP" : "SIGN IN"}</button>

        {props.type === "signup" && (
          <p>
            Login?
            <Link to="/login"> Click</Link>
          </p>
        )}
        {props.type === "login" && (
          <p>
            Create an account?
            <Link to="/register"> Sign up</Link>
          </p>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
