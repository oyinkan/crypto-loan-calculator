import React, { useState, useEffect } from 'react';

export default function CalculatorForm() {
  const [coin, setCoin] = useState("usdt");
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("");

  const [dailyInterest, setDailyInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  const calculateDailyInterest = () => {
    const dailyInterest = amount * (0.0875/365);
    setDailyInterest(dailyInterest.toFixed(6));
    const totalPayable = Number(amount) + (Number(dailyInterest) * 365 * Number(period));
    setTotalPayable(totalPayable.toFixed(6));
  }

  useEffect(() => {
    calculateDailyInterest()
  }, [coin])

  return (
    <>
      <div className="mt-12 md:mt-0 form-wrapper py-6 px-10 rounded-lg shadow shadow-slate-200">
        <form>
          <div className="mb-3">
            <label for="coin" className="block text-white mb-2">Coin</label>
            <select 
              value={coin} 
              className="bg-white w-full text-gray-700 p-3 rounded border border-solid border-white"
              onChange={(e) => setCoin(e.target.value)}
            >
              <option value="usdt">USDT</option>
              <option value="dao">DAO</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="amount" className="block text-white mb-2">Amount</label>
            <input 
              type="number" 
              min={0}
              className="bg-white w-full text-gray-700 p-3 rounded border border-solid border-white"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label for="period" className="block text-white mb-2">Period (in Years)</label>
            <input
              type="number"
              min={1}
              className="bg-white w-full text-gray-700 p-3 rounded border border-solid border-white"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
          <div className="text-right">
            <button 
              type="button" 
              className="bg-white text-black py-3 px-6 mt-4 border border-solid border-white rounded hover:bg-transparent hover:text-white"
              onClick={calculateDailyInterest}
            >
              Calculate
            </button>
          </div>
        </form>
      
        <div className="mt-4">
          <p className="text-white text-xl mb-3">
            <span className="font-semibold">Daily Interest:</span> {`${dailyInterest} ${coin.toUpperCase()}`}
          </p>
          <p className="text-white text-xl ">
            <span className="font-semibold">Total Payable:</span> {`${totalPayable} ${coin.toUpperCase()}`}
          </p>
        </div>
      </div>
    </>
  );
}