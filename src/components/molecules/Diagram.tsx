import { CSSProperties } from "react";
import ClassName from "../atom/ClassName";
import BeginDate from "../atom/BeginDate";
import BeginTime from "../atom/BeginTime";
import RestNum from "../atom/RestNum";

const Diagram = () => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div style={style}>
      <ClassName name="aaa" />
      <BeginDate year="2024" month="00" day="00" />
      <RestNum num={9} />
      <BeginTime hours={9} minutes="00" />
    </div>
  );
};
export default Diagram;
