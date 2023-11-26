import wanner from "../../assets/wanner.png";
import golf from "../../assets/golf.png";
import basketball from "../../assets/bascketball.png";
import argentina from "../../assets/argentina.png";

const Sports = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-20 md:border-t-2 md:pt-4 pl-0 border-t-0 border-gray-300">
        <h2 className="text-2xl font-semibold mb-2 px-5 md:px-0">Tody Sports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 md:px-0">
        <div>
          <img src={golf} alt="" />
          <p className="text-indigo-700 mt-3 mb-4">
            Australian PGA Championship
          </p>
          <h2 className="text-xl font-bold mb-2">
            Adam Scott chipped one-handed eating a sausage roll ... but he needs
            a bigger party trick now
          </h2>
          <p className=" font-semibold text-gray-500">
            The former US Masters champion will need a final-day miracle after
            Min Woo Lee took control of the Australian PGA Championship.
          </p>
        </div>
        <div>
          <img src={wanner} alt="" />
          <p className="text-indigo-700 mt-3 mb-4">Australian cricket</p>
          <h2 className="text-xl font-bold mb-2">
            Will Warner get his ‘Steve Waugh moment’ in his final Test summer?
          </h2>
          <p className=" font-semibold text-gray-500">
            David Warner will say goodbye to Test cricket this summer – provided
            he is chosen by the national selectors. Cricket’s free-to-air
            broadcaster hopes he is given that chance.
          </p>
        </div>
        <div>
          <img src={basketball} alt="" />
          <p className="mt-3 mb-4">
            <span className="font-bold">Updated </span>
            <span className="text-indigo-700">NBA</span>
          </p>
          <h2 className="text-xl font-bold mb-2">
            Adam Scott chipped one-handed eating a sausage roll ... but he needs
            a bigger party trick now
          </h2>
          <p className=" font-semibold text-gray-500">
            The former US Masters champion will need a final-day miracle after
            Min Woo Lee took control of the Australian PGA Championship.
          </p>
        </div>
        <div>
          <img src={argentina} alt="" />
          <p className="text-indigo-700 mt-3 mb-4">
            FIFA official page
          </p>
          <h2 className="text-xl font-bold mb-2">
          Argentina beat Brazil again as the 'Little Devil' pulls strings
          </h2>
          <p className=" font-semibold text-gray-500">
          The Albicelestes, who are yet to taste the ultimate glory in the competition, won 3-0 at the Jakarta International Stadium, courtesy of captain and playmaker Claudio Echeverri leading from the front with a
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Sports;
