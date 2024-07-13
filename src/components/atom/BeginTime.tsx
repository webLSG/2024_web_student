type TBeginTime = {
  hours?: number;
  minutes?: number;
};
const BeginTime = ({ hours, minutes }: TBeginTime) => {
  return (
    <div className="flex flex-row">
      {hours}:{minutes}
    </div>
  );
};
export default BeginTime;
