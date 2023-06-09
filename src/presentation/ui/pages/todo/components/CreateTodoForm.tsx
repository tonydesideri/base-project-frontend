import * as React from 'react'
import { useClearTodos } from '../../../../../../usecases/todo/useClearTodos.usecases'
import { useCreateTodo } from '../../../../../../usecases/todo/useCreateTodo.usecases'
import { useNotification } from '../../../../../services/useNotification'

export function CreateTodoForm() {
  const notify = useNotification()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const formRef = React.useRef<HTMLFormElement>(null)

  const createTodo = useCreateTodo()

  const clearTodos = useClearTodos()

  const handleCreate = async () => {
    const title = inputRef.current?.value

    if (!title) {
      notify.error('Title is required.')
      return
    }

    const baseData = { completed: false, userId: 1 }

    createTodo.mutate(
      { ...baseData, title },
      {
        onSuccess: () => {
          formRef.current?.reset()
        },
      },
    )
  }

  const handleClear = () => {
    clearTodos.mutate()
  }

  return (
    <fieldset>
      <legend>Create New</legend>
      <form ref={formRef}>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handleCreate}>
          {createTodo.isLoading ? 'Creating..' : 'Create New'}
        </button>
        <button type="button" onClick={handleClear}>
          {createTodo.isLoading ? 'Creating..' : 'Clear List'}
        </button>
      </form>
    </fieldset>
  )
}
