import React from 'react';
import CalculatorForm from '../calculator/CalculatorForm';

export default function Index() {
  return(
    <main>
      <div className="wrapper block md:flex items-center p-12 ">
        <div className="w-full md:w-1/2">
          <h1 className="text-white text-5xl mb-6">Crypto Loan<br/> Calculator Solution</h1>
          <p className="text-white text-xl pr-12">This is a research, development and solutions provider company with a vibrant research and development pipeline</p>
        </div>
        <div className="w-full md:w-1/2">
          <CalculatorForm />
        </div>
      </div>
    </main>
  );
}