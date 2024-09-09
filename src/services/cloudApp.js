import axios from 'axios';
class CloudApp{
  constructor (baseURL,headers={}){
    this.apiClient = axios.create ({
      baseURL,
      headers:{
        'Content-Type':'application/json',
        ...headers,
      }
    })
  }
  setAuthorizationToken(token){
    this.apiClient.default.headers['Authorisation']=`Bearer ${token}`;
  }
  async create(resource,data){
    try{
      console.log(`Creating resource at ${resource}`);
      const response = await this.apiClient.post(resource,data);
      console.log(`Resource created successfully:`, response.data);
      return response.data;
    }
    catch(error){
      console.error(`Failed to create resource at ${resource}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create resource: ${error.message}`);
    }
  }

  async read(resource,params={}){
    try{
      console.log(`Reading resource at ${resource}`);
      const response = await this.apiClient.get(resource,{params});
      console.log(`Resource read successfully:`, response.data);
      return response.data;
    }
    catch(error){
      console.error(`Failed to create resource at ${resource}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create resource: ${error.message}`);
    }
  }

  async update(resource,data){
    try{
      console.log(`Updating resource at ${resource}`);
      const response = await this.apiClient.put(resource,data);
      console.log(`Resource update successfully:`, response.data);
      return response.data;
    }
    catch(error){
      console.error(`Failed to create resource at ${resource}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create resource: ${error.message}`);
    }
  }


  async delete(resource){
    try{
      console.log(`Deleting resource at ${resource}`);
      const response = await this.apiClient.delete(resource);
      console.log(`Resource deleted successfully:`, response.data);
      return response.data;
    }
    catch(error){
      console.error(`Failed to create resource at ${resource}:`, error.response ? error.response.data : error.message);
      throw new Error(`Failed to create resource: ${error.message}`);
    }
  }
}

export default CloudApp;