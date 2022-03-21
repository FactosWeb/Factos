package com.factos.web;

import com.factos.domain.users.F_Board_Repository;
import com.factos.domain.users.F_Users_Repository;
import com.factos.domain.users.fBoard;
import com.factos.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController

public class BoardController {

    @Autowired
    private final BoardService boardService;

/*    @PostMapping("/saveBoard") //view단에서 submit방식으로 호출해야함
    public List<fBoard> update(@RequestBody UsersUpdateRequestDto requestDto){
        return boardService.update(requestDto);
    }*/

/*    @GetMapping("/getBoardList/{BoardNo}")
    public UsersResponseDto findById (@PathVariable String BoardNo){
        return usersService.findById(BoardNo);
    }*/


    @GetMapping("/getBoardAllList")
    public List<fBoard> findAll (){
        return boardService.findAll();
    }

    @PostMapping("/deleteAllBoard")
    public void deleteAlluser(){
        boardService.deleteAllBoardList();
    }

    @PostMapping("/deleteBoard/{BoardNo}")
    public void deleteUser(@PathVariable String BoardNo){
        boardService.deleteBoard(BoardNo);
    }

}
