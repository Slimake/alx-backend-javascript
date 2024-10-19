export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const in8Array = new Int8Array(buffer);
    in8Array[position] = value;
    const dataView = new DataView(buffer);
    return dataView;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
