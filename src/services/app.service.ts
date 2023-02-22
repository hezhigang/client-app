export class AppService {
    public async getBooks(): Promise<any> {
        const response = await fetch('http://localhost:5041/api/Books', {
            method: 'GET',
            mode: 'cors'
        });
        return await response.json();
    }

    public async getSpecficBook(id: any): Promise<any> {
        const response = await fetch('http://localhost:5041/api/Books/'+id, {
            method: 'GET',
            mode: 'cors'
        });
        return await response.json();
    }
}