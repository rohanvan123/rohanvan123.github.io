import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
        className="container" 
        style={{width: "450px"}}
        >
          <h1 
          className="typed-out">
            Rohan Vanjani
          </h1>
        </div>
        <div 
        style ={{width: '700px', align: "left", fontSize: "22px"}} >
          <p>
            Hello! My name is Rohan Vanjani, and I am a sophomore at the <em className="sp-text">University of Illinois at Urbana-Champaign </em>
            currently pursuing a <i>B.S.</i> in <em className="sp-text">Computer Science & Mathematics</em>. I have a passion for programming 
            and building robust full-stack applications. I am currently seeking opportunities related to <em className="sp-text">Software Engineering</em>, 
            Web Development, and Product Development. On campus, I am currently <em className="sp-text">Software Developer</em> for <a className="sp-text" href="https://uiuc.hack4impact.org/">Hack4Impact</a>,
            where we build full-stack applications for local nonprofits. Additionally, I served as the past <em className="sp-text">Technology Chair</em> for <em className="sp-text">Alpha Kappa Psi</em>, a professional business fraternity. 
            Outside of school, I am an avid tutor and also enjoy weightlifting, investing, and watching basketball. 
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
