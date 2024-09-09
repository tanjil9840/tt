import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication,  } from '../../utility/localStroge';

const JobDetails = () => {

    const jobs = useLoaderData ()
    const {id}=useParams()
    const idInt=parseInt(id)
    const job=jobs.find(job=>job.id===idInt)
    console.log(jobs, id)

    const handleApplyJob =()=>{
        saveJobApplication(id)
        toast('you have applied Successfully')

    }
    return (
        <div>
            <h2>Job details of : {job.job_title} </h2>
            <div className='grid gap-4 md:grid-cols-4' >
                
                
                
                <div className='border md:col-span-3' > 
                    <h1 className='font-bold' >Company name:  {job.company_name} </h1>
                <h2> <span className='font-bold mr-2 ' >  Job Descrition :  </span>  {job.job_description} </h2>
                <h2 className='mt-2' > {job.job_responsibility} </h2>
                </div>
                <div className='border  ' >
                    <h2 className='text-2xl' >Side things  </h2>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full text-2xl font-bold' >Apply Now</button>
                    </div> 
                    </div>
                    <ToastContainer />

                   

        </div>
    );
};

export default JobDetails;