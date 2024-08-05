// src/BMICalculator.tsx

import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
    const [gender, setGender] = useState<string>('male');
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const calculateBMI = async () => {
        if (weight <= 0 || height <= 0) {
            setError('Weight and height must be positive numbers.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/calculate-bmi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ weight, height, gender }),
            });
            const data = await response.json();
            setBmi(data.bmi);
            setError('');
        } catch (error) {
            setError('An error occurred while calculating BMI.');
        }
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <div>
                <label>
                    Gender : 
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
            <div>
            <label>Height (kg) : </label>
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Height (m) : </label>
                <input
                    type="number"
                    placeholder="Height (m)"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && <h2>Your BMI is: {bmi}</h2>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default BMICalculator;


// // src/BMICalculator.tsx

// import React, { useState } from 'react';

// const BMICalculator: React.FC = () => {
//     const [gender, setGender] = useState<string>('male');
//     const [weight, setWeight] = useState<number>(0);
//     const [height, setHeight] = useState<number>(0);
//     const [bmi, setBmi] = useState<number | null>(null);
//     const [error, setError] = useState<string>('');

//     const calculateBMI = () => {
//         if (weight <= 0 || height <= 0) {
//             setError('Weight and height must be positive numbers.');
//             setBmi(null);
//             return;
//         }

//         const bmiValue = weight / (height * height);
//         setBmi(bmiValue); // Set BMI with 2 decimal places
//         setError('');
//     };

//     return (
//         <div>
//             <h1>BMI Calculator</h1>
//             <div>
//                 <label>
//                     Gender:
//                     <select value={gender} onChange={(e) => setGender(e.target.value)}>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </label>
//             </div>
//             <div>
//                 <input
//                     type="number"
//                     placeholder="Weight (kg)"
//                     value={weight}
//                     onChange={(e) => setWeight(Number(e.target.value))}
//                 />
//             </div>
//             <div>
//                 <input
//                     type="number"
//                     placeholder="Height (m)"
//                     value={height}
//                     onChange={(e) => setHeight(Number(e.target.value))}
//                 />
//             </div>
//             <button onClick={calculateBMI}>Calculate BMI</button>
//             {bmi && <h2>Your BMI is: {bmi}</h2>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default BMICalculator;
