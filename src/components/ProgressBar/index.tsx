import React from 'react';

// Props 인터페이스 정의
interface ProgressBarProps {
  percentage: number;
}

// 게이지바 컴포넌트
export default function ProgressBar({ percentage }: ProgressBarProps) {
  const containerStyles: React.CSSProperties = {
    height: '11px',
    width: 'auto',
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
  };

  const fillerStyles: React.CSSProperties = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#18A0FB',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles: React.CSSProperties = {
    // padding: 5,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
    // fontWeight: 'bold',
    // fontSize: '10px',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${percentage}%`}</span> */}
      </div>
    </div>
  );
};