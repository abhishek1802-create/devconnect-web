import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./Heading";
import ChipCard from "./ChipCard";
import useRequests from "../hooks/useRequests";

const buttonsConfig = [
  {
    id: "Accept",
    lable: "Accept",
    color: "blue",
    status: "accepted",
  },
  {
    id: "Reject",
    lable: "Reject",
    color: "pink",
    status: "rejected",
  },
];

const Requests = () => {
  const requests = useSelector((state) => state.request);
  const { fetchRequests } = useRequests();

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="w-[97%] max-h-screen flex flex-col items-start justify-center gap-6 mx-4 my-4 p-4">
        <Heading headingName="Available Requests" />
        <div className="flex w-full flex-col items-start justify-center gap-3">
          {requests.length > 0 ? (
            requests.map((request, index) => {
              return (
                <ChipCard key={index} item={request} buttons={buttonsConfig} />
              );
            })
          ) : (
            <span>No Requests Available</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Requests;
