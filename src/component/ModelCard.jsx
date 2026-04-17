import { useState } from "react";


const ModelCard = ({ model, carts, setCarts  }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        setIsSubscribed(true);
        setCarts([...carts, model])
    } 
    return (
        <div>
            <div className="flex items-center justify-center h-56 bg-zinc-200">
                <img className="h-40 w-40 object-contain" src={model.image} />
            </div>
            <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold">{model.title}</h2>
                <p>{model.description}</p>
                <div className="text-2xl font-bold">${model.price}/month</div>
                <button className="btn w-full bg-red-500 text-white rounded-lg mt-5" onClick={handleSubscription}>
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;