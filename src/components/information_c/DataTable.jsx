import React from 'react';
import '../../style/tableStyle.css';

// 표 데이터를 정의합니다.
const data = [
  { id: 1, name: 'John Doe', age: 28, job: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 34, job: 'Designer' },
  { id: 3, name: 'Sam Johnson', age: 45, job: 'Manager' },
];

const DataTable = () => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
