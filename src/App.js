import tw from 'twin.macro'

function App() {
  return (
    <>
      <Text>Hello, World!</Text>
      <Text>Awesome</Text>
    </>
  );
}

export default App;

const Text = tw.h1`bg-red-500	p-10 my-4 mx-auto rounded text-white w-1/3 text-center`;
