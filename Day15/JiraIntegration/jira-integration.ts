import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username ="ravindranr90@gmail.com"
const apiKey = "ATATT3xFfGF0MJ9oawG_3Hd1rgBDP1tyestoZXqQ-TjXW_XNJsY6PUs0nfbB7x3l2AMYl0UJFy0IgSpT4mSaQUa-kuMIJ-0OupOnQ3IYr0ruswiyMwZtsDjwpAvuBPOHzinE_WnKgJtOVDm3uvBT03vlr-W94hj8YqpLorjeiAJd-DYG402lFSE=5E6F1183"
const projectId="DC"


export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
        },
         "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
    }

}

await axios.post(endpoint,issueRequestJson,
    {
        auth:{
            username:username,
            password :apiKey 
        },
        headers:{
            'Content-Type':`application/json`
        }
    }

)

}

//Send the POST request

