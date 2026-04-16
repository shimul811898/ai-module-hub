import { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);

  console.log(models);

  return (
    <div className="py-20 max-w-6xl mx-auto">
     
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p>one subscription gives you access to all frontier AI models</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {models.map(model => <div key={model.id} className="shadow-lg overflow-hidden border-zinc-300 rounded-lg">
            <div className="flex items-center justify-center h-56 bg-zinc-200">
              <img className="h-40 w-40 object-contain" src={model.image} />
            </div>
            <div className="p-5 space-y-3">
               <h2 className="text-2xl font-bold">{model.title}</h2>
               <p>{model.description}</p>
               <div className="text-2xl font-bold">${model.price}/month</div>
               <button className="btn w-full bg-red-500 text-white rounded-lg mt-5">Subscribe Now </button>
            </div>
            
          </div>)}
      </div>
      

    </div>
  );
};

export default Models;