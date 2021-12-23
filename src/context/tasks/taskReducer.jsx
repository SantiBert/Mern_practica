import{
    TASKS_PROJECT,
    CREATE_TASK,
    VALID_TASK,
    DELETE_TASK,
    TASK_STATE,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} from '../../types';

export default (state, action ) =>{
    switch(action.type){
        case TASKS_PROJECT:
            return{
                ...state,
                tasksprojects:state.task.filter(m => m.proyectID === action.payload)
            }
        case CREATE_TASK:
                return{
                    ...state,
                    task:[...state.task, action.payload],
                    errortask:false
                }
        case VALID_TASK:
                return{
                    ...state,
                    errortask:true
                }
        case DELETE_TASK:
                return{
                    ...state,
                    task:state.task.filter(z => z.id !== action.payload)
                }
        case TASK_STATE:
        case UPDATE_TASK:
                return{
                    ...state,
                    task:state.task.map(z => z.id === action.payload.id ? action.payload : z)
                }
        case ACTUAL_TASK:
                 return{
                    ...state,
                    selectedTask:action.payload
                }
        case CLEAR_TASK:
            return{
                ...state,
                selectedTask:null
            }
        default:
            return state
    }
}