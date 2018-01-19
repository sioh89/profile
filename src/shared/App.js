import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import renderHTML from 'react-render-html';
import routes from './routes';
import delay from './utils/charDelay';
import email from './utils/email';
import './App.css';

// Media icons
import linkedInIcon from './linkedin.png';
import gmailIcon from './gmail.png';
import githubIcon from './github.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.location.pathname,
      show: '0',
      email: '0',
    }
    this.getAnimationTags = this.getAnimationTags.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.toggleEmail = this.toggleEmail.bind(this);
  }

  componentDidMount() {
    this.setState({show: 1});
  }

  toggleEmail() {
    console.log('email toggled!')
    this.setState({
      email: '1',
    });
  }

  getEmail() {
    let emailHTML = '';

    for (let i = 0; i < email.length; i++) {
      emailHTML += `<span key=${'email'+i} style="opacity:${this.state.email};transition:opacity 100ms; transition-delay:${i * 70}ms;transition-timing-function:linear;">${email[i]}</span>`
    }

    return emailHTML;
  }

  getAnimationTags(tag, text, key) {
    // Receive text and the tag to surround text with
    let returnText = `<${tag}>`;
    for (let i = 0; i < text.length; i++) {
      const thisKey = tag + key + i;
      returnText += `<span key=${thisKey} style="opacity:${this.state.show};transition:opacity 1300ms;transition-delay:${delay[text.charAt(i)]}ms;transition-timing-function:linear;">${text.charAt(i)}</span>`
    }

    returnText += `</${tag}>`;
    return returnText;
  }

  // <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

  render() {
    return (
      <div className="App">
  
        <div className="App-header" key="appheader">
          <div className="App-header-text" key="appheadertext">
            {renderHTML(this.getAnimationTags('h2', 'Rich Oh', 'name'))}
            <div className="App-header-subtext" key="appheadersubtext">
              <div>{renderHTML(this.getAnimationTags('p', 'a software engineer', 'job'))}</div>
              <div>{renderHTML(this.getAnimationTags('p', 'in los angeles', 'location'))}</div>
            </div>
          </div>

          <div className={`contact-icons fadein${this.state.show === 1 ? ' show' : ''}`}>
            <img className="icon linkedin" src={gmailIcon} onClick={this.toggleEmail}/>
            <a href="https://www.linkedin.com/in/rich-oh" target="_blank"><img className="icon linkedin" src={linkedInIcon}/></a>
            <a href="https://www.github.com/sioh89" target="_blank"><img className="icon linkedin" src={githubIcon}/></a>
          </div>
          
          <div className="email-text">
            {renderHTML(this.getEmail())}
          </div>
        </div>
  
        <div className={`app-body fadein${this.state.show === 1 ? ' show' : ''}`}>
  
          <ul className="menu collection">
            <Link to="/"          className={`collection-item${this.state.currentPage === '/' ? ' active' : ''}`}         onClick={() => this.setState({currentPage:'/'})}>         Home</Link>
            <Link to="/projects"  className={`collection-item${this.state.currentPage === '/projects' ? ' active' : ''}`} onClick={() => this.setState({currentPage:'/projects'})}> Projects</Link>
            <Link to="/lab"       className={`collection-item${this.state.currentPage === '/lab' ? ' active' : ''}`}      onClick={() => this.setState({currentPage:'/lab'})}>      Lab</Link>
          </ul>
  
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </Switch>
  
        </div>
        
      </div>
    );
  }
}

export default withRouter(App);