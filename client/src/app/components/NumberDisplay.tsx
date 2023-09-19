import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const NumberDisplay: React.FC = () => {
  const { value, color } = useSelector((state: RootState) => state.number);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "websocket/CONNECT" });

    return () => {
      dispatch({ type: "websocket/DISCONNECT" });
    };
  }, [dispatch]);

  return (
    <div className="bg-gray-800 w-72 h-20 flex items-center justify-center rounded-lg">
      <div
        className={`text-4xl font-bold ${color} transition-colors duration-100`}
      >
        {value}
      </div>
    </div>
  );
};

export default NumberDisplay;
