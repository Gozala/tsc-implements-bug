'use strict'

/**
 * @template T
 * @implements {IEncoder<T>}
 */
export class EncoderImpl {
  /**
   * @param {T} value 
   */
  encode(value) {
    return new Uint8Array(0)
  }
}


/**
 * @template T
 * @typedef {import('./interface').Encoder<T>} IEncoder
 */
