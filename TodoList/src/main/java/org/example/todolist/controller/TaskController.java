package org.example.todolist.controller;

import lombok.RequiredArgsConstructor;
import org.example.todolist.common.exception.ArgumentNotValidException;
import org.example.todolist.common.exception.ResourceNotFoundException;
import org.example.todolist.dto.TaskDTO;
import org.example.todolist.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    @PostMapping("/task")
    public ResponseEntity<TaskDTO> addNewTask(@RequestBody TaskDTO taskDTO){
        String title = taskDTO.getTitle();
        if (title == null || title.trim().isEmpty()) {
            throw new ArgumentNotValidException("Title cannot be null or empty");
        }
        TaskDTO taskResult = taskService.addNewTask(title);
        return ResponseEntity.status(HttpStatus.OK).body(taskResult);
    }

    @PutMapping ("/task")
    public ResponseEntity<TaskDTO> editTask(@RequestBody TaskDTO taskDTO) {
        String title = taskDTO.getTitle();
        Long id = taskDTO.getId();
        if (title == null || title.trim().isEmpty()) {
            throw new ArgumentNotValidException("Title cannot be null or empty");
        }
        TaskDTO taskResult = taskService.editTask(id, title);
        return ResponseEntity.status(HttpStatus.OK).body(taskResult);
    }

    @GetMapping("")
    public ResponseEntity<List<TaskDTO>> getBoard() {
        List<TaskDTO> taskDTO = taskService.getAllTask();
        if (taskDTO.isEmpty()) {
            throw new ResourceNotFoundException("No tasks found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(taskDTO);
    }
}
