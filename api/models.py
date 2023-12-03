from typing import Union
from pydantic import BaseModel

class Task(BaseModel):
    id: int
    text: str
    day: str
    reminder: bool