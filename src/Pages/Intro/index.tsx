import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const Intro: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-yellow-50">
      <div className="text-[300px] text-center">🐶</div>
      <div className="text-[90px] text-center">반가워요</div>
    </div>
  );
};

export default Intro;
