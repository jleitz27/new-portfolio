import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//importing images
import budget from '../assets/images/budget.png'
// import note from '../assets/images/note.png'
import tipsy from '../assets/images/tipsy.png'
import blog from '../assets/images/blog.png'
import weather from '../assets/images/weather.png'
import beer from '../assets/images/beer.png'
import bookden from '../assets/images/bookden.png'

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
      title: 'Book Den',
      repoName: 'book-den',
      deployedName: 'https://glacial-ridge-11514.herokuapp.com/',
      image: bookden,
      description: "This is a social media site that also uses the Google Books API search engine. The app was based on the MERN stack model with a React front end, MongoDB database, and Node.js/Express.js server and API. In addition to being able to search for books, if signed in, the user can save the books that catch their eye. Later, the user can delete those books once they've been read."
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