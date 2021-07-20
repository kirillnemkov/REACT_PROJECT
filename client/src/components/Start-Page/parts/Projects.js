import React, { useEffect } from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import { useSelector } from 'react-redux'
import useWindowPosition from '../hook/useWindowPosition'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    rootHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#66eefb',
    },
    icon: {
        color: '#66eefb',
        fontSize: '2rem',
    },
    colorText: {
        color: '#4520ab',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#66eefb',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#4520ab',
        fontSize: '4rem',
    },
    textField: {
        width: '220px',
    },
    select: {
        width: '140px',
    },
}))
export default function () {
    const state = useSelector((state) => state.projects)
    const [searchText, setSearchText] = useState('')
    const [content, setContent] = useState()
    const [flag, setFlag] = useState('')
    const classes = useStyles()
    const checked = useWindowPosition('header')

    useEffect(() => {
        setContent(state)
    }, [state])

    useEffect(() => {
        if (searchText) {
            const sortedContent = state.filter((el) => {
                return el.hashtags.includes(searchText.toLowerCase())
            })
            setContent(sortedContent)
        }
    }, [searchText])

    useEffect(() => {
        if (flag === 'views') {
            const sortItems = [...content].sort((a, b) => b.views - a.views)
            setContent(sortItems)
        } else if (flag === 'news') {
            const sortItems1 = [...content].sort((a, b) => b.data - a.data)
            setContent(sortItems1)
        }
    }, [flag])

    function changeHandler(e) {
        if (e.currentTarget.id === 'searchText') {
            setSearchText(e.currentTarget.value)
        } else {
            if (e.target.value === 'views') {
                setFlag('views')
            } else if (e.target.value === 'news') {
                setFlag('news')
            }
        }
    }

    return (
        <>
            <div className={classes.rootHeader} id="header">
                <Header changeHandler={changeHandler} searchText={searchText} />
            </div>
            <div className={classes.root} id="place-to-visit">
                {content?.map((item) => {
                    return (
                        <ImageCard
                            key={item._id}
                            payload={item}
                            checked={checked}
                        />
                    )
                })}
            </div>
        </>
    )
}
