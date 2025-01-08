import Navigation from "../components/Navigation";
import Header from "../components/Header";
import PageContent from "../components/PageContent";

function App() {

  return (
    <section className="page-content">
      <Navigation />
      <div className="body-content">
        <Header />
        <PageContent />
      </div>
    </section>
  )
}

export default App
