import React, { useState, useEffect } from "react";

const AppHooks: React.FC = () => {
  const [count, setCount] = useState(0);

  //　コンポーネントマウント時に1回実行
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  //　コンポーネント更新毎に実行
  useEffect(() => {
  console.log("componentDidUpdate");
  });

  //　コンポーネント更新時、'count'が変更されていた場合実行
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  //　コンポーネントアンマウント時に1回実行
  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(prevCount => prevCount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(prevCount => prevCount - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default AppHooks;

