import React, { useState, type JSX } from "react";
import Container from "../../commonComponent/Container";
import {
  reddit,
  youtube,
  instagram,
  pinterest,
  facebook,
  twitter,
} from "../../../helpers/IconsProvider";

const TopNav = () => {
  const [topNav] = useState<Array[JSX.Element]>([
    reddit,
    youtube,
    instagram,
    pinterest,
    facebook,
    twitter,
  ]);
  return (
    <div className="bg-secondary-700 py-5!">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <h1 className="body-small-400 text-gray-00">
            Welcome to Clicon online eCommerce store.{" "}
          </h1>
        </div>

        <div className="body-small-400 text-gray-00">Follow Us</div>
      </Container>
    </div>
  );
};

export default TopNav;
