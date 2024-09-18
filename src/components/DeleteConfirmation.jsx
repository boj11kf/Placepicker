import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

/* 
  Ha egy komponensben igy hasznaljuk a useEffect-et,
  es a megadott dependencia (onConfirm) egy fuggveny,
  akkor az a kesobbiekben meg okozhat kellemetlensegeket,
  teljesitmeny romlast.

  Mi torténik ujrarendereleskor?
  Amikor egy szulokomponens ujra renderelodik, 
  valóban ujra meghivja a gyermekkomponenseket is, 
  de nem minden ujrarendereles jar egyutt a DOM frissitesevel. 
  A React hasznalja a Virtual DOM-ot, ami optimalizalja a tenyleges DOM-ba irast. 
  A Virtual DOM osszehasonlitja a korabbi es az uj változatokat 
  (ez az ugynevezett diff algoritmus), es csak akkor modositja 
  a valodi DOM-ot, ha a valtozasok szuksegesek. 

  Megoldas: 
  const onConfirm = React.useCallback(() => {
  // logika itt
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm]);

*/
const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("timer set");
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
      console.log("timer clear");
    }
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar max={TIMER}/>
    </div>
  );
}
