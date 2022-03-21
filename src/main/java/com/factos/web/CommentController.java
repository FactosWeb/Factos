package com.factos.web;

import com.factos.domain.users.fBoard;
import com.factos.domain.users.fComment;
import com.factos.service.BoardService;
import com.factos.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController

public class CommentController {

    @Autowired
    private final CommentService commentService;

/*    @PostMapping("/saveBoard") //view단에서 submit방식으로 호출해야함
    public List<fBoard> update(@RequestBody UsersUpdateRequestDto requestDto){
        return boardService.update(requestDto);
    }*/

/*    @GetMapping("/getBoardList/{BoardNo}")
    public UsersResponseDto findById (@PathVariable String BoardNo){
        return usersService.findById(BoardNo);
    }*/


    @GetMapping("/getCommentAllList")
    public List<fComment> findAll (){
        return commentService.findAll();
    }

    @PostMapping("/deleteAllComment")
    public void deleteAllComment(){
        commentService.deleteAllCommentList();
    }

    @PostMapping("/deleteComment/{CommentNo}")
    public void deleteComment(@PathVariable String BoardNo){
        commentService.deleteComment(BoardNo);
    }
}
