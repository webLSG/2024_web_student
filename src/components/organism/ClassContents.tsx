import { Slider } from "@mui/material";

const ClassContents = () => {
  return (
    <div className="w-96 h-fit p-5 bg-slate-100">
      <div className="my-3 flex justify-between items-end">
        <div className="font-black text-2xl">수업명</div>
        <div className="text-sm">50%</div>
      </div>
      <Slider disabled defaultValue={50} aria-label="수업횟수" />
    </div>
  );
};

export default ClassContents;
