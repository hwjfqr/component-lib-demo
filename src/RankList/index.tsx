import React from 'react';
import './index.less';

interface RankListProps {
  data: { label: string; value: string | number }[];
}
function RankList({ data }: RankListProps) {
  return (
    <div className="rank-list">
      {data.length ? (
        <ul>
          {data
            .filter((_, index) => index < 10)
            .map(({ label, value }, index) => (
              <li key={label}>
                <div
                  className="rank"
                  style={{
                    backgroundColor: index + 1 < 4 ? '#27478d' : '#fafafa',
                    color: index + 1 < 4 ? '#fff' : 'rgba(0, 0, 0, 0.65)',
                  }}
                >
                  {index + 1}
                </div>
                <div className="name">
                  <span title={label || '--'}>{label || '--'}</span>
                </div>
                <div className="num">{value}</div>
              </li>
            ))}
        </ul>
      ) : (
        <div className="empty">暂无数据</div>
      )}
    </div>
  );
}

export default RankList;
