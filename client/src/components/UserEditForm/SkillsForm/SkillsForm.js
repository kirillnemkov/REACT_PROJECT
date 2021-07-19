import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import UserEditSlider from '../UserEditSlider/UserEditSlider';
import { useState } from 'react';


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

const SkillsForm = ({ previousPageButtonHandler, nextPageButtonHandler }) => {
    const classes = useStyles();
    const [skills, setSkills] = useState({
        JavaScript: false,
        React: false,
        NodeJS: false,
        Vue: false,
        Angular: false,
        HBS: false,
        Pyton: false,
        Haskel: false,
    });

    const [inputValue, setInputValue] = useState({ JavascriptValue: 0, NodeJSValue: 0, VueValue: 0, ReactValue: 0, AngularValue: 0, HBSValue: 0, PytonValue: 0, HaskelValue: 0 })
    const { JavaScript, React, NodeJS, Vue, Angular, HBS, Pyton, Haskel } = skills;

    const handleSkillChange = (event) => {
        setSkills({ ...skills, [event.target.name]: event.target.checked });
    };

    const handleSliderChange = (e, value) => {
        setInputValue({ ...inputValue, [e.currentTarget.id || e.target.ariaLabel]: value })
    }


    console.log(inputValue)
    console.log(skills)

    function onSubmit(e) {
        e.preventDefault()
        console.log(e)
        const obj = { ...inputValue }
        console.log(obj)
    }

    return (
        <>
            <form onSubmit={onSubmit} className={classes.form} noValidate autoComplete="off">
                <div className={styles.formContainer}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Выбери</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={JavaScript}
                                        onChange={handleSkillChange}
                                        name="JavaScript"
                                    />
                                }
                                label="JavaScript"
                            />
                            {JavaScript ? (<UserEditSlider aria='JavascriptValue' id={'JavascriptValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.JavascriptValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={NodeJS}
                                        onChange={handleSkillChange}
                                        name="NodeJS"
                                    />
                                }
                                label="NodeJS"
                            />
                            {NodeJS ? (<UserEditSlider aria='NodeJSValue' id={'NodeJSValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.NodeJSValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Vue}
                                        onChange={handleSkillChange}
                                        name="Vue"
                                    />
                                }
                                label="Vue"
                            />
                            {Vue ? (<UserEditSlider aria={'VueValue'} id={'VueValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.VueValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={React}
                                        onChange={handleSkillChange}
                                        name="React"
                                    />
                                }
                                label="React"
                            />
                            {React ? (<UserEditSlider aria={'ReactValue'} id={'ReactValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.ReactValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Angular}
                                        onChange={handleSkillChange}
                                        name="Angular"
                                    />
                                }
                                label="Angular"
                            />
                            {Angular ? (<UserEditSlider aria={'AngularValue'} id={'AngularValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.AngularValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={HBS}
                                        onChange={handleSkillChange}
                                        name="HBS"
                                    />
                                }
                                label="HBS"
                            />
                            {HBS ? (<UserEditSlider aria={'HBSValue'} id={'HBSValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.HBSValue} />) : null}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Pyton}
                                        onChange={handleSkillChange}
                                        name="Pyton"
                                    />
                                }
                                label="Pyton"
                            />
                            {Pyton ? (<UserEditSlider aria={'PytonValue'} id={'PytonValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.PytonValue} />) : null}

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Haskel}
                                        onChange={handleSkillChange}
                                        name="Haskel"
                                    />
                                }
                                label="Haskel"
                            />
                            {Haskel ? (<UserEditSlider aria={'HaskelValue'} id={'HaskelValue'} handleClickChange={handleSliderChange} handleSliderChange={handleSliderChange} inputValue={inputValue.HaskelValue} />) : null}
                        </FormGroup>
                    </FormControl>
                    <div className={styles.button_group}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type='submit'
                            className={classes.button}
                            endIcon={<CheckIcon />}
                        >
                            Сохранить
                        </Button>
                        <div className={styles.IconButtons}>
                            <Button onClick={previousPageButtonHandler}>
                                <IconButton className={classes.IconButton} aria-label="delete" disabled color="primary">
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Button>
                            <Button onClick={nextPageButtonHandler}>
                                <IconButton aria-label="delete" disabled color="primary">
                                    <ChevronRightIcon />
                                </IconButton>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SkillsForm