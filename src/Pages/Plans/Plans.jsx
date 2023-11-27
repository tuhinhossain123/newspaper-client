const Plans = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-[1200px] mx-auto px-5 md:px-0">
      <div className="bg-black text-white border-2 p-6  rounded">
        <a className="bg-gray-400 px-2 py-1 text-white rounded font-bold ">Free For 1 Month</a>
        <div className="flex justify-between py-4">
          <h2 className="text-xl font-semibold">Premium <br />Individual</h2>
          <h4><span className="font-bold text-lg">Free</span> <br />For Month</h4>
        </div>
        <li>1 Premium account</li>
        <li>Cancel anytime</li>
        <li>15 hours/month of listening time from our audioBooks catalog</li>
        <button className="bg-gray-400 w-full rounded-full py-2 font-semibold mt-10">Try free for 1 month</button>
        <p className="py-3 text-center">Free for 1 month, then $10,99 per moth after offer only available if you haven't tried Premium before .Items apply</p>
      </div>
      <div className="bg-black text-white border-2 p-6  rounded">
       <div className="flex justify-between mb-16">
       <h3 className="bg-black text-white p-2 rounded font-bold">Premium Duo</h3>
        <h3 ><span className="font-bold">$14.99</span> <br />Per Month</h3>
       </div>
        <li>2 Premium account</li>
        <li>Cancel anytime</li>
        <li>15 hours/month of listening time from our audioBooks catalog</li>
        <button className="bg-gray-400 w-full rounded-full py-2 font-semibold mt-10">Try Get Premium Duo</button>
        <p className="text-center py-3">For Couples who reside at the same address.Terms apply</p>
      </div>
      <div className="bg-black text-white border-2 p-4  rounded">
      <div className="flex justify-between mb-10">
       <h3 className="bg-black text-white p-2 rounded font-bold">Premium Duo</h3>
        <h3 ><span className="font-bold">$16.99</span> <br />Per Month</h3>
       </div>
        <li>Up to 6 Premium or kids accounts</li>
        <li>Block  explicit music</li>
        <li>Access to Spotify</li>
        <li>Cancel anytime</li>
        <li>15 hours/month of listening time from our audioBooks catalog</li>
        <button className="bg-gray-400 w-full rounded-full py-2 font-semibold mt-6">Try Get Premium Familly</button>
        <p className="text-center py-3">For up 6 familly members residing at the same address.Items apply</p>
      </div>
    </div>
  );
};

export default Plans;
