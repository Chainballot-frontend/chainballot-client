import axios from "axios";
import ballot from "../../public/Images/ballot.png";

export const elections = [
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Ongoing",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Upcoming",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Closed",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Ongoing",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Upcoming",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Closed",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Ongoing",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Upcoming",
        votes: 8,
        eligibles: 130,
    },
    {
        image: ballot,
        title: "ELECTION TITLE",
        text: "Lorem ipsum dolor sit amet consectetur. Sit tristique lorem sed at elementum congue mauris at nunc. ",
        status: "Closed",
        votes: 8,
        eligibles: 130,
    },
];

export const getElections = async (address?: any) => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL as string}`,
        {
            headers: {
                "Content-Type": "application/json",
                ChainBallotAuthenticate: process.env.NEXT_PUBLIC_API_HEADER,
            },
            params: {
                requestBody: {
                    election_presiding_officer:
                        "0x1234567890abcdef1234567890abcdef12345678",
                },
            },
        }
    );

    return response.data.elections;
};
