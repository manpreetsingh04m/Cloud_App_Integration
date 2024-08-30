const axios = require('axios');

class calendly {
    constructor(apiKey) {
        this.apiKey = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzI1MDAyNzE0LCJqdGkiOiI0MThkYTA3NC00YjVmLTQxODctYmZkNi02NGYxYmJmOGNkMmUiLCJ1c2VyX3V1aWQiOiI2NGMyZWRlMS1iNjkxLTQ3OTYtYmExMi0zYTYwODY1NDJlN2QifQ.FViDnYSnBqzxwgJkiPn2W2HH9uP0Pn4vO3tGd5gEKmFN4mlCTcnPtEMHq-ghOxl9LNDVhdjLWq4zcn8Z8kdZ1g';
        this.baseURL = 'https://stoplight.io/mocks/calendly/api-docs/395';
    }

    async getUser(uuid) {
        try {
            const response = await axios.get(`${this.baseURL}/users/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error.message);
            throw new Error(`Failed to get user: ${error.message}`);
        }
    }
}

module.exports = calendly;