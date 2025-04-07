package org.example.todolist.service;

import org.example.todolist.common.mapper.TaskMapper;
import org.example.todolist.dto.TaskDTO;
import org.example.todolist.entity.TaskEntity;
import org.example.todolist.repository.TaskRepository;
import org.example.todolist.service.impl.TaskServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TaskServiceImplTest {
    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskServiceImpl taskService;

    private TaskEntity taskEntity;
    private TaskEntity taskEntity2;
    private TaskDTO taskDTO;
    private TaskDTO taskDTO2;
    @BeforeEach
    void setUp(){
        long taskId = 1L;
        taskEntity = new TaskEntity();
        taskEntity.setId(taskId);
        taskEntity.setTitle("task 1");

        taskEntity2 = new TaskEntity();
        taskEntity2.setId(2L);
        taskEntity2.setTitle("task 2");

        taskDTO = new TaskDTO();
        taskDTO.setTitle("task 1");

        taskDTO2 = new TaskDTO();
        taskDTO2.setTitle("task 2");
    }

    @Test
    void getAllTask() {
        // Arrange
        List<TaskEntity> taskList = List.of(taskEntity, taskEntity2);
        when(taskRepository.findAll()).thenReturn(taskList);


        // Act
        List<TaskDTO> result = taskService.getAllTask();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
    }

    @Test
    void addNewTask() {
        // Arrange
        String title = "task 1";
        when(taskRepository.save(any(TaskEntity.class))).thenReturn(taskEntity);

        // Act
        TaskDTO result = taskService.addNewTask(title);

        // Assert
        assertNotNull(result);
        assertEquals(taskDTO.getTitle(), result.getTitle());
    }

    @Test
    void editTask() {
        // Arrange
        String newTitle = "task 1 updated";
        when(taskRepository.findById(taskEntity.getId())).thenReturn(Optional.of(taskEntity));
        when(taskRepository.save(any(TaskEntity.class))).thenReturn(taskEntity);

        taskEntity.setTitle(newTitle);

        // Act
        TaskDTO result = taskService.editTask(taskEntity.getId(), newTitle);

        // Assert
        assertNotNull(result);
        assertEquals(newTitle, result.getTitle());
    }
}
