import React, { useState, useCallback, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";
import { questions } from "../../assets/questions";
import Question from "../../components/Question";
import DropdownNumber from "../../components/DropdownNumber";
import { getHomeStyle } from "../../utils/styles/homeStyle";
import { getQuestions } from "../../utils/questions";
import { Checkbox } from "@material-ui/core";
import HeaderTitle from "../../components/HeadTitle";
import Range from "../../components/Range";

const useStyles = makeStyles((theme) => getHomeStyle(theme));

function PrettyHome({ window }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [b2cQuestions, setB2cQuestions] = useState(questions);
  const [showAnswers, setShowAnswers] = useState(false);
  const [random, setRandom] = useState(false);
  const [questionsQty, setQuestionsQty] = useState(10);
  const [questionsSort, setQuestionsSort] = useState([]);

  const onSelectOption = (questionNumber, selectedOption) => {
    setB2cQuestions((oldState) => ({
      ...b2cQuestions,
      [questionNumber]: {
        ...oldState[questionNumber],
        userAnswer: selectedOption,
      },
    }));
  };

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((old) => !old);
  }, []);

  const handleDropdownQuestionsQty = useCallback((e) => {
    setQuestionsQty(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    const b2cQuestionsArr = Object.keys(b2cQuestions);
    const correctAnswer = b2cQuestionsArr.filter((number) =>
      b2cQuestions[number].answer
        .split(",")
        .every((x) => b2cQuestions[number].userAnswer?.some((y) => x.trim() === y.trim()))
    ).length;

    alert(
      `You got ${correctAnswer} of ${questionsSort.length} questions right`
    );
  }, [b2cQuestions, questionsSort.length]);

  const updateB2cQuestions = useCallback(
    (args) => {
      setQuestionsSort(getQuestions({ ...args, questionsQty, random }));
    },
    [questionsQty, random]
  );

  useEffect(() => {
    updateB2cQuestions();
  }, [questionsQty, random, updateB2cQuestions]);

  const drawer = (
    <div>
      <div className={classes.AppBar} style={{ position: "fixed" }}>
        <Divider />
      </div>
      <Divider />
      <List style={{ textAlign: "center" }}>
        <ListItem>
          <Range classes={classes} onSubmit={updateB2cQuestions} />
          <Divider />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Quantity:`} />
          <DropdownNumber
            value={questionsQty}
            onChange={handleDropdownQuestionsQty}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <Checkbox
            checked={showAnswers}
            onChange={(e) => setShowAnswers(e.target.checked)}
          />
          <ListItemText primary="Show Answers" />
        </ListItem>
        <ListItem>
          <Checkbox
            checked={random}
            onChange={(e) => setRandom(e.target.checked)}
          />
          <ListItemText primary="Random" />
        </ListItem>
        <Divider />
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Divider />
        {questionsSort.map((number) => (
          <Link href={`#${number}`}>
            <ListItem button key={number}>
              <ListItemText primary={`Question ${number}`} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (!b2cQuestions) {
    return null;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <HeaderTitle title="B2C Certification Questions" />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {questionsSort.map((questionNumber) => (
          <Question
            key={questionNumber}
            questionNumber={questionNumber}
            question={b2cQuestions[questionNumber]}
            onSelectOption={onSelectOption}
            showAnswers={showAnswers}
          />
        ))}
      </main>
    </div>
  );
}

export default PrettyHome;
