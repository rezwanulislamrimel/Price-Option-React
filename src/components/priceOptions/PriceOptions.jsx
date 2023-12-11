import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
    
        const PriceOptions= [
          {
            "id": 1,
            "name": "Basic",
            "features": [
              "Access to cardio equipment",
              "Weightlifting area",
              "Locker room access",
              "Limited gym hours",
              "Basic fitness assessment"
            ],
            "price": 30.0
          },
          {
            "id": 2,
            "name": "Standard",
            "features": [
              "Access to all gym facilities",
              "Group fitness classes",
              "Sauna and steam room",
              "24/7 gym access",
              "Personalized workout plans"
            ],
            "price": 50.0
          },
          {
            "id": 3,
            "name": "Premium",
            "features": [
              "Personal trainer sessions",
              "Nutritional guidance",
              "Exclusive classes",
              "Access to swimming pool",
              "Priority class booking"
            ],
            "price": 80.0
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-8xl">Best Price In our ERA</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                PriceOptions.map(option =>
                    <PriceOption key={option.id} option={option}></PriceOption>
                    )
            }
          </div>
        </div>
    );
};

export default PriceOptions;