"use client";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios, { AxiosError } from "axios";
import { useAccount } from "wagmi";
import {ProgressSpinner} from 'primereact/progressspinner'
import { Toast } from 'primereact/toast';
        


type ElectionData = {
    title: string;
    description: string;
    presidingOfficer: string;
    startDate: string;
    endDate: string;
};

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
    data: ElectionResponseData;
}

const CreateElection: React.FC = () => {
    const { address, isConnected } = useAccount();
    const [loading, setLoading] = useState(true);

    const toast = useRef<Toast>(null)

    const [electionData, setElectionData] = useState<ElectionData>({
        title: "",
        description: "",
        presidingOfficer: "",
        startDate: "",
        endDate: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setElectionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const createElection = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = process.env.NEXT_PUBLIC_API_URL as string;

        if (!isConnected) {
            console.log("Wallet not connected");
            // SHOW A MODAL HERE
            if (toast.current) {  
                toast.current.show({  
                    severity: 'warn',  
                    summary: 'Wallet Not Connected',  
                    detail: 'Please connect your wallet to proceed.',  
                });  
            }  

        }

        console.log({
            election_title: electionData.title,
            election_description: electionData.description,
            election_start_date: new Date(electionData.startDate).toISOString(),
            election_end_date: new Date(electionData.endDate).toISOString(),
            election_presiding_officer: address,
        });

        // ADD LOADING MODAL/ICON
           

        try {
            setLoading(false)
            const response = await axios.post<ElectionApiResponse>(
                url,
                {
                    requestBody: {
                        election_title: electionData.title,
                        election_description: electionData.description,
                        election_start_date: new Date(electionData.startDate).toISOString(),
                        election_end_date: new Date(electionData.endDate).toISOString(),
                        election_presiding_officer: address,
                    },
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        ChainBallotAuthenticate:
                            process.env.NEXT_PUBLIC_API_HEADER,
                    },
                }
            );
            if (response.data.success) {
                console.log("Election created successfully:", response.data);
                setLoading(false)
            }
        } catch (error) {
            const err = error as AxiosError;
            console.error(
                "Error creating election:",
                err.response ? err.response.data : err.message
            );
        }
    };

    return (
        <div>
            <div className="md:w-full w-11/12 grid place-items-center pb-14">
            <Toast ref={toast}/>
                              <form
                    onSubmit={createElection}
                    className="bg-white text-black h-auto w-10/12 md:p-16 p-4 rounded-2xl flex flex-col gap-8"
                >
                    <h1 className="text-4xl font-bold text-center">
                        Create New Election
                    </h1>
                    <div className="w-full">
                        <label htmlFor="title" className="font-semibold">
                            Election Title
                        </label>
                        <InputText
                            id="title"
                            name="title"
                            className="border-2 w-full p-4"
                            value={electionData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-semibold">
                            Election Description (Optional)
                        </label>
                        <InputTextarea
                            id="description"
                            name="description"
                            autoResize
                            className="border-2 w-full p-4"
                            rows={5}
                            cols={30}
                            value={electionData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center gap-8 w-full">
                        <div className="flex flex-col w-2/4">
                            <label
                                htmlFor="startDate"
                                className="font-semibold"
                            >
                                Start Date
                            </label>
                            <InputText
                                id="startDate"
                                name="startDate"
                                type="date"
                                className="border-2 w-full p-4"
                                value={electionData.startDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-2/4">
                            <label htmlFor="endDate" className="font-semibold">
                                End Date
                            </label>
                            <InputText
                                id="endDate"
                                name="endDate"
                                type="date"
                                className="border-2 w-full p-4"
                                value={electionData.endDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Button
                            type="submit"
                            className="bg-[#5E00B2] text-white font-semibold px-12 items-center justify-center rounded-lg py-3 transition duration-300 hover:bg-opacity-80 focus:border-none focus:outline-none focus:ring-0"
                        >
                            {loading ? <ProgressSpinner style={{ width: '20px', height: '20px' }} /> : 'Create'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateElection;
