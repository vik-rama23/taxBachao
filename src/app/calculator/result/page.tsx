// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { useEffect } from "react";
// import SuggestionEngine from "../../../components/calculator/SuggestionEngine";

// export default function ResultsPage() {
//   const dispatch = useDispatch();
//   const state = useSelector((s: RootState) => s.calculator);
//   const API_URL="http://127.0.0.1:8000"

//   useEffect(() => {
//     const calculate = async () => {
//       const res = await fetch(`${API_URL}/calculate`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(state),
//       });

//       const data = await res.json();

//         dispatch(
//             setResults({
//                 old_regime_tax: data.old_tax,
//                 new_regime_tax: data.new_tax,
//                 old_taxable_income: data.old_taxable_income,
//                 new_taxable_income: data.new_taxable_income,
//             })
//         );
//     };

//     calculate();
//   }, []);

//   const isOldBetter =
//     state.old_regime_tax! < state.new_regime_tax!;

//   return (
//     <div className="max-w-4xl mx-auto space-y-6">
//       {/* Comparison */}
//       <div className="grid grid-cols-2 gap-6">
//         <div
//           className={`p-6 rounded-2xl shadow ${
//             isOldBetter ? "bg-blue-600 text-white" : "bg-white"
//           }`}
//         >
//           <p>Old Regime</p>
//           <p className="text-2xl font-bold">
//             ₹ {state.old_regime_tax}
//           </p>
//         </div>

//         <div
//           className={`p-6 rounded-2xl shadow ${
//             !isOldBetter ? "bg-blue-600 text-white" : "bg-white"
//           }`}
//         >
//           <p>New Regime</p>
//           <p className="text-2xl font-bold">
//             ₹ {state.new_regime_tax}
//           </p>
//         </div>
//       </div>

//       {/* Recommendation */}
//       <div className="bg-green-100 p-6 rounded-2xl">
//         <p className="font-semibold">
//           Recommended: {isOldBetter ? "Old" : "New"} Regime
//         </p>
//       </div>

//       {/* Suggestions */}
//       <SuggestionEngine />
//     </div>
//   );
// }
