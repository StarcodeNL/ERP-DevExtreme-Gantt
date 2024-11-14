import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private checkAndUpdateParentId(task: Task, parentId: number) {
    if (task.parentId !== parentId) {
      task.parentId = parentId;
    }
  }

  private checkAndUpdateTitle(task: Task, title: string): void {
    if (task.title !== title) {
      task.title = title;
    }
  }

  private checkAndUpdateStart(task: Task, start: Date): void {
    if (task.start.getTime() !== start.getTime()) {
      task.start = start;
    }
  }

  private checkAndUpdateEnd(task: Task, end: Date): void {
    if (task.end.getTime() !== end.getTime()) {
      task.end = end;
    }
  }

  private checkAndUpdateProgress(task: Task, progress: number): void {
    if (task.progress !== progress) {
      task.progress = progress;
    }
  }

  // Method to update all properties if there are any differences
  public updateDifferences(
    intitalTaskObject: Task,
    saveEventObject: any
  ): void {
    if (saveEventObject.title) {
      this.checkAndUpdateTitle(intitalTaskObject, saveEventObject.title);
    }
    if (saveEventObject.parentId) {
      this.checkAndUpdateParentId(intitalTaskObject, saveEventObject.parentId);
    }
    if (saveEventObject.start) {
      this.checkAndUpdateStart(intitalTaskObject, saveEventObject.start);
    }
    if (saveEventObject.end) {
      this.checkAndUpdateEnd(intitalTaskObject, saveEventObject.end);
    }
    if (saveEventObject.progress) {
      this.checkAndUpdateProgress(intitalTaskObject, saveEventObject.progress);
    }
  }
}
