import star from "./star.jpg";
import flower from "./flower.jpg";
export function Objectfit() {
  return (
    <>
      <div className="flex justify-center gap-2">
        <div>
          <p>Object-fit:fill</p>
          <div className="w-32 h-60 bg-emerald-500">
            <img src={star} className="w-full h-full object-fill"></img>
          </div>
        </div>
        <div>
          <p>Object-fit:cover</p>
          <div className="w-32 h-60 bg-emerald-500">
            <img src={star} className="w-full h-full object-cover"></img>
          </div>
        </div>
        <div>
          <p>Object-fit:contain</p>
          <div className="w-32 h-60 bg-emerald-500">
            <img src={star} className="w-full h-full object-contain"></img>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center gap-2">
        <div>
          <p>Object-fit:fill</p>
          <div className="w-64 h-40 bg-emerald-500">
            <img src={flower} className="w-full h-full object-fill"></img>
          </div>
        </div>
        <div>
          <p>Object-fit:cover</p>
          <div className="w-64 h-40 bg-emerald-500">
            <img src={flower} className="w-full h-full object-cover"></img>
          </div>
        </div>
        <div>
          <p>Object-fit:contain</p>
          <div className="w-64 h-40 bg-emerald-500">
            <img src={flower} className="w-full h-full object-contain"></img>
          </div>
        </div>
      </div>
    </>
  );
}
