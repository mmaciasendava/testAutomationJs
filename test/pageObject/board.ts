import fetch from 'node-fetch';
import { stringify } from 'query-string';

class Board{
    server = 'https://api.trello.com/1/';
    driver;
    titleBoard;

    set setTitleBoard(nameBoard){
        this.titleBoard = nameBoard;
    }

    get gettitleBoard(){        
        return '//div[@title="' + this.titleBoard + '"]';
    }
    async newBoard(name: string){
        let params = {
            "name": name,
            "defaultLabels": true,
            "defaultLists": true,
            "keepFromSource":"none",
            "prefs_permissionLevel":"private",
            "key": globalThis.key,
            "token":globalThis.token
        }
          
        const responseNewPost = await fetch(this.server + 'boards?' + stringify(params) , {
            method: 'POST'
        });
        return await responseNewPost;
    }

    async deleteBoard(id:string){
        let params = {
            "key": globalThis.key,
            "token":globalThis.token
        }
        const responseDeleteBoard = await fetch(this.server + 'boards/' + id + '?' + stringify(params) , {
            method: 'DELETE'
        });
        return await responseDeleteBoard;
    }

    async searchBoards(){
        let params = {
            "key": globalThis.key,
            "token":globalThis.token
        }
        const request = await fetch(this.server + 'members/me/boards?' + stringify(params));
        let boards = await request.json();
        
        return boards;
    }
}
export { Board };