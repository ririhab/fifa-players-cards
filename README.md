React Players Showcase

A simple React project built using create-react-app, showcasing a list of football players displayed using React Bootstrap cards.
Each player’s profile includes details such as their name, team, nationality, jersey number, age, and a profile image.

Project Requirements:

This project fulfills the following requirements:

1.Setup
    Created using create-react-app.

2.Data
    -A file named players.js contains an array of player objects (9).

    -Each player object includes:
        -name
        -team
        -nationality
        -jerseyNumber
        -age
        -image (URL to the player’s photo)

3.Player Component
    -file named Player.js defines a React component that:
        -Uses React Bootstrap to render a Card.
        -Displays all player attributes.
        -Uses destructuring to extract props.
        -Includes inline styling.
        -Has default props defined for all attributes.

    -PlayersList Component

4.A file named PlayersList.js:
    -Imports the players’ data from players.js.
    -Imports and renders multiple Player components.
    -Uses the .map() function to iterate through the players array.
    -Passes data to Player using props (or the spread -operator).

5.App Component
    The root component (App.js) imports and renders the PlayersList component.
