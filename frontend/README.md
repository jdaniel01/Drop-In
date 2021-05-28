

Abstract:

'Drop-In' is a "Meet-Up" clone using React, Redux, Express, and Javascript. Here, end-users are able to
search for upcoming events called 'sessions', see details about the session and if they choose, join the session. Users can also create their own session for others to join. 'Drop-In' differs from "Meet-Up" in that the focus is to bring extreme sprts enthusiasts together while sharing their knowledge in the sport. As a User you can identify with different sports (BMX, skateboarding, etc.) and add 'tricks' to their repertoire, which is displayed on their profile page, as both a way to show off their knowledge and to let potential 'riders' know their skillset. This is great because now you know what tricks you can learn from others, teach to others or simply compete against with others. "Drop-In" adds fun to already exciting sports while simultaneously promoting them. Whether you're new to a sport or an experienced shredder, get out there with 'drop-in'.

Seriously... What are you waiting for, go register and get some!



MVPs:

1. Users can register, log-in and log-out. Their (browswer) session persists from page to page. Users can view their 'trick-list' on their profile page or see others' abilities by jumping to theirs.

2. Logged in users can create or join an 'event' called a "session", specifying the contry, city, state, and location of the session. Before joining a session, Users are able to see who has joined, with clickable links to each profile and tricklist, and other details about the session. Session locations are clickable links which redirect the user to the location page where they have a clickable link to create a session at the specific location or join the one they were viewing previously (if coming directly from an event page.).

3. Users are able to search for events based on the names or details of the follow: session, location, city, state, country, riders.  Search results can be ordered by the same and are rendered on the splash page.

4. Users are able to perform CRUD operations on locations they created, their own tricklist. These are viewable on their profile page.

5. Users are able to invite riders to a session. Invitations are shown on a member's profile page and as a notification (number of messages) is displayed in the navigation panel.

6. Users who have joined a session are able to perform CRUD operations on comments they create and read and reply comments that others posts.

7. Users are able to rate a session they have previously attended through a voluntary review survey available after the session is over.


Database design:

A) Tables:

1. Users - the users table is the most important as it's necessary for anything on the website to happen. If there isn't a user there isn't any sessions, riders, tricklists, or communication between riders of any kind.

2. Country - default data. no dependencies.

3. State - default data. Belongs to: Country.

4. City - default data. Belongs to: Country, State.

5. Location - default data.  Belongs to: Country, State, City.

2. Abilities - these are the tricks a user knows (tricklist). Abilities are a joins table between Users and Tricks.




























































# Create React App Template

A no-frills template from which to create React + Redux applications with
[Create React App](https://github.com/facebook/create-react-app).

```sh
npx create-react-app my-app --template @appacademy/react-redux-v17 --use-npm
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
