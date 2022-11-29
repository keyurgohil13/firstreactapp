import './App.css';

function App() {
  var data =
  [
     {
       id: 101,
       name: 'Abacavir',
       quantity: 25,
       price: 150,
       expiry: 2022,
       status: true
     },
     {
       id: 102,
       name: 'Eltrombopag',
       quantity: 90,
       price: 550,
       expiry: 2021,
       status: true
     },
     {
       id: 103,
       name: 'Meloxicam',
       quantity: 85,
       price: 450,
       expiry: 2025,
       status: false
     },
     {
       id: 104,
       name: 'Allopurinol',
       quantity: 50,
       price: 600,
       expiry: 2023,
       status: true
     },
     
     {
      id: 106,
      name: 'Pheny',
      quantity: 80,
      price: 250,
      expiry: 2021,
      status: false
    }
   ];

   return (

        <div className='cards'>
          {
            data.map((d) =>{
              return (
                <div className='card-item'>
                <h6>
                  {d.price}
                </h6>
                <p>
                  {d.name}
                </p>
                <span>
                  {d.quantity}
                </span>
              </div>
              )
            })
          }
        </div>
   )
 
}

export default App;
