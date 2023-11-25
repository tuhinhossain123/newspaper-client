import gaza from "../../assets/gaza.jpg";
import tea from "../../assets/tea.jpg";
const GazaNews = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 max-w-[1200px] mx-auto mb-16 px-5 md:px-0">
      <div className=" w-full md:w-[70%]  flex flex-col-reverse md:flex-row justify-evenly gap-2">
        <div className="w-full md:w-[50%]  py-3">
          <h2 className="text-2xl font-bold mb-3">
            As First Hostages Are Welcomed Home, Plans for a Second Release Move
            Ahead
          </h2>
          <p className="text-lg font-medium mb-3">
            Gaza remained quiet as the cease-fire with Israel held and 24
            hostages were freed
          </p>
          <p className="text-lg font-medium mb-2">
            Prime Minister Benjamin Netanyahu's offices said the Israel military
            received a list of hostages to be released on saturday.
          </p>
          <p className="mb-4 text-sm">7 MIN READ</p>
          <hr className=" border-1 border-b-2 mb-3" />
          <h2 className="text-2xl font-bold mb-3">
            In West Bank, Cheers and Worries After Prisoners Are Released
          </h2>
          <p className="text-lg font-medium mb-2">
            Families that waited for the release of people detained by Israel
            said the conflict and the rising death toll had cast a pall over any
            celebration.
          </p>
          <p className="text-sm">6 MIN READ</p>
        </div>
        <div className="w-full md:w-[50%]">
          <img src={gaza} alt="" className="w-full h-full object-cover" />
          <p className="text-xs text-right mt-1">
            Tuhin Hossain For The Bangladesh Team
          </p>
        </div>
      </div>
      <div className="w-full md:w-[30%] md:border-l-2 md:pl-4 pl-0 border-l-0">
        <h2 className="text-2xl font-bold mb-3">
          Tea, a Train and an Epic Sunrise at a Summer Retreat of the Raj
        </h2>
        <p className="text-lg font-medium mb-1">
          Darjeeling is famous for its tea estates, elevated railroad and view
          of dawn breaking over Mt. Everest. A writer took a dream visit.
        </p>
        <p className="text-sm mb-5">15 MIN READ</p>
        <img src={tea} alt="" />
        <p className="text-xs text-right mt-1">
          Tuhin Hossain For The Bangladesh Team
        </p>

      </div>
    </div>
  );
};

export default GazaNews;
