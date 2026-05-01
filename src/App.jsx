import Head from "./Head";
import LongForm from "./LongForm";
import ShortForm from "./ShortForm";

const App = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Head />
      <LongForm />
      <ShortForm />
    </div>
  );
};

export default App;