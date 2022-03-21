package com.factos.service;

import com.factos.domain.users.F_Comment_Repository;
import com.factos.domain.users.fComment;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CommentService {

    @Autowired
    private final F_Comment_Repository commentRepository;

/*    @Transactional
    public List<fBoard> update(UsersUpdateRequestDto requestDto){
        fBoard board = boardRepository.findById(requestDto.getUser_Id()).orElseThrow(() ->
                new IllegalArgumentException("해당 No가 없습니다 No : " + requestDto.getUser_Id()));
        board.update(requestDto.getUser_Name());
        List<fBoard> boardList = new ArrayList<>();
        return boardList;
    }

    public BoardResponseDto findById (String bdNo){
        fBoard entity = boardRepository.findById(bdNo)
                .orElseThrow(() -> new IllegalArgumentException("없다"));
        return new BoardResponseDto(entity);
    }*/

    public List<fComment> findAll (){
        List<fComment> entity = commentRepository.findAll();

        return entity;
    }

    public void deleteAllCommentList(){
        commentRepository.deleteAll();
    }

    public void deleteComment(String cm_No) {
        commentRepository.deleteById(cm_No);
    }
}
