import Todo from './Todo';

const Content = (props) => {

    return (
        <main>
            <div className="container">
                <div className='todo-container'>
                    {props.todos.length === 0 ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}><h2>No Todo Lists Remaining</h2></div> :
                        props.todos.map((todo) => {
                            return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Content