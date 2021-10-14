import { TaskStatus } from '../task-status.enam';
import { IsEnum } from 'class-validator';

export class UpdateStatusTasksDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
