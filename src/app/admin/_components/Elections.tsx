"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { elections, getElections } from "@/Data/Election";
import { Badge } from "primereact/badge";

type BadgeSeverity =
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "secondary"
    | "contrast";

const Elections = () => {
    const [adminElections, setAdminElections] = useState([]);

    useEffect(() => {
        getElections()
            .then((e) => {
                setAdminElections(e);
                // Logging here will show the old value because the state hasn't been updated yet.
                console.log("Inside then, adminElections:", adminElections);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    // Use another useEffect to track changes in adminElections
    useEffect(() => {
        console.log("Updated adminElections:", adminElections);
    }, [adminElections]); // This will run every time adminElections is updated

    return (
        <div>
            <h1 className="text-3xl my-8 text-center text-white font-semibold">
                Admin Dashboard
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:px-16 px-3 pb-8">
                {adminElections.length > 0 ? (
                    <>
                        {adminElections.map((item: any, index) => (
                            <div
                                className="rounded-xl text-white text-sm bg-[#5E00B2]"
                                key={index}
                            >
                                <div className="bg-purple flex flex-col h-[10rem] items-center justify-between gap-4 py-5 rounded-b-xl">
                                    <h1 className="text-lg font-semibold text-center">
                                        {item.election_title}
                                    </h1>
                                    <button className="rounded-full bg-white text-black px-3 py-1">
                                        Manage Election
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Elections;
