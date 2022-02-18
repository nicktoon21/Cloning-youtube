import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styles from './app.module.scss';
function App() {

  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
