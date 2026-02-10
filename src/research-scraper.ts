import axios from 'axios';

export class ResearchScraper {
  async searchArxiv(query: string, limit: number = 5) {
    try {
      const url = `http://export.arxiv.org/api/query?search_query=all:${query}&start=0&max_results=${limit}`;
      const response = await axios.get(url);
      // Basic XML parsing logic should be here or use a lib. 
      // For this standalone version, we'll simulate or use simple regex as a placeholder
      return response.data; 
    } catch (error) {
      console.error('Error searching Arxiv:', error);
      return [];
    }
  }

  async getPapersFromAuthor(authorName: string) {
    return this.searchArxiv(`au:${authorName.replace(/ /g, '+')}`);
  }
}
