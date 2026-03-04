export function generateSuggestions(state: any) {
  const suggestions = [];

  if (state.section_80c < 150000) {
    const remaining = 150000 - state.section_80c;
    suggestions.push({
      title: "Increase 80C Investment",
      description: `Invest ₹${remaining} more`,
      estimatedSaving: Math.round(remaining * 0.3),
    });
  }

  if (state.nps_80ccd1b < 50000) {
    const remaining = 50000 - state.nps_80ccd1b;
    suggestions.push({
      title: "Add More to NPS",
      description: `Add ₹${remaining}`,
      estimatedSaving: Math.round(remaining * 0.3),
    });
  }

  return suggestions;
}
