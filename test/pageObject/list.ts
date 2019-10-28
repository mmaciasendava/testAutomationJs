import fetch from 'node-fetch';
import { stringify } from 'query-string';

class List{
    server = 'https://api.trello.com/1/';
    
    async newList(name: string , idBoard: string){
        let params = {
            "name": name,
            "idBoard": idBoard,
            "key": globalThis.key,
            "token":globalThis.token
        }
          
        const responseNewList = await fetch(this.server + 'Lists?' + stringify(params) , {
            method: 'POST'
        });        
        return await responseNewList;
    }

    async deleteList(id:string){
        let params = {
            "key": globalThis.key,
            "token":globalThis.token
        }
        const responseDeleteList = await fetch(this.server + 'Lists/' + id + '?' + stringify(params) , {
            method: 'DELETE'
        });
        return await responseDeleteList;
    }    
}
export { List };