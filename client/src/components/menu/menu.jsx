export default function Menu() {
    const [arrPages, setArrPages] = useState([])
    const dispatch = useDispatch()

    const { page, pages } = useSelector(state => state)

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= pages; i++) {
            arr.push(i)
        }
        setArrPages(arr)
    }, [pages])

    const changePageFunct = (p) => {
        dispatch(changePage(Number(p)))
    }

    // console.log(page)

    return (
        <div className='div_menu'>
            <p>Páginas</p>
            {page!==1 && <button onClick={()=>dispatch(decreasePage())}>anterior</button>}
            {
                //all pages, and active page
                arrPages.map((p, index) => {
                    return <button key={p}
                        className='button'
                        onClick={() => changePageFunct(p)}>{p}</button>
                })
            }
            {page!==pages && <button onClick={()=>dispatch(increasePage())}>siguiente</button>}
        </div>
    )
}

/* case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case INCREASE_PAGE:
            return {
                ...state,
                page: state.page < state.pages ? state.page + 1 : state.page
            }
        case DECREASE_PAGE:
            return {
                ...state,
                page: state.page > 1 ? state.page - 1 : state.page
            }
*/
//!  reducer (arriba)

/*
    export function changePage(page){
        return {
            type: CHANGE_PAGE,
            payload: page
        }
    }
    export function increasePage(){
        return {
            type: INCREASE_PAGE
        }
    }

    export function decreasePage(){
        return {
            type: DECREASE_PAGE
        }
    }
*/
//! ACTIONS