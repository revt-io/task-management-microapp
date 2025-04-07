package org.example.todolist.common.mapper;

import org.example.todolist.dto.TaskDTO;
import org.example.todolist.entity.TaskEntity;

import java.util.List;

public class TaskMapper {
    public static TaskDTO entityToDTO (TaskEntity taskEntity){
        if (taskEntity == null) {
            return null;
        }
        return TaskDTO.builder()
                .id(taskEntity.getId())
                .title(taskEntity.getTitle())
                .build();
    }

    public static List<TaskDTO> entityToDTOs (List<TaskEntity> taskEntities){
        return taskEntities.stream().map(TaskMapper::entityToDTO).toList();
    }
}
