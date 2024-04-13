import React, { useState } from "react";
import { logo, menu, close } from "../assets";

import { styles } from "../style";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return <div>nav</div>;
};

export default Navbar;
