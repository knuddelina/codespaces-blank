import { AbstractQueue } from "./AbstractQueue";
import { QueueError, QueueErrorType } from "./Queue.interface";

export class Queue<T> extends AbstractQueue<T> {
    private elements: T[] = [];
    private capacity = 0;

    constructor(){
        super();
    }
    enqueue(item: T): void {
        if(this.length()<this.capacity){
            this.elements.push(item);
        }else{
            throw new QueueError(QueueErrorType.QueueMaxSizeReached, 'zu viele elemente')
        }
    }
    dequeue(): T | undefined {
        if (this.length() != 0){
            let firstElement = this.elements.shift();
            return firstElement;
        }else{
            throw new QueueError(QueueErrorType.QueueMinSizeReached, 'queue ist leer')
        }
    }
    peek(): T | undefined {
        if (this.elements[0]){
            let firstElement = this.elements[0];
            return firstElement;
        }else{
            throw new QueueError(QueueErrorType.QueueMinSizeReached, 'queue ist leer')
        }
    }
    length(): number {
        let lengthElements = this.elements.length;
        return lengthElements;
    }
    setCapacity(capacity: number): void {
        if (capacity >= this.length()){
            this.capacity = capacity;
        }else{
            throw new QueueError(QueueErrorType.QueueTooBig, 'queue ist schon größer als kapazität')
        }
    }
    getCapacity(): number {
        return this.capacity;
    }
}
