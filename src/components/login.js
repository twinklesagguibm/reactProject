import React from "react";
import { useForm } from "react-hook-form";
import store from "../store/store";
import { loginAction } from "../store/action";
import "bootstrap-4-grid/css/grid.min.css";

export default function Login(props) {
  const { register, handleSubmit, errors, setError } = useForm();
  // const [isLogin, setIsLogin] = useState(false);

  //console.log("check status",props);
  const onSubmit = async (data) => {
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:4000/login", requestOptions);
    try {
      const result = await response.json();
      if (result.isUserAuthenticated) {
        store.dispatch(loginAction({ isLogin: true, userName: data.name }));
      }
      // props.onLogin({isLogin: true, userName: data.name, id: result.custmoerId});
      else {
        setError("message", "notMatch", "Invalid credentials");
      }
    } catch (e) {
      console.error("Error", e);
    }
  };
  console.log(errors);

  return (
    //onSubmit ={handleSubmit(onSubmit)}
    <>
      <div className="bootstrap-wrapper">
        <div className="app-container container formSTyle">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <p className = "banner">
                React js
              </p>
              <p className="bannerJs">
                iJavascript
              </p>
            </div>
          </div>
          <div class="container-fluid">
            <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <form
                style={{ width: "700px" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  {errors.message && (
                    <p
                      style={{
                        backgroundColor: "aliceblue",
                        padding: "14px 15px",
                      }}
                    >
                      {errors.message.message}
                    </p>
                  )}
                  {errors.name && (
                    <p
                      style={{
                        backgroundColor: "aliceblue",
                        padding: "14px 15px",
                      }}
                    >
                      {errors.name.message}
                    </p>
                  )}
                  {errors.password && (
                    <p
                      style={{
                        backgroundColor: "aliceblue",
                        padding: "14px 15px",
                      }}
                    >
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div class="col-3 bg-success">
                  <p>
                    <label
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#FFF",
                      }}
                    >
                      User ID:
                    </label>
                  </p>
                </div>
                <div class="col-9 bg-warning">
                  <p style={{ marginLeft: "97px", marginTop: "-39px" }}>
                    <input
                      className="inputPadding"
                      type="text"
                      name="name"
                      placeholder="enter name"
                      ref={register({
                        required: "",
                        minLength: { value: 8, message: "Enter correct name" },
                        maxLength: { value: 20, message: "Enter correct name" },
                      })}
                    />
                  </p>
                </div>
                <br />
                <div class="col-3 bg-success">
                  <p>
                    <label
                      style={{
                        fontFamily: "Arial",
                        fontSize: "18px",
                        color: "#FFF",
                      }}
                    >
                      Password:
                    </label>
                  </p>
                </div>
                <div class="col-9 bg-warning">
                  <p style={{ marginLeft: "97px", marginTop: "-39px" }}>
                    <input
                      className="inputPadding"
                      type="password"
                      name="password"
                      placeholder="enter password"
                      ref={register({
                        required: "Enter valid credentials",
                        minLength: { value: 8, message: "TOO SHORT" },
                        maxLength: { value: 20, message: "TOO LONG" },
                      })}
                    />
                  </p>
                </div>

                <br />
                <button type="submit" className="loginButton" >Login</button>
              </form>
                </div>

              
            </div>
          </div>
        </div>
      </div>
      {/* <form  onSubmit ={handleSubmit(onSubmit)}>
            <div>{errors.message && errors.message.message}</div>
            <label>
                UserName:
                <input  type="text" 
                        name="name" 
                        placeholder = "enter name" 
                        ref= {register({minLength : {value:8, message:"valid use name"}, 
                                        maxLength:{value:20, message:"enter valid name"}})}/>
                {errors.name && <p>{errors.name.message}</p>}
            </label>
            <br/>
            <label>
                Password:
                <input  type="password" 
                        name="password" 
                        placeholder = "enter password"
                        ref = {register({required: "PASSWORD REQUIRED", 
                        minLength: {value: 8, message: "TOO SHORT"}, 
                        maxLength :{value : 20, message:"TOO LONG"} })}/>
                    {errors.password && <p>{errors.password.message}</p>}
            </label>
            <br/>
            <input type = "submit" />
        </form> */}
    </>
  );
}
