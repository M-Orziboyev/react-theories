const List = ({number, title, id}) => {
    return (
        <div className='shopping-list'>
            <div className='list-item'>
                <div className='item-info'>
                    <h1>{id}</h1>
                    <span>{number}</span>
                    <p>{title}</p>
                </div>
                <div className='item-actions'>
                    <span className='check'>&#10003;</span>
                    <span className='times'>&times;</span>
                </div>
            </div>
        </div>
    )
}

export default List