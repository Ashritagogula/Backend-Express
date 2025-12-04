function getUserDetails(id, callback){
    console.log("getting the user details", id);
    callback({ userroll: "21" });
}

function getUserSubjectDetails(userroll, callback){
    console.log("Getting user subject details by roll number", userroll.userroll);
    callback({ subid: "en-1" });
}

function getUserMarks(subid){
    console.log("getting user marks with subid:", subid.subid);
}

getUserDetails("123", function(user){
    getUserSubjectDetails(user, function(subject){
        getUserMarks(subject);
    });
});
