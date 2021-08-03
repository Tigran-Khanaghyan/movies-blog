import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
  root: {
    width: 500,
    position: "fixed",
    bottom: 0,
    backgroundColor: "#171c24",
    zIndex: 1,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style ={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style ={{color: "white"}} label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction style ={{color: "white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
