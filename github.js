class GitHub {

  constructor(){
    this.client_id = '246302efffb51c42c15d';
    this.client_secret = '15f17a5948f01c5bd1ecf93ad7efa7d243673e7e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return  {
      profile,
      repos
    } 
  
  }
}