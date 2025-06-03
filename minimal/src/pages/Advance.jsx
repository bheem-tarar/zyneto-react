import React from 'react';
import AdvanceFirst from '../components/AdvanceFirst';
import AdvanceSecond from '../components/AdvanceSecond';
import AdvanceThird from '../components/AdvanceThird';
import AdvanceFour from '../components/AdvanceFour';
import AdvanceFive from '../components/AdvanceFive';
import AdvanceSix from '../components/AdvanceSix';
import AdvanceSeven from '../components/AdvanceSeven';
import AdvanceEight from '../components/AdvanceEight';
const Advance = () => {
  return (
    <div className="p-4 space-y-6 overflow-y-auto max-h-screen mb-[100px]">
      <AdvanceFirst />
      <AdvanceSecond />
      <AdvanceThird />
      <AdvanceFour />
      <AdvanceFive />
      <AdvanceSix />
      <AdvanceSeven />
      <AdvanceEight />
    </div>
  );
};

export default Advance;
