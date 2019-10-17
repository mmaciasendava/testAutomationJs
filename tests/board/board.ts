import fetch = require('node-fetch');
import { stringify } from 'query-string';
let key = 'ee3e72ac9a486e81d0ccd8e61ae55624';
let token = '056a57ed0c6dd001914d639c8f3ce3c424e755e9e003a8182e7a0b7b20d1d86c';

class Board{
    server = 'https://api.trello.com/1/';
    
    async newBoard(name: string){
        let params = {
            "name": name,
            "defaultLabels": true,
            "defaultLists": true,
            "keepFromSource":"none",
            "prefs_permissionLevel":"private",
            "key": key,
            "token":token
        }
          
        const responseNewPost = await fetch(this.server + 'boards?' + stringify(params) , {
            method: 'POST'
        });
        
        return await responseNewPost.json();
    }

    async deleteBoard(id:string){
        let params = {
            "key": key,
            "token":token
        }
        const responseDeleteBoard = await fetch(this.server + 'boards/' + id + '?' + stringify(params) , {
            method: 'DELETE'
        });
        return await responseDeleteBoard;
    }

    async searchBoards(){
        let params = {
            "key": key,
            "token":token
        }
        const request = await fetch(this.server + 'members/me/boards?' + stringify(params));
        let boards = await request.json();
        
        return boards;
    }
}
export { Board };