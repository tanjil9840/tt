import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localStroge';
import { list } from 'postcss';

const AppliadJobs = () => {
    const jobs=useLoaderData();
    // const [appliedJobs,setAppliedJobs]=useState([])
    const [appliedJobs, setAppliedJobs]=useState([])

    const [displayJobs, setDisplayJobs]=useState([])
    useEffect(()=>{
        const storedJobsIds= getStoredJobApplication()
        if(jobs.length>0){


        // const jobApplied=jobs.filter(job=> storedJobIds.includes(job.id) )

        const jobApplied=[]
        for(const id of storedJobIds){
            const job=jobs.find(job=>job.id===id);
            if(job){
                jobApplied.push(job)
            }
        }
        }
        setAppliedJobs(jobsApplied)


    },[])
    return (
        <div>
            <h2  >Jobs I applied {appliedJobs.length} </h2>
            <ul>
                {
                    appliedJobs.map(job=> <li key={job.id}> <span> {job.job_title} {job.company_name} </span> </li>)
                }
            </ul>
        </div>
    );
};

export default AppliadJobs;