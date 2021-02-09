import './index.scss';

// landing page components
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import LeftNav from './components/LeftNav'

const LandingPage = ()=> {
  return (
    <div className="LandingPage">
        <TopBar />
        <div className="pagesMain">
          <LeftNav></LeftNav>
          <div className="pageContents">
            
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default LandingPage;
