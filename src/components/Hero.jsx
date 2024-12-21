import React, { useEffect, useState } from 'react';
import supabase from "../config/supabaseClient";

const Hero = () => {
  // Define the state for fetchError and studentCourses
  const [fetchError, setFetchError] = useState(null);
  const [studentCourses, setStudentCourses] = useState(null);

  // Log supabase client to verify connection
  console.log(supabase);
  
  useEffect(() => {
    const fetchStudentCourses = async () => {
      const { data, error } = await supabase
        .from("student_courses")
        .select();

      if (error) {
        setFetchError("Could Not Fetch Data From student_courses");
        setStudentCourses(null);
        console.log(error);
      }
      if (data) {
        setStudentCourses(data);
        setFetchError(null);
        console.log(data); // Log the data after it's successfully fetched
      }
    };
    fetchStudentCourses();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className='bg-white rounded-[0.5rem]'>
      <div className="flex flex-row justify-between">
        <div className='mt-[1rem]'>
          <select className='h-[39px] w-[149px] bg-[#E9EDF1] text-[#3F526E] font-medium rounded-[0.2rem] text-center ml-[10px]'>
            <option>AY 2024-25</option>
            <option>AY 2023-24</option>
            <option>AY 2022-23</option>
            <option>AY 2021-22</option>
          </select>
        </div>
        <div className='mt-[1rem]'>
          <select className='h-[39px] w-[117px] bg-[#E9EDF1] text-[#3F526E] font-medium rounded-[0.2rem] text-center ml-[20px]'>
            <option>CBSE 9 </option>
            <option>CBSE 8</option>
            <option>CBSE 7</option>
            <option>CBSE 6</option>
          </select>
        </div>
        <div className='ml-auto mt-[1rem] pl-[1rem]'>
          <button className='h-[39px] w-[197px] bg-[#E9EDF1] text-[#3F526E] font-medium rounded-[0.2rem] text-center'>+ Add new Student</button>
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse mt-[2rem] mb-[0.5rem]">
  <thead>
    <tr>
      <th className="px-4 py-2 text-left font-bold text-black ">Students</th>
      <th className="px-4 py-2 text-left font-bold text-black ">Cohorts</th>
      <th className="px-4 py-2 text-left font-bold text-black ">Courses</th>
      <th className="px-4 py-2 text-left font-bold text-black ">Date Joined</th>
      <th className="px-4 py-2 text-left font-bold text-black ">Last Login</th>
      <th className="px-4 py-2 text-left font-bold text-black ">Status</th>
    </tr>
  </thead>
  <tbody>
    {fetchError && <tr><td colSpan="6" class="px-4 py-2 text-center text-red-500">{fetchError}</td></tr>}
    {studentCourses && studentCourses.map((data) => (
      <tr key={data.id} className={`hover:bg-gray-50 ${data !== studentCourses.length - 1 ? 'border-b border-gray-300' : ''}`}>
        <td className="px-4 py-2 text-sm font-medium text-gray-800">{data.student_name}</td>
        <td className="px-4 py-2 text-sm font-small text-gray-800">{data.cohort}</td> 
        <td className="px-4 py-2 text-sm font-small text-gray-800">{data.courses}</td>
        <td className="px-4 py-2 text-sm font-small text-gray-800">{data.date_joined}</td>
        <td className="px-4 py-2 text-sm font-small text-gray-800">{data.last_login}</td>
        <td className="px-4 py-2 text-sm font-small text-gray-800"><span className={`inline-block w-3 h-3 rounded-full ${data.status ? 'bg-green-400':'bg-red-400'}`}/></td> 
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default Hero;
