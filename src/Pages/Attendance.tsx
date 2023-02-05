import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';

const Attendance: React.FC = () => {
  return (
    <AttendanceWrap>
      <div className="text-[300px] text-center">🐶</div>
      <div className="text-[90px] text-center">반가워요</div>
    </AttendanceWrap>
  );
};

const AttendanceWrap = tw.div`
  w-full h-[100vh] bg-yellow-50
`;

export default Attendance;
