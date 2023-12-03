from fastapi import FastAPI,  HTTPException
from models import Task
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db: list[Task] = [
    Task(id=1, text='Food Shopping', day='Feb 10th at 3:00pm', reminder=True),
    Task(id=2, text='Doctor appointment', day='Feb 8th at 7:00am', reminder=True),
    Task(id=3, text='Marketing', day='Jan 3rd at 9am', reminder=False),
]

@app.get('/tasks')
def fetch_tasks():
    return db

@app.post('/tasks')
def post_task(task: Task):
    db.append(task)
    return task

@app.get('/tasks/{taskId}')
def fetch_task_by_id(taskId: int):
    if taskId < 0 and taskId > len(db):
        raise HTTPException(status_code=404, detail='{taskId} does not exist.')
    
    for task in db:
        if task.id == taskId:
            return task


@app.put('/tasks/{taskId}')
def put_task(updToggleTask: Task, taskId: int):
    if taskId < 0 and taskId > len(db):
        raise HTTPException(status_code=404, detail='{taskId} does not exist.')
    index = taskId - 1
    db[index] = updToggleTask
    return updToggleTask
    

@app.delete('/tasks/{taskId}')
def delete_task(taskId: int):
    if taskId < 0 and taskId > len(db):
        raise HTTPException(status_code=404, detail='{taskId} does not exist.')
    # taskIndex = len(db) - 1
    # taskId = db[taskIndex].id
    index = taskId - 1
    filteredTasks = db.pop(index)
    return db
   