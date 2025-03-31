package org.example.todolist.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.todolist.common.exception.ResourceNotFoundException;
import org.example.todolist.common.mapper.TaskMapper;
import org.example.todolist.dto.TaskDTO;
import org.example.todolist.entity.TaskEntity;
import org.example.todolist.repository.TaskRepository;
import org.example.todolist.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    @Override
    public TaskDTO addNewTask(String title) {
        TaskEntity newTask = TaskEntity.builder()
                .title(title).build();
        TaskEntity taskEntity =taskRepository.save(newTask);
        return TaskMapper.entityToDTO(taskEntity);
    }

    @Override
    public TaskDTO editTask(Long id, String title) {
        Optional<TaskEntity> taskUpdate = taskRepository.findById(id);
        if (taskUpdate.isPresent()){
            TaskEntity taskEntity = taskUpdate.get();
            taskEntity.setTitle(title);
            taskEntity = taskRepository.save(taskEntity);
            return TaskMapper.entityToDTO(taskEntity);
        }
        return null;
    }

    @Override
    public List<TaskDTO> getAllTask() {
        List<TaskEntity> taskEntities = taskRepository.findAll();
        return TaskMapper.entityToDTOs(taskEntities);
    }
}
