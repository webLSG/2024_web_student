type TRestNum = {
  num: number;
};
const RestNum = ({ num = 8 }: TRestNum) => {
  return <div>{num}</div>;
};

export default RestNum;
