import React from 'react';

const AdvanceSecond = () => {
  // const members = [
  //   {
  //     name: "Dean Hogan",
  //     role: "iOS Developer",
  //     project: "Zipcar",
  //     projectColor: "bg-purple-100 text-purple-700",
  //     task: "87/135",
  //     progress: 75,
  //     avatar: "../src/assets/1.png"
  //   },
  //   {
  //     name: "Hilda Rice",
  //     role: "Laravel Developer",
  //     project: "Brandi",
  //     projectColor: "bg-green-100 text-green-700",
  //     task: "340/420",
  //     progress: 85,
  //     avatar: "../src/assets/2.png"
  //   },
  //   {
  //     name: "Andrew O'Brian",
  //     role: "React Developer",
  //     project: "Payors",
  //     projectColor: "bg-yellow-100 text-yellow-700",
  //     task: "50/82",
  //     progress: 60,
  //     avatar: "../src/assets/5.png"
  //   },
  //   {
  //     name: "Sarah Johnson",
  //     role: "UI/UX Designer",
  //     project: "Flipkart",
  //     projectColor: "bg-blue-100 text-blue-700",
  //     task: "120/150",
  //     progress: 80,
  //     avatar: "../src/assets/8.png"
  //   },
  //   {
  //     name: "Mike Chen",
  //     role: "Backend Developer",
  //     project: "Amazon",
  //     projectColor: "bg-orange-100 text-orange-700",
  //     task: "65/90",
  //     progress: 72,
  //     avatar: "../src/assets/5.png"
  //   }
  // ];

  return (
    // <div className="bg-white rounded-xl shadow-lg p-3 max-w-7xl mx-auto">
    //   <div className="flex justify-between items-center mb-6">
    //     <h2 className="text-2xl font-semibold text-gray-700 p-3">Team Members</h2>
    //     <div className="w-1 h-1 bg-gray-400 rounded-full relative cursor-pointer">
    //       <div className="absolute -top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
    //       <div className="absolute top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
    //     </div>
    //   </div>

    //   <table className="w-full">
    //     <thead>
    //       <tr className="border-b border-gray-200">
    //         <th className="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">NAME</th>
    //         <th className="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">PROJECT</th>
    //         <th className="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">TASK</th>
    //         <th className="text-center py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">PROGRESS</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {members.map((member, index) => (
    //         <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
    //           <td className="py-4 px-2">
    //             <div className="flex items-center gap-3">
    //               <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
    //                 <img
    //                   src={member.avatar}
    //                   alt={member.name}
    //                   className="w-full h-full object-cover"
    //                 />
    //               </div>
    //               <div>
    //                 <div className="font-medium text-gray-900 text-base">{member.name}</div>
    //                 <div className="text-sm text-gray-500">{member.role}</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td className="py-4 px-2">
    //             <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${member.projectColor}`}>
    //               {member.project}
    //             </span>
    //           </td>
    //           <td className="py-4 px-2">
    //             {member.task && (
    //               <span className="text-base font-medium text-gray-700">
    //                 <span className="text-purple-600">
    //                   {member.task.split('/')[0]}
    //                 </span>
    //                 /{member.task.split('/')[1]}
    //               </span>
    //             )}
    //           </td>
    //           <td className="py-4 px-2 text-center">
    //             <div className="flex items-center justify-center gap-3">
    //               <div className="relative w-12 h-12">
    //                 <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
    //                   <path
    //                     d="M18 2.0845
    //                        a 15.9155 15.9155 0 0 1 0 31.831
    //                        a 15.9155 15.9155 0 0 1 0 -31.831"
    //                     fill="none"
    //                     stroke="#e5e7eb"
    //                     strokeWidth="3"
    //                   />
    //                   <path
    //                     d="M18 2.0845
    //                        a 15.9155 15.9155 0 0 1 0 31.831
    //                        a 15.9155 15.9155 0 0 1 0 -31.831"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="3"
    //                     strokeDasharray={`${member.progress}, 100`}
    //                     className="text-blue-500"
    //                   />
    //                 </svg>
    //                 <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
    //                   {/* {member.progress}% */}
    //                 </div>
    //               </div>
    //             </div>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>


    <div class="bg-white rounded-xl shadow-lg p-6 max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-700">Team Members</h2>
        <div class="w-1 h-1 bg-gray-400 rounded-full relative cursor-pointer">
          <div class="absolute -top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
          <div class="absolute top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">NAME</th>
            <th class="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">PROJECT</th>
            <th class="text-left py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">TASK</th>
            <th class="text-center py-4 px-2 text-lg font-medium text-gray-700 uppercase tracking-wider">PROGRESS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-4 px-2">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/1.png"
                    alt="1"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <div class="font-medium text-[#6D67777] text-xl">Dean Hogan</div>
                  <div class="text-xl text-gray-500">iOS Developer</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                <i class="fas fa-mobile-alt text-purple-700"></i>
                Zipcar
              </span>
            </td>
            <td class="py-4 px-2">
              <span class="text-base font-medium text-gray-700">
                <span class="text-purple-600">87</span>/135
              </span>
            </td>
            <td class="py-4 px-2 text-center">
              <div class="flex items-center justify-center">
                <i class="fas fa-chart-pie text-purple-700 text-2xl"></i>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-4 px-2">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/2.png"
                    alt="2"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div class="font-medium text-[#6D67777] text-xl">Hilda Rice</div>
                  <div class="text-xl text-gray-500">Laravel Developer</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                <i class="fab fa-laravel text-green-700"></i>
                Brandi
              </span>
            </td>
            <td class="py-4 px-2">
              <span class="text-base font-medium text-gray-700">
                <span class="text-purple-600">340</span>/420
              </span>
            </td>
            <td class="py-4 px-2 text-center">
             
            </td>
          </tr>

          <tr>
            <td class="py-4 px-2">
              <div class="flex items-center gap-3">
                 <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/1.png"
                    alt="1"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div class="font-medium text-[#6D67777] text-xl">Andrew O'Brian</div>
                  <div class="text-xl text-gray-500">React Developer</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                <i class="fab fa-react text-yellow-700"></i>
                Payors
              </span>
            </td>
            <td class="py-4 px-2">
              <span class="text-base font-medium text-gray-700">
                <span class="text-purple-600">50</span>/82
              </span>
            </td>
            <td class="py-4 px-2 text-center">
              <div class="flex items-center justify-center">
                <i class="fas fa-chart-pie text-yellow-700 text-2xl"></i>
              </div>
            </td>
          </tr>

          <tr>
            <td class="py-4 px-2">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/5.png"
                    alt="5"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div class="font-medium text-[#6D67777] text-xl">Sarah Johnson</div>
                  <div class="text-xl text-gray-500">UI/UX Designer</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                <i class="fas fa-shopping-cart text-blue-700"></i>
                Flipkart
              </span>
            </td>
            <td class="py-4 px-2">
              <span class="text-base font-medium text-gray-700">
                <span class="text-purple-600">120</span>/150
              </span>
            </td>
            <td class="py-4 px-2 text-center">
              <div class="flex items-center justify-center">
                <i class="fas fa-chart-pie text-blue-700 text-2xl"></i>
              </div>
            </td>
          </tr>

          <tr class="">
            <td class="py-4 px-2">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/2.png"
                    alt="2"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div class="font-medium text-[#6D67777] text-xl">Mike Chen</div>
                  <div class="text-xl text-gray-500">Backend Developer</div>
                </div>
              </div>
            </td>
            <td class="py-4 px-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
                <i class="fab fa-amazon text-orange-700"></i>
                Amazon
              </span>
            </td>
            <td class="py-4 px-2">
              <span class="text-base font-medium text-gray-700">
                <span class="text-purple-600">65</span>/90
              </span>
            </td>
            <td class="py-4 px-2 text-center">
              <div class="flex items-center justify-center">
                <i class="fas fa-chart-pie text-orange-700 text-2xl"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default AdvanceSecond;











