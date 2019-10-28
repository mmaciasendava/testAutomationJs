import { Board } from "../pageObject/board";
import { List } from "../pageObject/list";

describe('Create a new list and add it to a board', function () {
    
    it('Add lists in a board', async () => {  
        const board = new Board();
        let newBoard = await board.newBoard('Add Lists');        
        let idBoard = await newBoard.json();
        console.log("Board id: " + idBoard.id);
        expect(newBoard.ok).toBe(true);

        const list = new List();
        let listPost = await list.newList("List one", idBoard.id );
        let newList = await listPost.json();
        console.log("New List added " + newList.id);
        expect(listPost.ok).toBe(true);

        console.log("Delete the board created");
        let deleteBoard = await board.deleteBoard(idBoard.id);
        console.log("DELETE BOARD: " + deleteBoard.ok);
        expect(deleteBoard.status).toBe(200);
    });
});