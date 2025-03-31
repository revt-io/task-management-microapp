package org.example.todolist.dto;


import lombok.*;


@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TaskDTO {
    private Long id;
    private String title;
}
