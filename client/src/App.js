import Navbar from "./components/Navbar";
import PostCom from "./components/Posts/postsComp";
import Post from './components/Form/Post'
import './App.css'

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container main__app ">
        <PostCom />
        <Post/>
      </div>
    </div>
  );
}

export default App;
