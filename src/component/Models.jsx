import { use} from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  

  return (
    <div className="py-20 max-w-6xl mx-auto">
     
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p>one subscription gives you access to all frontier AI models</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {models.map(model => <div key={model.id} className="shadow-lg overflow-hidden border-zinc-300 rounded-lg">
           <ModelCard key = {model.id} model = {model} carts={carts} setCarts={setCarts} />
            
          </div>)}
      </div>
      

    </div>
  );
};

export default Models;