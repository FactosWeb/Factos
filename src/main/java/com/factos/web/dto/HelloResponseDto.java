package com.factos.web.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
//선언된 모든 필드의 get메서드 생성
@RequiredArgsConstructor
// 선언된 모든 final필드가 포함된 생성자를 생성, final이 없는 필드는 x

public class HelloResponseDto {
    private final String name;
    private final int amount;
}
