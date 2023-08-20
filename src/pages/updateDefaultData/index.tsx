import { api } from "~/utils/api"
import { useState } from 'react';
export default function updateDefaultData() {
    const [done, setDone] = useState(false);
    const defaultTaskPriorities = api.todolist;
    const updateDefaultPriorities = defaultTaskPriorities.createDefaultTaskPriorities.useMutation();
    const { data: getDefaultTasks } = defaultTaskPriorities.getDefaultTasks.useQuery();
    console.log(getDefaultTasks)
    if (done === false) {
        updateDefaultPriorities.mutate();
        setDone(true)
    } else {
        return <h1>updates completed</h1>
    }
    return <h1>getDefaultPriorities</h1>
}