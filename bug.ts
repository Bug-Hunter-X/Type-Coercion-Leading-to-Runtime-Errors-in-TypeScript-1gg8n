function add(a: number, b: number): number {
  return a + b;
}

let result = add("1", 2); // This will compile but throw an error at runtime because of type coercion