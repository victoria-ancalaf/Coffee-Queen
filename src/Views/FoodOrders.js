import React from "react";
import Header from "../components/Header";
import checkWaiter from "../img/check.png";
import "../styles/orderCheck.css";
import { firebase } from "../firebase";


function Waiter({ waiter, handleSetWaiter}) {
  const setWaiter = handleSetWaiter

  React.useEffect(() => {
    const readOrdersWaiter = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("waiter").orderBy("date", "asc").get();
        const arrayDataWaiter = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayDataWaiter);
        setWaiter(arrayDataWaiter);
      } catch (error) {
        console.log(error);
      }
    };
    readOrdersWaiter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteReadyOrder = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection("waiter").doc(id).delete()

      const arrayFilter = waiter.filter(item => item.id !== id)
      setWaiter(arrayFilter)
    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div className="containerCheck">
      <div className="headerCheck">
        <Header />
      </div>
      <div className="checkBottom">

      {waiter.map((item, lala) => (
        <div key={lala} className="containerOrderCheck">
        <div className="tableWaiter">
          {item.status}
        </div>
        <div className="EndOrder"> PRODUCTOS</div>
        <div className="OrderCheck">
            <ol className="listList">
            {item.productWaiter.map(wait => wait.product.map((waiter, food) => (<li key={lala + waiter + food}>{waiter}</li>)))}
           </ol>
      </div>
      <div className="StylosDate">{item.date}</div>
          <div className="btnReady">
              <button onClick={() => deleteReadyOrder(item.id)} className="button-check" type="submit">
                <img src={checkWaiter} alt="Check" />
              </button>
          </div>
    </div>
      ))}
     
      
      </div>
    </div>
  )
}

export default Waiter;

