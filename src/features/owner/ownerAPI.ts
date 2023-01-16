// A mock function to mimic making an async request for data
export function fetchOwner(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchOwners() {
  return new Promise<{ data: Array<any> }>((resolve) =>
    setTimeout(() => resolve({ data: ['johan','anna'] }), 500)
  );
}
