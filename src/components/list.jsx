import ListItem from "./listItem.jsx";

const List = ({data, onDelete, onToggleItem}) => {
    return (
        <div className='shopping-list'>
            {data.length ? data.map(item => (
                <ListItem
                    item={item}
                    key={item.id}
                    onDeleteItem={() => onDelete(item.id)}
                    onToggleItemList={() => onToggleItem(item.id)}
                />
            )) : ( <h1 style={{color: '#fff', textAlign:'center'}}>Not found any data</h1> )}
        </div>
    )
}

export default List