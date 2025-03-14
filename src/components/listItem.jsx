const ListItem = (props) => {
    const { item, onDeleteItem, onToggleItemList } = props
    return (
        <div key={item.id} className={`list-item ${item.active && 'active'}`}>
            <div className='item-info'>
                <span>{item.number}</span>
                <p>{item.title}</p>
            </div>
            <div className='item-actions'>
                <span className='check' onClick={onToggleItemList}>&#10003;</span>
                <span className='times' onClick={onDeleteItem}>&times;</span>
            </div>
        </div>
    )
}

export default ListItem