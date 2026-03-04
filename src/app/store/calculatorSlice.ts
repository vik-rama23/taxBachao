import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  // Salary
  annual_ctc: number | "";
  basic_salary: number | "";

  hra_received: number | "";
  rent_paid: number | "";

  // Deductions
  section_80c: number | "";
  nps_80ccd1b: number | "";
  nps_employer_80ccd2: number | "";
  home_loan_interest: number | "";
  health_insurance: number | "";

  // Reimbursements
  mobile_reimbursement: number | "";
  internet_reimbursement: number | "";
  meal_coupons: number | "";

  step: number;
  isCalculated: boolean;
}

const initialState: CalculatorState = {
  annual_ctc: "",
  basic_salary: "",
  hra_received: "",
  rent_paid: "",

  section_80c: "",
  nps_80ccd1b: "",
  nps_employer_80ccd2: "",
  home_loan_interest: "",
  health_insurance: "",

  mobile_reimbursement: "",
  internet_reimbursement: "",
  meal_coupons: "",

  step: 1,
  isCalculated: false
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{
        key: keyof CalculatorState;
        value: number | "";
      }>
    ) {
      const key = action.payload.key;
      console.log("sdfd", key)
      if (key !== "step" && key !== "isCalculated") {
        state[key] = action.payload.value;
      }
      state.isCalculated = false;
    },

    nextStep(state) {
      if (state.step < 3) state.step += 1;
    },

    prevStep(state) {
      if (state.step > 1) state.step -= 1;
    },
    goToStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
  },
});

export const {
  updateField,
  nextStep,
  prevStep,
  goToStep
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
