import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//importing images
import budget from '../assets/images/budget.png'
import note from '../assets/images/note.png'
import tipsy from '../assets/images/tipsy.png'
import blog from '../assets/images/blog.png'
import weather from '../assets/images/weather.png'
import beer from '../assets/images/beer.png'

const projectData = [
  {
      title: 'Beer Me',
      repoName: 'beer-me',
      deployedName: 'https://fpierrerun.github.io/BeerMe/',
      image: beer,
      description: "Provides data on local breweries status based on searching for a city. Brewery data comes from the Open Brewery API. Location and map data comes from Google Maps API. We also used Bulma for styling."
  },
  {
      title: 'Tech Blog',
      repoName: 'tech-blog',
      deployedName: 'https://frozen-oasis-37527.herokuapp.com/',
      image: blog,
      description: "This project is a CMS-style social networking site where developers can publish posts and comment on other developers post. It uses Express, MySQL, Handlebars, MVC, ORM, and Express. "
  },
  {
      title: 'Tipsy Tech',
      repoName: 'tipsy-tech',
      deployedName: 'https://tipsytech.herokuapp.com/login',
      image: tipsy,
      description: 'An alcoholic drink finding app. This is an exercise in implementing the MVC framework. It uses sequelize, handlebars, and express.'
  },
  {
      title: 'Weather Dashboard',
      repoName: 'weather-dashboard',
      deployedName: 'https://jleitz27.github.io/weather-dashboard/',
      image: weather,
      description: 'Provides data on weather-based status boosts for Pokemon Go. Weather data comes from the openWeather API. Pokemon data comes from the Pokemon Go API, and the PokeAPI. We also used Tailwind for styling.'
  },
  {
      title: 'Budget Tracker',
      repoName: 'budget-tracker',
      deployedName: 'https://quiet-oasis-44993.herokuapp.com/',
      image: budget,
      description: "This is a budget tracking application that allows for offline access and functionality.The user can add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. This is an exercise in implementing offline functionality. It uses the browser's indexDB while offline, and MongoDB while online."
  },
  {
      title: 'Note Taker',
      repoName: 'note-taker',
      deployedName: 'https://whispering-refuge-76567.herokuapp.com/',
      image: note,
      description: "This is a note taking application that can be used to write and save notes. This application uses an Express.js back end and saves to and retrieves data from a JSON file. Write your note title and text then click the save icon in the upper right to save your note. You can retrieve the note by clicking on the title's text in the left column, or delete it by clicking the trash can icon associated with each note."
  },
];



function Projects(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {projectData.map((project, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={project.image} alt={project.title} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={`https://github.com/jleitz27/${project.repoName}`}>GitHub Repo</Card.Link>
              <Card.Link href={project.deployedName}>Deployed Application</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;

// export default GaryPage