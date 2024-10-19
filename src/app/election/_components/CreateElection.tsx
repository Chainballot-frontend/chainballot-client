"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Plus, Undo2 } from "lucide-react";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";

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
  const createElection = async (values: ElectionData) => {
    const url = "https://chainballot-backend.onrender.com/gateway/v1/election";

    try {
      const response = await axios.post<ElectionApiResponse>(url, values, {
        headers: {
          "Content-Type": "application/json",
          // "X-Custom-Header": "YOUR_CUSTOM_VALUE_HERE",
          Authorization: "Bearer bb9b1248af058",
        },
      });
      if (response.data.success) {
        console.log("Election created successfully:", response.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.error(
        "Error creating election:",
        err.response ? err.response.data : err.message
      );
    }
  };

  const createElectionFormik = useFormik<ElectionData>({
    initialValues: {
      title: "",
      description: "",
      presidingOfficer: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      createElection(values);
    },
  });

  return (
    <div>
      <div className="md:w-full w-11/12 grid place-items-center pb-14">
        <div className="flex items-center justify-between md:w-11/12 w-8/12 h-20">
          <Link href="/">
            <Image
              src="/Images/CHAINBALLOT.svg"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
          <Link href="/">
            <Undo2 />
          </Link>
        </div>
        <form
          onSubmit={createElectionFormik.handleSubmit}
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
              value={createElectionFormik.values.title}
              onChange={createElectionFormik.handleChange}
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
              value={createElectionFormik.values.description}
              onChange={createElectionFormik.handleChange}
            />
          </div>
          <div className="flex items-center justify-center gap-8 w-full">
            <div className="flex flex-col w-2/4">
              <label htmlFor="startDate" className="font-semibold">
                Start Date
              </label>
              <InputText
                id="startDate"
                name="startDate"
                type="date"
                className="border-2 w-full p-4"
                value={createElectionFormik.values.startDate}
                onChange={createElectionFormik.handleChange}
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
                value={createElectionFormik.values.endDate}
                onChange={createElectionFormik.handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="presidingOfficer" className="font-semibold">
              Presiding Officer
            </label>
            <InputText
              id="presidingOfficer"
              name="presidingOfficer"
              className="border-2 w-full p-4"
              value={createElectionFormik.values.presidingOfficer}
              onChange={createElectionFormik.handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="legibility" className="font-semibold">
              Voting Legibility
            </label>
            <InputText id="legibility" className="border-2 w-full p-4" />
          </div>

          <div className="grid place-items-center gap-8">
            <h1 className="text-4xl font-bold text-center">Candidate 1</h1>
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex flex-col w-2/4">
                <label htmlFor="candidate-party" className="font-semibold">
                  Candidate Name
                </label>
                <InputText
                  id="candidate-party"
                  className="border-2 w-full p-4"
                />
              </div>
              <div className="flex flex-col w-2/4">
                <label htmlFor="affiliation" className="font-semibold">
                  Candidate Party/Affiliation(OPtional)
                </label>
                <InputText id="affiliation" className="border-2 w-full p-4" />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="manifesto" className="font-semibold">
                Manifesto
              </label>
              <InputTextarea
                id="manifesto"
                autoResize
                className="border-2 w-full p-4"
                rows={5}
                cols={30}
              />
            </div>
          </div>
          <div className="grid place-items-center gap-8">
            <h1 className="text-4xl font-bold text-center">Candidate 2</h1>
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex flex-col w-2/4">
                <label htmlFor="candidate-party" className="font-semibold">
                  Candidate Name
                </label>
                <InputText
                  id="candidate-party"
                  className="border-2 w-full p-4"
                />
              </div>
              <div className="flex flex-col w-2/4">
                <label
                  htmlFor="affiliation"
                  className="font-semibold text-nowrap"
                >
                  Candidate Party/Affiliation(OPtional)
                </label>
                <InputText id="affiliation" className="border-2 w-full p-4" />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="manifesto" className="font-semibold">
                Manifesto
              </label>
              <InputTextarea
                id="manifesto"
                autoResize
                className="border-2 w-full p-4"
                rows={5}
                cols={30}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 w-full">
            <Button className="bg-[#5E00B2] text-white w-[16rem] font-semibold  flex flex-row  gap-2 px-[1.5] items-center justify-center rounded-lg py-3">
              ADD NEW CANDIDATE
              <Plus />
            </Button>
            <Button
              type="submit"
              className="bg-[#5E00B2] text-white w-[16rem] font-semibold flex flex-row gap-2 px-[1.5] items-center justify-center rounded-lg py-3 mx-auto"
            >
              CREATE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateElection;
