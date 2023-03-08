import React, { FunctionComponent, useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        background: '#16181d',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: 'auto',
    },
    textField: {
        background: '#16181d',
        border: 'none',
        fontSize: '40px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        '& .MuiInputBase-input': {
            textAlign: 'right',
            color: '#f5f5f5'
        },
        '&:focus': {
            outline: 'none',
        },
    },
    button: {
        background: '#f5f5f5',
        borderRadius: '50%',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#666',
        '&:hover': {
            background: '#ebebeb',
        },
    },
    operatorButton: {
        background: '#f5923e',
        borderRadius: '50%',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff',
        '&:hover': {
            background: '#da7a2d',
        },
    },
});

const Calculator: FunctionComponent = () => {
    const [value, setValue] = useState<string>("");
    const classes = useStyles();

    const handleButtonClick = (buttonValue: string): void => {
        switch (buttonValue) {
            case '+/-':
                setValue('-'?.concat(value))
                break;
            case '%':
                const temp = + value / 100
                setValue(temp.toString())
                break;
            default:
                setValue(value + buttonValue)
                break;
        }

    };

    const handleClearButtonClick = (): void => {
        setValue("");
    };

    const handleEqualsButtonClick = () => {
        try {
            // eslint-disable-next-line no-new-func
            const result = new Function(`return ${value}`)();
            setValue(result.toString());
        } catch (error) {
            setValue("Error");
        }
    };


    return (
        <Grid container direction="column" spacing={2} className={classes.root}>
            <Grid item>
                <TextField
                    variant="outlined"
                    fullWidth
                    value={value || '0'}
                    onChange={(event) => setValue(event.target.value)}
                    className={classes.textField}
                />
            </Grid>
            <Grid item container direction="row" spacing={2} >
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleClearButtonClick}
                        className={classes.button}
                    >
                        {value ? 'C' : 'AC'}
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("+/-")}
                        className={classes.button}
                    >
                        +/-
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("%")}
                        className={classes.button}
                    >
                        %
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("/")}
                        className={classes.operatorButton}
                    >
                        ÷
                    </Button>
                </Grid>

                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("7")}
                        className={classes.button}
                    >
                        7
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("8")}
                        className={classes.button}
                    >
                        8
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("9")}
                        className={classes.button}
                    >
                        9
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("*")}
                        className={classes.operatorButton}
                    >
                        *
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("4")}
                        className={classes.button}
                    >
                        4
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("5")}
                        className={classes.button}
                    >
                        5
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("6")}
                        className={classes.button}
                    >
                        6
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("-")}
                        className={classes.operatorButton}
                    >
                        -
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("1")}
                        className={classes.button}
                    >
                        1
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("2")}
                        className={classes.button}
                    >
                        2
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("3")}
                        className={classes.button}
                    >
                        3
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("+")}
                        className={classes.operatorButton}
                    >
                        +
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick("0")}
                        className={classes.button}
                    >
                        0
                    </Button>


                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleButtonClick(".")}
                        className={classes.operatorButton}
                    >
                        .
                    </Button>
                </Grid>

                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleEqualsButtonClick}
                        className={classes.operatorButton}
                    >
                        =
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Calculator;
