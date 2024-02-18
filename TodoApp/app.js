let todo=[];
let req=prompt("Please Enter your Request");
while(true)
{
    if(req=="quit")
    {
        console.log("quiting app");
        break;
    }

    if(req=="list")
    {
        console.log("-----------");
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }

    else if(req=="add")
    {
        let task=prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if(req=="delete")
    {
        let idx=prompt("Please Enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else
    {
        console.log("Wrong Request");
    }
    req=prompt("Please Enter your Request");
    
}
