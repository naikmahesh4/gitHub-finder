//init github
const github = new GitHub;
// init UI
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search add eventListener
searchUser.addEventListener('keyup',(e) =>{
  //get Input Text
  const userText = e.target.value;

  if(userText !== ''){
    //Make Http call
    github.getUser(userText)
    .then((data) => {
     // console.log(data)
      if(data.message === "Not Found"){
        //show alert
        ui.showAlert('User not Found','alert alert-danger');
      }else{
        //Show the Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
    
  }else{
    //Clear Profile
    ui.clearProfile();
  }
})

