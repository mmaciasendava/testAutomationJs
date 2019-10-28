import { Board } from "../pageObject/board";

describe('Find a board recently created in Trello', function () {
    
    it('Create a new board by API', async () => {  
        const board = new Board();  
        let newBoard = await board.newBoard('work from home');        
        let idNew = await newBoard.json();
        console.log("New Board: " + idNew.id);
        expect(newBoard.ok).toBe(true);

        console.log("Search the new board");
        let boards = await board.searchBoards();
        let result = boards.filter((item: { id: string; }) => {
            return item.id == idNew.id;
        })
        expect(result[0].id).toBe(idNew.id);

        console.log("Delete the board created");
        let deleteBoard = await board.deleteBoard(idNew.id);
        console.log("DELETE BOARD: " + deleteBoard.ok);
        expect(deleteBoard.status).toBe(200);

        console.log("Search the deleted board");
        boards = await board.searchBoards();
        result = boards.filter((item: { id: string; }) => {
            return item.id == idNew.id;
        })
        expect(result).toBeNull;
    });
});