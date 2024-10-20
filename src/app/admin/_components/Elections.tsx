"use client"
import React, {  useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Badge } from "primereact/badge";
import axios, { AxiosError } from "axios";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";

interface ElectionResponseData {
  _id: string;
  election_title: string;
  election_description: string;
  election_presiding_officer: string;
  election_start_date: string;
  election_end_date: string;
  createdAt: string;
  __v: number;
}

interface ElectionApiResponse {
  success: boolean;
  data: ElectionResponseData[];
}

const Elections = () => {
  const { address, isConnected } = useAccount();
  const [elections, setElections] = useState<ElectionApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const toast = useRef<Toast>(null)

  useEffect(() => {
    const getElectionByPresidingOfficer = async () => {
      if (!isConnected || !address) {
        if (toast.current) {  
          toast.current.show({  
              severity: 'warn',  
              summary: 'Wallet Not Connected',  
              detail: 'Please connect your wallet to proceed.',  
          });  
      }
              }

      const url = process.env.NEXT_PUBLIC_API_URL as string;
      const params = {
        requestBody: {
          election_presiding_officer: address,
        },
      };

      try {
        setLoading(false)
        const response = await axios.get<ElectionApiResponse>(url, {
          headers: {
            "Content-Type": "application/json",
            ChainBallotAuthenticate: process.env.NEXT_PUBLIC_API_HEADER,
          },
          params: params,
        });

        if (response.data.success) {
          setElections(response.data);
        }
        console.log("Elections:", response.data.data);
        console.log("Elections:", response.data);
      } catch (error) {
        const err = error as AxiosError;
        console.error(
          "Error fetching elections:",
          err.response ? err.response.data : err.message
        );
      }
    };

    getElectionByPresidingOfficer();
  }, [address, isConnected]);

  return (
    <div>
         <Toast ref={toast}/>
      <h1 className="text-3xl my-8 text-center text-white font-semibold">
        Admin Dashboard
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:px-16 px-3 pb-8">

        {loading ? (elections?.data?.map((item) => (
          <div
            className="rounded-xl text-white text-sm bg-[#5E00B2]"
            key={item._id}
          >
            <div className="bg-purple flex flex-col items-center justify-center gap-4 py-3 rounded-b-xl">
              <h1 className="text-lg font-semibold">{item.election_title}</h1>
              <p className="text-center">{item.election_description}</p>
              <div className="w-full flex items-center justify-around">
                <Badge
                  className=""
                  value={`${item.election_start_date} Votes`}
                  severity="secondary"
                ></Badge>
                <p className="">{item.election_end_date} Eligible voters</p>
              </div>
              <button className="rounded-full bg-white text-black px-3 py-1">
                Manage Election
              </button>
            </div>
          </div>
        ))): <div className="flex justify-center items-center h-full">
<ProgressSpinner/>
        </div> }
      </div>
    </div>
  );
};

export default Elections;