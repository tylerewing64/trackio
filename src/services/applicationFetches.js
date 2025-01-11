


export const getApplicationsW_user_id = async(user_id) => { 

    return await fetch ('http://localhost:8080' + "/api/application?user_id=" + user_id);

}


export const getFilteredApplications =async(search_term, user_id, filter) => { 
    return await fetch ('http://localhost:8080' + `/api/application?user_id=${user_id}&search_term=${search_term}&filter=${filter}`);
}


export const createApplication = async(formObject, user_id) => { 
    return await fetch('http://localhost:8080' + `/api/application`, { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ 
            job_obj: { 
            job_title: formObject.job_title, 
            job_company: formObject.job_company, 
            job_location: formObject.job_location, 
            job_description: formObject.job_description ? formObject.job_description : null, 
            job_salary: formObject.job_salary ? formObject.job_salary : null, 
            }, 
            application_obj:  { 
                user_ID: user_id
            }
        })
    })
}