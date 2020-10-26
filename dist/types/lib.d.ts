/**
 * @template T
 * @implements {IEncoder<T>}
 */
export class EncoderImpl<T> implements Encoder {
    /**
     * @param {T} value
     */
    encode(value: T): Uint8Array;
}
export type IEncoder<T> = import("./interface").Encoder<T>;
//# sourceMappingURL=lib.d.ts.map