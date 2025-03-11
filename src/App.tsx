import { useState } from "react";
import Card from "./components/Card";
import { formInputsList, productList } from "./data";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  /*_______State__________ */
  let [isOpen, setIsOpen] = useState(false);

  /*_______Handler__________ */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  /*__________Map_____ */
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col space-y-2">
      <label htmlFor={input.id} className="text-sm font-medium text-gray-600">{input.label}</label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <>
      <main className="container mx-auto px-4">
        <div className="flex justify-end my-4">
          <Button
            className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white shadow-md"
            onClick={open}
          >
            + Add Product
          </Button>
        </div>

        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {renderProductList}
        </div>

        <Modal isOpen={isOpen} close={close} title="Add a new product">
          <form className="space-y-4">
            {renderFormInputList}
            <div className="flex items-center justify-end space-x-2 mt-4">
            <Button className="bg-green-600 hover:bg-green-500 px-4 py-2 text-white rounded-md transition">
              Submit
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 text-white rounded-md transition"
              onClick={close}
            >
              Cancel
            </Button>
          </div>
          </form>
          
        </Modal>
      </main>
    </>
  );
}

export default App;
