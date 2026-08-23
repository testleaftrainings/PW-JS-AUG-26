

/* View a you tube video: => Main function 
1. adv. => sub function 1
2. related videos  => sub function2*/


// function playVideo(showAdv, showRelatedVideos){ // main function  // here showAdv refers to adv
//                                                             // showRelatedVideos refers to relatedVideos
function playVideo(showRelatedVideos, showAdv){ // main function  // here showRelatedVideos refers to adv
                                                        // showAdv refers to relatedVideos
console.log("Play the youtube video");
showAdv();            // First showAdv == adv ; after swap showAdv==showRelatedVideos
showRelatedVideos(); //  First showRelatedVideos == relatedVideos ; after swap showRelatedVideos== adv
}

function adv(){  // sub function 1

console.log("Play Advertisment");
}

function relatedVideos(){ // sub function 2

console.log("Show related videos");    

}

playVideo(adv,relatedVideos) // here we are to call the playVideo function by clicking the playw button

//Here adv is the reference of adv(){
// Here relatedVideos is the reference of relatedVideos(){