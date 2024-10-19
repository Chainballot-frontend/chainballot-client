export const electionStorageABI = [
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
            {
                internalType: "address",
                name: "_presidingOfficer",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CandidateAlreadyExists",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotVoteTwice",
        type: "error",
    },
    {
        inputs: [],
        name: "ElectionEnded",
        type: "error",
    },
    {
        inputs: [],
        name: "ElectionNotStarted",
        type: "error",
    },
    {
        inputs: [],
        name: "ElectionStarted",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidCandidateAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MerkleRootAlreadySet",
        type: "error",
    },
    {
        inputs: [],
        name: "NotAnEligibleVoter",
        type: "error",
    },
    {
        inputs: [],
        name: "NotEnoughCandidates",
        type: "error",
    },
    {
        inputs: [],
        name: "NotPresidingOfficer",
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
                name: "candidate",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "electionAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "presidingOfficer",
                type: "address",
            },
        ],
        name: "CandidateAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "presidingOfficer",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "candidate",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "votes",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "ElectionResult",
        type: "event",
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
                name: "electionAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "voterAddress",
                type: "address",
            },
        ],
        name: "VoteInElection",
        type: "event",
    },
    {
        inputs: [],
        name: "ADDRESS_MERKLE_ROOT",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "IS_ADDRESS_MERKLE_ROOT_UPDATED",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "announceResults",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "candidateAddresses",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "candidates",
        outputs: [
            {
                internalType: "uint256",
                name: "dateAdded",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "noOfVotes",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "candidateMetadata",
                type: "string",
            },
            {
                internalType: "address",
                name: "candidate",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_voterAddress",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "merkleProof",
                type: "bytes32[]",
            },
        ],
        name: "checkVoterEligibility",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getElection",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "startDate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "electionDuration",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "metadata",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "presidingOfficer",
                        type: "address",
                    },
                    {
                        internalType: "enum Election_Library.ElectionStatus",
                        name: "electionStatus",
                        type: "uint8",
                    },
                ],
                internalType: "struct Election_Library.Election",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_addressMerkleRoot",
                type: "bytes32",
            },
        ],
        name: "setAddressMerkleRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "candidate",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "metadata",
                        type: "string",
                    },
                ],
                internalType: "struct Election_Storage.CandidateInput[]",
                name: "_candidates",
                type: "tuple[]",
            },
        ],
        name: "setCandidates",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_candidateAddress",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "merkleProof",
                type: "bytes32[]",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
