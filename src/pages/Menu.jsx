import React from "react";
import { MenuList, PastaList, DesertList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="menu">
      <h1 className="menuTitle">Pizza</h1>
      <motion.div
        ref={carousel}
        className="coursel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-coursel"
        >
          <div class Name="menu">
            <motion.div className="item">
              <div className="menuList">
                {MenuList.map((menuItem, key) => {
                  return (
                    <MenuItem
                      key={key}
                      image={menuItem.image}
                      name={menuItem.name}
                      price={menuItem.price}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <h1 className="menuTitle">Pasta</h1>
      <motion.div
        ref={carousel}
        className="coursel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-coursel"
        >
          <div class Name="menu">
            <motion.div className="item">
              <div className="menuList">
                {PastaList.map((pastaItem, key) => {
                  return (
                    <MenuItem
                      key={key}
                      image={pastaItem.image}
                      name={pastaItem.name}
                      price={pastaItem.price}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <h1 className="menuTitle">Desserts</h1>
      <motion.div
        ref={carousel}
        className="coursel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-coursel"
        >
          <div class Name="menu">
            <motion.div className="item">
              <div className="menuList">
                {DesertList.map((dessertItem, key) => {
                  return (
                    <MenuItem
                      key={key}
                      image={dessertItem.image}
                      name={dessertItem.name}
                      price={dessertItem.price}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    // <div className="menu">
    //   <h1 className="menuTitle">Our Menu</h1>
    //   <div className="menuList">
    //     {MenuList.map((menuItem, key) => {
    //       return (
    //         <MenuItem
    //           key={key}
    //           image={menuItem.image}
    //           name={menuItem.name}
    //           price={menuItem.price}
    //         />
    //       );
    //     })}
    //   </div>

    //   <div className="menuList">
    //     {PastaList.map((pastaItem, key) => {
    //       return (
    //         <MenuItem
    //           key={key}
    //           image={pastaItem.image}
    //           name={pastaItem.name}
    //           price={pastaItem.price}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Menu;
