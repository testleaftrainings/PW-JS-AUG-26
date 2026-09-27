

//Step1 : Install axios : npm install axios 


/* 
5 points to do API testing in POSTMAN :
1. endpoint
2. CRUD=>POST,GET,... 
3. Authorization : Bearer Token
4. Headers : Content-Type:application/json
5. Body : raw, JSON
*/

import axios from "axios"

async function createIssue() {


   const response = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue",

        /**************Request Body********** */
        {
            "fields": {
                "project": {
                    "key": "AUG"
                },
                "issuetype": {
                    "name": "Bug"
                },
                "summary": "Test case for login functonality created through Playwright API",
                "description": "Checking the login functionality"
            }

        },
        /**************Headers********** */
        {
            headers:{
                
                "Content-Type":"application/json"
        },
                /**************Authorization********** */

        auth:{
            "username": "ravindranr90@gmail.com",
            "password":"ATATT3xFfGF0pgYpbicM-aYsD53Svj_SxZWIzqELkp65azbtv0O5_bwyVK6UAvqj5wqxgB25kR4aRwSEZ8wia1EmDoQtXDW5tcRhCGLuRoyvU0CZlk3d2vFR3y7gP_Y6AYVl2QnC2QNCKtNKRqb64TYhh7KAJIkUQgk2PXEr3fB3jwAc3Lg_QIs=1107DE51"
        }

    }

    )

    console.log(response.data);
    



}


createIssue()