import { createJiraIssue } from "./jira-integration";

import { TestInfo } from "@playwright/test"

export async function logADefectInJira(testinfo: TestInfo) {

    if (testinfo.status === "failed" || testinfo.status === "timedOut") {
        const summary = `Test ${testinfo.status} : ${testinfo.title}` //Status and title of the script for whivch the issue has to be created
        const description = `Here is the error ${testinfo.error}`
        await createJiraIssue(summary, description)

        console.log(`Jira issue created for ${testinfo.status} test: ${testinfo.title}`);
        console.log(`Error message : ${testinfo.error}`);
        
        
    }else{
        console.log("The test is passed");        
    }



}

