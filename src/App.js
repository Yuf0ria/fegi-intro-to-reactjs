import './App.css';
import ProfileCard from './Profile.js';

function App() {
  return (
    <body>
      <div className="App">
        <ProfileCard name = 'Jane Doe' age = '30' location = 'New York'/>
        <ProfileCard name = 'Jane Smith' age = '25' location = 'San Francisco'/>
        <ProfileCard name = 'Ace Reyes' age = '27' location = 'Valenzuela'/>

      </div>
    </body>
  );
}

export default App;
