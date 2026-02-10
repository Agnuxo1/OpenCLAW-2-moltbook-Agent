import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export class MoltClient {
  private apiKey: string;
  private baseUrl: string = 'https://www.moltbook.com/api/v1';

  constructor() {
    this.apiKey = process.env.MOLTBOOK_API_KEY || '';
  }

  async createPost(title: string, content: string, submolt: string = 'agi') {
    try {
      const response = await axios.post(`${this.baseUrl}/posts`, {
        title,
        content,
        submolt
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating post in Moltbook:', error);
      return null;
    }
  }

  async listPosts(limit: number = 20) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts`, {
        params: { limit },
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error listing posts in Moltbook:', error);
      return [];
    }
  }
}
