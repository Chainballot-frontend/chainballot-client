// import React from 'react'

// const Elections = () => {
//   return (
//     <div>
//        <h1 className='text-3xl my-8 text-center text-white font-semibold'>Admin Dashboard</h1>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:px-16 px-3 pb-8'>
//         { elections.map((item, i)=>(
//           <Card className='rounded-xl text-white text-sm'>
//             <CardHeader>
//               <Image src={item.image} width={100} height={100} className='w-full object-cover rounded-t-xl' />
//             </CardHeader>
//             <CardContent className='bg-purple flex flex-col items-center justify-center gap-4 py-3 rounded-b-xl'>
//               <h1 className='text-lg font-semibold'>{item.title}</h1>
//               <p className='text-center'>{item.text}</p>
//               <div className='w-full flex items-center justify-around'>
//                 {/* <Badge className='rounded-full'>{item.status}</Badge> */}
//                 {(() => {
//                   let badgeVariant;
//                   let badgeText;

//                   switch (item.status) {
//                     case 'Ongoing':
//                       badgeVariant = 'default';
//                       badgeText = 'Ongoing';
//                       break;
//                     case 'Upcoming':
//                       badgeVariant = 'secondary';
//                       badgeText = 'Pending';
//                       break;
//                     case 'Closed':
//                       badgeVariant = 'destructive';
//                       badgeText = 'Closed';
//                       break;
//                     default:
//                       badgeVariant = 'default';
//                       badgeText = 'Upcoming';
//                   }

//                   return (
//                     <Badge variant={badgeVariant} className='rounded-full'>
//                       {badgeText}
//                     </Badge>
//                   );
//                 })()}                
//                 <p className='underline'>{item.votes} Votes</p>
//                 <p className='underline'>{item.eligibles} Eligible voters</p>
//               </div>
//               <Button className='rounded-full bg-white text-black'>Manage Election</Button>
//             </CardContent>
//           </Card>
//         )) }
//       </div>
//     </div>
//   )
// }

// export default Elections



import React from 'react'
import Image from 'next/image';
import { elections } from '@/Data/Election';
const Elections = () => {
  return (
    <div>
       <h1 className='text-3xl my-8 text-center text-white font-semibold'>Admin Dashboard</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:px-16 px-3 pb-8'>
        { elections.map((item,index)=>(
          <div className='rounded-xl text-white text-sm' key={index}>
            <div>
              <Image src={item.image} width={100} height={100} className='w-full object-cover rounded-t-xl' alt='ballot'/>
            </div>
            <div className='bg-purple flex flex-col items-center justify-center gap-4 py-3 rounded-b-xl'>
              <h1 className='text-lg font-semibold'>{item.title}</h1>
              <p className='text-center'>{item.text}</p>
              <div className='w-full flex items-center justify-around'>
                {/* <Badge className='rounded-full'>{item.status}</Badge> */}
                {(() => {
                  let badgeVariant;
                  let badgeText;

                  switch (item.status) {
                    case 'Ongoing':
                      badgeVariant = 'default';
                      badgeText = 'Ongoing';
                      break;
                    case 'Upcoming':
                      badgeVariant = 'secondary';
                      badgeText = 'Pending';
                      break;
                    case 'Closed':
                      badgeVariant = 'destructive';
                      badgeText = 'Closed';
                      break;
                    default:
                      badgeVariant = 'default';
                      badgeText = 'Upcoming';
                  }

                  return (
                    <div  className='rounded-full'>
                      {badgeText}
                    </div>
                  );
                })()}                
                <p className='underline'>{item.votes} Votes</p>
                <p className='underline'>{item.eligibles} Eligible voters</p>
              </div>
              <button className='rounded-full bg-white text-black'>Manage Election</button>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Elections