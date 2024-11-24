import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ApplictionSearch from '../Components/ApplictionSearch';
import ApplicationTable from '../Components/ApplicationTable';
import AddRoundedIcon from '@mui/icons-material/AddRounded';function Applications() {
  const applications = [
    {
        "date_applied": "12/23/2023",
        "company": "Amazon",
        "status": "Applied",
        "job_title": "Software Engineer",
        "location": "New York City, NY"
    },
    {
        "date_applied": "12/20/2023",
        "company": "Google",
        "status": "Applied",
        "job_title": "Frontend Developer",
        "location": "Mountain View, CA"
    },
    {
        "date_applied": "12/19/2023",
        "company": "Meta",
        "status": "Interviewing",
        "job_title": "Backend Engineer",
        "location": "Menlo Park, CA"
    },
    {
        "date_applied": "12/18/2023",
        "company": "Apple",
        "status": "Rejected",
        "job_title": "DevOps Engineer",
        "location": "Cupertino, CA"
    },
    {
        "date_applied": "12/17/2023",
        "company": "Microsoft",
        "status": "Applied",
        "job_title": "Cloud Engineer",
        "location": "Redmond, WA"
    },
    {
        "date_applied": "12/15/2023",
        "company": "Netflix",
        "status": "Interviewing",
        "job_title": "Full Stack Engineer",
        "location": "Los Angeles, CA"
    },
    {
        "date_applied": "12/14/2023",
        "company": "Twitter",
        "status": "Applied",
        "job_title": "Data Scientist",
        "location": "San Francisco, CA"
    },
    {
        "date_applied": "12/13/2023",
        "company": "Adobe",
        "status": "Applied",
        "job_title": "UI/UX Designer",
        "location": "San Jose, CA"
    },
    {
        "date_applied": "12/12/2023",
        "company": "Tesla",
        "status": "Rejected",
        "job_title": "Machine Learning Engineer",
        "location": "Palo Alto, CA"
    },
    {
        "date_applied": "12/10/2023",
        "company": "Uber",
        "status": "Applied",
        "job_title": "Software Engineer",
        "location": "San Francisco, CA"
    },
    {
        "date_applied": "12/09/2023",
        "company": "LinkedIn",
        "status": "Interviewing",
        "job_title": "Site Reliability Engineer",
        "location": "Sunnyvale, CA"
    },
    {
        "date_applied": "12/08/2023",
        "company": "Snapchat",
        "status": "Rejected",
        "job_title": "Security Engineer",
        "location": "Los Angeles, CA"
    },
    {
        "date_applied": "12/07/2023",
        "company": "IBM",
        "status": "Applied",
        "job_title": "AI Researcher",
        "location": "Armonk, NY"
    },
    {
        "date_applied": "12/06/2023",
        "company": "Salesforce",
        "status": "Applied",
        "job_title": "Solutions Architect",
        "location": "San Francisco, CA"
    },
    {
        "date_applied": "12/05/2023",
        "company": "Intel",
        "status": "Applied",
        "job_title": "Embedded Systems Engineer",
        "location": "Santa Clara, CA"
    },
    {
        "date_applied": "12/03/2023",
        "company": "Oracle",
        "status": "Rejected",
        "job_title": "Database Administrator",
        "location": "Redwood City, CA"
    },
    {
        "date_applied": "12/02/2023",
        "company": "Spotify",
        "status": "Interviewing",
        "job_title": "Audio Engineer",
        "location": "New York City, NY"
    },
    {
        "date_applied": "12/01/2023",
        "company": "Slack",
        "status": "Applied",
        "job_title": "Product Manager",
        "location": "San Francisco, CA"
    },
    {
        "date_applied": "11/30/2023",
        "company": "Pinterest",
        "status": "Applied",
        "job_title": "Mobile Developer",
        "location": "San Francisco, CA"
    },
    {
        "date_applied": "11/29/2023",
        "company": "Zoom",
        "status": "Interviewing",
        "job_title": "Video Streaming Engineer",
        "location": "San Jose, CA"
    },
    {
        "date_applied": "11/28/2023",
        "company": "TikTok",
        "status": "Applied",
        "job_title": "Algorithm Engineer",
        "location": "Los Angeles, CA"
    }
];

  return (
  <>
  <div className = 'ml-8 mr-8 '>
    <ApplictionSearch />
    <div className='mt-5 text-xs'>
      <div className='flex w-full items-center mb-1 cursor-pointer'>
        <AddRoundedIcon/>
        <button className='ml-1 ' >New Application</button>
        
        </div>
      <ApplicationTable  applications={applications}/>
    </div>
  </div>

  </>
  )
}

export default Applications