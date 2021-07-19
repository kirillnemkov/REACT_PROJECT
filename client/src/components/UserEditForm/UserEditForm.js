import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import InformationForm from './InformationForm/InformationForm';
import SkillsForm from './SkillsForm/SkillsForm';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        marginTop: '15px',
        width: '140px'
    },
    TextField: {
        marginTop: '15px',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        backgroundColor: 'white',
    },
    TextField_first: {
        marginTop: '15px',
        width: '100%',
        backgroundColor: 'white',
    },
    form: {
        width: '70%',
        margin: '0 auto'
    },
    IconButton: {

    }
}));

export default function UserEditForm() {
    const [page, setPage] = useState(0)

    function nextPageButtonHandler(e) {
        setPage(prev => prev = 1)
    }

    function previousPageButtonHandler(e) {
        setPage(prev => prev = 0)
    }

    console.log(page)
    return (
        <div className='form container'>
            {page === 0 ? (<InformationForm nextPageButtonHandler={nextPageButtonHandler} previousPageButtonHandler={previousPageButtonHandler} />) : <SkillsForm nextPageButtonHandler={nextPageButtonHandler} previousPageButtonHandler={previousPageButtonHandler}/>}

        </div>
    );
}