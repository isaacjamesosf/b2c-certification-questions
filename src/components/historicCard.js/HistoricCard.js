import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1, 2),
  },
  section2: {
    margin: theme.spacing(1),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  TextHeader: {
    margin: theme.spacing(0),
    lineHeight: theme.spacing(0.1),
  },
  overlineText: {
    margin: theme.spacing(0),
    lineHeight: 0,
  },
}));

function HistoricCard({ historic = [], handleReview }) {
  const classes = useStyles();

  return historic.map((item) => (
    <div className={classes.root}>
      <Divider variant="middle" />
      <>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                className={classes.TextHeader}
                gutterBottom
                variant="h4"
                color={item.percentage < 70 ? "error" : "primary"}
              >
                {item.percentage}%
              </Typography>
              <ListItemText
                className={classes.overlineText}
                secondary={item.date}
                secondaryTypographyProps={{ variant: "overline" }}
              />
            </Grid>
          </Grid>
          <Typography color="secondary">
            {`Incorrects (${item.wrongAnswer.length}): ${item.wrongAnswer.join(
              ", "
            )}`}
          </Typography>
          <Typography color="primary">
            {`Corrects (${
              item.correctAnswer.length
            }): ${item.correctAnswer.join(", ")}`}
          </Typography>
          <Typography>Total questions: {item.questions.length}</Typography>
        </div>

        <div className={classes.section2}>
          <div>
            <Chip
              className={classes.chip}
              clickable
              onClick={() => handleReview(item.questions)}
              label="Review All"
            />
            <Chip
              className={classes.chip}
              label="Review Incorrects"
              color="primary"
              clickable
              onClick={() => handleReview(item.wrongAnswer)}
            />
          </div>
        </div>
      </>
      <Divider variant="middle" />
    </div>
  ));
}

export default HistoricCard;
