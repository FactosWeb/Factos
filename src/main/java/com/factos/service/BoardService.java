package com.factos.service;

import com.factos.domain.users.F_Board_Repository;
import com.factos.domain.users.fBoard;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardService {

    @Autowired
    private final F_Board_Repository boardRepository;

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

    public List<fBoard> findAll (){
        List<fBoard> entity = boardRepository.findAll();

        return entity;
    }

    public void deleteAllBoardList(){
        boardRepository.deleteAll();
    }

    public void deleteBoard(String bdNo) {
        boardRepository.deleteById(bdNo);
    }
}
