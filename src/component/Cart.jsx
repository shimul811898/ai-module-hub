
const Cart = ({carts}) => {
    
  return (
    <div className="p-10">
          <h1 className="text-2xl font-bold">Your Cart</h1> 

          <div className="space-y-5 mt-4">
            {
                carts.map(item => <div className="flex items-center justify-between border rounded-lg p-3" key={item.id} >

                    <div className="flex items-center gap-2">
                        <img className="h-20 w-20 object-contain" src={item.image} alt={item.title} />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <div className="text-3xl font-bold">${item.price}/month</div>
                </div>)
            }
          </div>

    </div>
    );
};

export default Cart;   