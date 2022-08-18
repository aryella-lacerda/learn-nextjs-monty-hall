import type { NextPage } from "next";
import { Door } from "../components/door";

const Home: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Door number={1} isSelected />
      <Door number={2} isSelected={false} />
    </div>
  );
};

export default Home;
