function foo(a, b) {  // Use a tolerance value to account for floating-point inaccuracies  const tolerance = 0.000001;  return Math.abs(a - b) < tolerance;} 