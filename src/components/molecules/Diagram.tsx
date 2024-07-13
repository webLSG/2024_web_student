import { CSSProperties } from "react";
import ClassName from "../atom/ClassName";
import BeginDate from "../atom/BeginDate";
import BeginTime from "../atom/BeginTime";
import RestNum from "../atom/RestNum";

const Diagram = () => {
  const style: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
  };
  return (
    <div style={style}>
      <ClassName />
      <BeginDate />
      <RestNum num={16} />
      <BeginTime />
    </div>
  );
};
export default Diagram;
