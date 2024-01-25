import React, { useEffect, useState } from 'react';

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {records.map((list) => (
          <li key={list.id}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
