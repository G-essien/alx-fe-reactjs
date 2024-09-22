import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="bg-green-500 text-white p-4 text-center">
        <h1 className="text-3xl">GitHub User Search</h1>
      </header>
      <main className="p-6">
        <Search />
      </main>
    </div>
  );
}

export default App;
