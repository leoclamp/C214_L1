/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './todoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

const taskUpdate = {
  title: 'update_title',
  description: 'update_description',
  targetDate: '01/01/2024',
  type: 'update_type',
  priority: '2',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
        const todoInstance = new ToDoList()
        const invalidValue: any = {
          invalidField: 'invalidValue'
        }
        todoInstance.add(invalidValue)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([])
      })

    test('should update a tasks', () => {
        const todoInstance = new ToDoList()
        todoInstance.updateTask(0, taskUpdate)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([taskUpdate])
    })

    test('should remove a tasks', () => {
        const todoInstance = new ToDoList()
        todoInstance.removeTask(0)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([])
    })
  })
})