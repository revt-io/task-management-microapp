package org.example.todolist.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "task")
public class TaskEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    private long id;

    @Column(name="title")
    private String title;
}
