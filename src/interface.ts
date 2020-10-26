export interface Encoder<T> {
  encode(value:T): Uint8Array
}
