function getUser() {
    return new Promise((resolve, reject) => {
        console.log("Getting user details...");
        resolve({ roll: "21" });
    });
}

function getSubject(user) {
    return new Promise((resolve, reject) => {
        console.log("Getting subject for roll:", user.roll);
        resolve({ subid: "EN-1" });
    });
}

function getMarks(subject) {
    return new Promise((resolve, reject) => {
        console.log("Getting marks for subject:", subject.subid);
        resolve(95);
    });
}


getUser()
  .then(getSubject)
  .then(getMarks)
  .then(result => console.log("Final Marks:", result))
  .catch(err => console.log("Error:", err));
