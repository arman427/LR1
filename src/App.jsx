import { useState } from 'react'

function App() {
   const [result, setResult] = useState('')
   const [a, setA] = useState('')
   const [b, setB] = useState('')
   const [c, setC] = useState('')

   function checkTriangle(e) {
      e.preventDefault();

      const A = Number(a);
      const B = Number(b);
      const C = Number(c);

      if (!A || !B || !C) {
         setResult('Пожалуйста, введите все стороны треугольника');
         return;
      }

      if (A === B && B === C) {
   // Все стороны равны — проверяем первым
   setResult('Равносторонний треугольник');
} 
else if (A === B || B === C || A === C) {
   // Хотя бы две стороны равны
   setResult('Равнобедренный треугольник');
} 
else {
   // Ни одна сторона не равна другой
   setResult('Разносторонний треугольник');
}
      console.log(result)
   }


   return (
      <>
         <div className='container'>
            <h1>Введите длины сторон треугольника</h1>
            <div className='input-wrapper'>
               <input type="text" placeholder="Сторона A" onChange={(e) => setA(e.target.value)} />
               <input type="text" placeholder="Сторона B" onChange={(e) => setB(e.target.value)} />
               <input type="text" placeholder="Сторона C" onChange={(e) => setC(e.target.value)} />
            </div>
            <div>
               <button onClick={checkTriangle}>Проверить треугольник</button>
            </div>

            {result &&
               <div className='overlay'>
                  <div className='result'>
                     <h2>{result}</h2>
                     <button onClick={() => window.location.reload()}>Попробовать снова</button>
                  </div>
               </div>
            }
         </div>
      </>
   )
}

export default App;
