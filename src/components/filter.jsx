const Filter = ({filter, onFilterList}) => {

    const buttons = [
        {id: 'all', label: 'All products'},
        {id: 'completed', label: 'Completed'},
        {id: 'big-sized', label: 'Big size'}
    ]

    return (
        <div className='filter'>
            <div className='btns'>
                {buttons.map(btn => (
                    <button key={btn.id} className={`${filter === btn.id && 'active'}`}
                            onClick={() => onFilterList(btn.id)}
                    >{btn.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter


