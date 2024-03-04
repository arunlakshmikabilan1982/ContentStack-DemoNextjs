import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function DropdownItem() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [open, setOpen]: any = useState(false);

  function DropdownItem(props: any) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.leftIcon && (
          <span className="icon-button"> {props.leftIcon} </span>
        )}
        <p className=" p-2 m-3"> {props.children}</p>
        {props.rightIcon && (
          <span className="icon-button"> {props.rightIcon} </span>
        )}
      </a>
    );
  }

  return (
    <div className="Logindropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem goToMenu="Login">
            <a href="#" className="border p-2 menu-item m-5">
              <span className=" m-4">Login</span>
            </a>
          </DropdownItem>

          <DropdownItem goToMenu="Register">
            <a href="#" className="border p-2 menu-item m-5">
              <span className=" m-3">Register</span>
            </a>
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Login"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Back</DropdownItem>
          <LoginForm />
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "Register"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Home</DropdownItem>
          <RegisterForm />
        </div>
      </CSSTransition>
    </div>
  );
}
