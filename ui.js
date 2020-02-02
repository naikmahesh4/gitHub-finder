class UI{
  constructor (){
    this.profile = document.getElementById('profile');

  }
  //Display Profile in UI
  showProfile(user){
  
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view Profile</a>
        </div>
        <div class="col-md-9 ">
          <span class="badge badge-primary">Public Repos:${user.public_repos} </span>
          <span class="badge badge-secondary">Public Gists:${user.public_gists} </span>
          <span class="badge badge-success">Folloers:${user.followers} </span>
          <span class="badge badge-warning">Following:${user.following} </span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location : ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  //show user repos
  showRepos(repos){
    let output = '';

    repos.forEach((repo) =>{
       output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_cont}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
      `;
    });
    //output repos
    document.getElementById('repos').innerHTML = output;
  }
  //Show alert message
  showAlert(message , className){
    //Clear Alert
    this.clearAlert();
    //Create a element div
    const div = document.createElement('div');
    //Add className
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //get Parent
    const container = document.querySelector('.searchContainer');
    //get searchbox
    const search = document.querySelector('.search');
    //Insert Alert
    container.insertBefore(div, search);
    //Time out for alert
    setTimeout(() => {
      this.clearAlert()
    },2000);

  }
  //Clear Alert Message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  //Clear Profile
  clearProfile(){
    this.profile.innerHTML = '';
  }
}