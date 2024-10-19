export const electionFactoryABI = [
    {
        inputs: [],
        name: "InvalidStartDate",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "presidingOfficer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "electionAddress",
                type: "address",
            },
        ],
        name: "ElectionInitialized",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_startDate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_electionDuration",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_metadata",
                type: "string",
            },
        ],
        name: "initializeElection",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
