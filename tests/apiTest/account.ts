import { Board } from "../board/board";
var assert = require('chai').assert;
const expect = require('chai').expect;
let idNew:string;

describe('Create a new board in Trello', function () {

    it('Create a new board and verify it', async () => {  
        const board = new Board();  
        let newBoard = await board.newBoard('work from home');
        console.log("CASO DE PRUEBA: " + newBoard.id);
        idNew = newBoard.id;
        assert.isNotEmpty(newBoard);

        console.log("Search the new board");
        let boards = await board.searchBoards();
        let result = boards.filter((item: { id: string; }) => {
            return item.id == idNew;
        })
        expect(result[0].id).to.equal(idNew);

        console.log("Delete the board created");
        let deleteBoard = await board.deleteBoard(newBoard.id);
        console.log("DELETE BOARD: " + deleteBoard.ok);
        expect(deleteBoard.status).to.equal(200);

        console.log("Search the deleted board");
        boards = await board.searchBoards();
        result = boards.filter((item: { id: string; }) => {
            return item.id == idNew;
        })
        assert.isEmpty(result);
    });
});