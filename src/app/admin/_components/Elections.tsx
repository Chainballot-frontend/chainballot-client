import React from "react";
import Image from "next/image";
import { elections } from "@/Data/Election";
import { Badge } from "primereact/badge";

const Elections = () => {
  return (
    <div>
      <h1 className="text-3xl my-8 text-center text-white font-semibold">
        Admin Dashboard
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:px-16 px-3 pb-8">
        {elections.map((item, index) => (
          <div
            className="rounded-xl text-white text-sm bg-[#5E00B2]"
            key={index}
          >
            <div>
              <Image
                src={item.image}
                width={100}
                height={100}
                className="w-full object-cover rounded-t-xl"
                alt="ballot"
              />
            </div>
            <div className="bg-purple flex flex-col items-center justify-center gap-4 py-3 rounded-b-xl">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-center">{item.text}</p>
              <div className="w-full flex items-center justify-around">
                
                 
                 {(() => {
                  let severity;
                  let badgeText;

                  switch (item.status) {
                    case 'Ongoing':
                      severity = 'success';
                      badgeText = 'Ongoing';
                      break;
                    case 'Upcoming':
                      severity = 'warning';
                      badgeText = 'Upcoming';
                      break;
                    case 'Closed':
                      severity = 'danger';
                      badgeText = 'Closed';
                      break;
                    default:
                      severity = 'warning';
                      badgeText = 'Upcoming';
                  }

                  return (
                    <Badge className='rounded-full' severity={severity} value={badgeText}></Badge>
                  );
                })()}
                <Badge className="" value={`${item.votes} Votes`} severity="secondary"></Badge>
                <p className="">{item.eligibles} Eligible voters</p>
              </div>
              <button className="rounded-full bg-white text-black px-3 py-1">
                Manage Election
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elections;
