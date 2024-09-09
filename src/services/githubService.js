// import axios from 'axios';

// class GithubService {
//   constructor() {
//     this.apiClient = axios.create({
//       baseURL: 'https://api.github.com',
//       headers: {
//         'Accept': 'application/vnd.github+json',
//         'X-GitHub-Api-Version': '2022-11-28'
//       },
//     });
//   }

//   setAuthorizationToken() {
//     this.apiClient.defaults.headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
//   }

//   async listUsers(since = 0, perPage = 30) {
//     try {
//       this.setAuthorizationToken(); // Set the token before making the request
//       const response = await this.apiClient.get(`/orgs/JosysCloud/members`, {
//         params: { since, per_page: perPage }
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(`Failed to list GitHub users: ${error.message}`);
//     }
//   }

//   async inviteUserToOrg(email, role='direct_member', teamIds=[]) {
//     try {
//       this.setAuthorizationToken();
//       const response = await this.apiClient.post(`/orgs/JosysCloud/invitations`, {
//         email,
//         role,
//         team_ids: teamIds
//       });
//       return response.data;
//     } catch(error) {
//       throw new Error(`Failed to invite user: ${error.message}`);
//     }
//   }

//   async removeUserFromOrg(username) {
//     try {
//       this.setAuthorizationToken();
//       await this.apiClient.delete(`/orgs/JosysCloud/members/${username}`);
//       return { message: `User ${username} removed from organization` };
//     } catch(error) {
//       console.error(`Failed to remove user: ${error.message}`);
//       throw new Error(`Failed to remove user: ${error.message}`);
//     }
//   }
// }

// export default new GithubService();






import CloudApp from "./cloudApp";
class GithubService extends CloudApp {
  constructor() {
    super('https://api.github.com', {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    });
  }

  listUsers(since = 0, perPage = 30) {
    this.setAuthorizationToken(process.env.GITHUB_TOKEN);
    return this.read(`/orgs/JosysCloud/members`, { since, per_page: perPage });
  }

  inviteUserToOrg(email, role = 'direct_member', teamIds = []) {
    this.setAuthorizationToken(process.env.GITHUB_TOKEN);
    return this.create(`/orgs/JosysCloud/invitations`, { email, role, team_ids: teamIds });
  }

  removeUserFromOrg(username) {
    this.setAuthorizationToken(process.env.GITHUB_TOKEN);
    return this.delete(`/orgs/JosysCloud/members/${username}`);
  }
}

export default new GithubService();