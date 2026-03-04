export interface ValidationErrors {
  [key: string]: string;
}


export function validateSalary(data: any): ValidationErrors {
  const errors: ValidationErrors = {};

  // Required + Positive checks
  if (!data.annual_ctc || data.annual_ctc <= 0) {
    errors.annual_ctc = "Annual CTC must be greater than 0";
  }

  if (data.basic_salary < 0) {
    errors.basic_salary = "Basic salary cannot be negative";
  }

  if (data.hra_received < 0) {
    errors.hra_received = "HRA cannot be negative";
  }

  if (data.rent_paid < 0) {
    errors.rent_paid = "Rent paid cannot be negative";
  }

  // Logical checks
  if (data.basic_salary > data.annual_ctc) {
    errors.basic_salary =
      "Basic salary cannot exceed Annual CTC";
  }

  if (data.hra_received > data.annual_ctc) {
    errors.hra_received =
      "HRA cannot exceed Annual CTC";
  }

  if (data.rent_paid > data.annual_ctc) {
    errors.rent_paid =
      "Rent paid cannot exceed Annual CTC";
  }

  return errors;
}

export function validateInvestment(data: any): ValidationErrors {
  const errors: ValidationErrors = {};

  if (data.section_80c < 0) {
    errors.section_80c = "Cannot be negative";
  }
  if (data.section_80c > 150000) {
    errors.section_80c =
      "Maximum allowed under 80C is ₹1,50,000";
  }

  if (data.nps_80ccd1b < 0) {
    errors.nps_80ccd1b = "Cannot be negative";
  }
  if (data.nps_80ccd1b > 50000) {
    errors.nps_80ccd1b =
      "Maximum allowed under 80CCD(1B) is ₹50,000";
  }

  if (data.nps_employer_80ccd2 < 0) {
    errors.nps_employer_80ccd2 = "Cannot be negative";
  }

  if (data.home_loan_interest < 0) {
    errors.home_loan_interest = "Cannot be negative";
  }
  if (data.home_loan_interest > 200000) {
    errors.home_loan_interest =
      "Maximum claim for self-occupied house is ₹2,00,000";
  }

  if (data.health_insurance < 0) {
    errors.health_insurance = "Cannot be negative";
  }
  if (data.health_insurance > 100000) {
    errors.health_insurance =
      "Health insurance seems unusually high";
  }

  return errors;
}

export function validateBeforeCalculation(data: any) {
  return {
    ...validateSalary(data),
    ...validateInvestment(data),
  };
}
