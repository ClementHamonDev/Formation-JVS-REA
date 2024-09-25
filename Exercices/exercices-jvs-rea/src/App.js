import './App.css';
import HelloWorld from './components/Exercices Components/HelloWorld';
import Page from './components/Exercices Components/Page';
import Welcome from './components/Exercices Components/Welcome';
import WelcomeWithProps from './components/Exercices Props/WelcomeWithProps';
import UserInfo from './components/Exercices Props/UserInfo';
import Container from './components/Exercices Props/Container';
import KeyTracker from './components/Exercices Evenement/KeyTracker';
import InputField from './components/Exercices Evenement/InputField';
import HoverBox from './components/Exercices Evenement/HoverBox';
import Button from './components/Exercices Evenement/Button';
import LoginButton from './components/Exercices Condition/LoginButton';
import MessageDisplay from './components/Exercices Condition/MessageDisplay';
import UnreadMessages from './components/Exercices Condition/UnreadMessage';
import ItemList from './components/Exercices Liste/ItemList';
import FilteredItemList from './components/Exercices Liste/FilteredItemList';
import UserList from './components/Exercices Liste/UserList';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About } from './components/Exercices Navigation/Home';
import User from './components/Exercices Navigation/User';
import { UserAbout, UserSettings, UserProfile } from './components/Exercices Navigation/UserProfile';
import Counter from './components/Exercices Hook/Counter';
import DocumentTitle from './components/Exercices Hook/DocumentTitle';
import ContactForm from './components/Exercices Hook/ContactForm';
import ContactFormWithRef from './components/Exercices Hook/ContactFormWithRef ';
import StoreCounter from './components/Exercices Store/StoreCounter';
import TaskList from './components/Exercices Store/TaskList';
import UserData from './components/Exercices Hook/UserData';
import CounterWithTitle from './components/Exercices Hook/CounterWithTitle';
import MouseTracker from './components/Exercices Hook/MouseTracker';
import ProfileForm from './components/Exercices Store/ProfileForm';

function App() {
  return (
    <div className="App">

      <main className="App-main">
        <section>
          <h1 style={{ textDecoration: "underline" }}>Exercices Composant</h1>
          <div>
            <HelloWorld />
            <Welcome />
            <Page />
          </div>
        </section>

        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Props</h1>
          <div>
            <WelcomeWithProps name="John" />
            <UserInfo name="John" age="20" />
            <Container>
              <WelcomeWithProps name="John" />
              <UserInfo name="John" age="20" />
            </Container>
          </div>
        </section>

        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Evenement</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <Button />
            <HoverBox />
            <InputField />
            <KeyTracker />
          </div>
        </section>

        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Condition</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <MessageDisplay isLoggedIn={true} /> {/*affiche Bienvenue*/}
            <MessageDisplay isLoggedIn={false} /> {/*N'affiche rien*/}
            <LoginButton isLoggedIn={true} /> {/*affiche Se déconnecter*/}
            <LoginButton isLoggedIn={false} /> {/*affiche Se connecter*/}
            <UnreadMessages unreadCount={5} /> {/*affiche Vous avez 5 messages non lus*/}
            <UnreadMessages unreadCount={0} /> {/*affiche Aucun nouveau message*/}
          </div>
        </section>

        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Liste</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <ItemList items={["Pomme", "Banane", "Fraise", "Pêche", "Poire"]} />
            <FilteredItemList items={["Pomme", "Banane", "Fraise", "Pêche", "Poire"]} query="P" />
            <UserList users={[{ name: "John" }, { name: "Jane" }, { name: "Doe" }]} />
          </div>
        </section>

        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Navigation</h1>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/user/:id" element={<UserProfile />}>
                <Route path="about" element={<UserAbout />} /> {/*route imbriquée*/}
                <Route path="settings" element={<UserSettings />} /> {/*route imbriquée*/}
              </Route>
            </Routes>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px", color: "white" }}>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/user/123">User 123</Link>
              <Link to="/user/123/about">User 123 About</Link>
              <Link to="/user/123/settings">User 123 Settings</Link>
            </nav>
          </Router>
        </section>


        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Hooks</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <Counter />
            <DocumentTitle />
            <UserData/>
            <ContactForm />
            <ContactFormWithRef />
            <CounterWithTitle/>
            <MouseTracker/>
          </div>
        </section>
        <section>
          <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice Store</h1>
          <div>
            <StoreCounter/>
            <TaskList/>
            <ProfileForm/>
          </div>
        </section>
        <h1 style={{ textDecoration: "underline", marginTop: "100px" }}>Exercice 10</h1>
      </main>
    </div>
  );
}

export default App;
