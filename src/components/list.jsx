import ListItem from "./listItem.jsx";

const List = ({data, onDelete, onToggleItem}) => {
    return (
        <div className='shopping-list'>
            {data.map(item => (
                <ListItem
                    item={item}
                    key={item.id}
                    onDeleteItem={() => onDelete(item.id)}
                    onToggleItemList={() => onToggleItem(item.id)}
                />
            ))}
        </div>
    )
}

export default List