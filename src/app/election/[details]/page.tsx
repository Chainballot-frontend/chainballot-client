'use client'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react'

interface Voters{
  name: string;
  userAdd: string;
};

const Details = () => {

  const [voter, setVoter] = useState<Voters>({
    name: '',
    userAdd: '',
  });
  const [display, setDisplay] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setVoter((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleAdd = () =>{
      if(voter.name && voter.userAdd){
        setDisplay(!display);
      }
    }

    
  return (
    <div>
      <div className='md:w-full w-11/12 grid place-items-center pb-14 gap-8'>
        <div className='bg-white text-black p-4 h-auto w-10/12 rounded-xl grid place-items-center'>
          <div className='flex items-center justify-between w-full px-6'>
            <div>
              <p className='text-4xl font-semibold'>Board Member Election</p>
              <p>A Board member election for 2023-2025</p>
            </div>
            <Button className='py-2 px-4 bg-gray-300'>View</Button>
          </div>
          <div className='w-full px-6'>
            <div className='w-full border-b border-gray-400 py-4'>
              <p className='text-3xl'>Election Details</p>
            </div>
            <div className='flex items-center justify-center w-full border-b border-gray-400 py-4'>
              <div className='w-2/4'>
                <p className='text-gray-300'>Starts</p>
                <p>Feb 1 2023</p>
              </div>
              <div className='w-2/4'>
                <p className='text-gray-300'>Ends</p>
                <p>Feb 1 2024</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-full border-b border-gray-400 py-4'>
              <div className='w-2/4'>
                <p className='text-gray-300'>Registered Voters</p>
                <p>30,000</p>
              </div>
              <div className='w-2/4'>
                <p className='text-gray-300'>Voting Window</p>
                <p>Feb 1 2023 - Feb 1 2024</p>
              </div>
            </div>
            <div className='p-6 flex flex-col gap-4 w-1/4'>
              <Button className='py-2 px-4 bg-gray-400 text-white text-center'>Check Voter Eligibility</Button>
              <Button className='py-2 px-4 bg-blue-500 text-white text-center'>Register to Vote</Button>
            </div>
            <div className='p-6 flex flex-col gap-4 w-full'>
              <p className='text-3xl font-semibold'>Register Voter</p>
              <div className='flex items-center gap-8 w-full'>
                <InputText className='border-2 w-full p-4' placeholder="Voter's Name" name='name' value={voter.name} onChange={handleInputChange} />
                <InputText className='border-2 w-full p-4' placeholder="Voter's Address" name="userAdd" value={voter.userAdd} onChange={handleInputChange}/>
              </div>
              <button className='py-2 px-4 bg-blue-500 text-white text-center w-2/4 mx-auto rounded-lg' onClick={handleAdd}>Register to Vote</button>
              {
                display ? 
                <div>
                  <p className='text-3xl font-semibold'>Registered Voter</p>
                  <p>Name: {voter.name}</p>
                  <p>Address: {voter.userAdd}</p>
                </div>
                : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;