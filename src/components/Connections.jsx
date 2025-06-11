import { useEffect } from "react";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import ChipCard from "./ChipCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useConnections from "../hooks/useConnections";

const buttonsConfig = [
  {
    id: "View",
    lable: "View",
    color: "blue",
  },
  {
    id: "Remove",
    lable: "Remove",
    color: "pink",
  },
];

const Connections = () => {
  const connections = useSelector((state) => state.connection);
  const { fetchConnections } = useConnections();

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="w-[97%] max-h-screen flex flex-col items-start justify-center gap-6 mx-4 my-4 p-4 ">
        <Heading headingName="All Connections" />
        <div className="flex w-full flex-col items-start justify-center gap-4">
          {connections.length > 0 ? (
            connections.map((connection, index) => {
              return (
                <ChipCard
                  key={index}
                  item={connection}
                  buttons={buttonsConfig}
                />
              );
            })
          ) : (
            <span>No Connections Available</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Connections;
