package org.example.todolist.service;

import org.example.todolist.dto.TaskDTO;
import org.example.todolist.entity.TaskEntity;

import java.util.List;

public interface TaskService {
    public TaskDTO addNewTask(String title);
    public TaskDTO editTask(Long id, String title);
    public List<TaskDTO> getAllTask();
}
