import {test, describe, beforeEach} from '@jest/globals'
import { Queue } from './Queue'
import { QueueError, QueueErrorType } from './Queue.interface';

describe('Testfall', () => {
    let mixedTypeQueue = new Queue<string>();
    test("Test alles", () => {
        expect(() => mixedTypeQueue.enqueue("frNow")).toThrowError(QueueError);
        expect(mixedTypeQueue.getCapacity()).toBe(0);
        mixedTypeQueue.setCapacity(10);
        mixedTypeQueue.enqueue("killMePls");
        var test1 = mixedTypeQueue.length()
        var peekaboo = mixedTypeQueue.peek()
        var firstElement = mixedTypeQueue.dequeue()
        var test2 = mixedTypeQueue.length()
        mixedTypeQueue.setCapacity(300);
        var capacity1 = mixedTypeQueue.getCapacity()
        mixedTypeQueue.setCapacity(3)
        var capacity2 = mixedTypeQueue.getCapacity()
        expect(test1).toBe(1)
        expect(peekaboo).toBe('killMePls')
        expect(firstElement).toBe('killMePls')
        expect(test2).toBe(0)
        expect(capacity1).toBe(300)
        expect(capacity2).toBe(3)
    });
    test("error testing", () => {
        mixedTypeQueue.setCapacity(1)
        expect(() => mixedTypeQueue.peek()).toThrowError(QueueError);
        mixedTypeQueue.enqueue("killMePls");
        expect(() => mixedTypeQueue.enqueue("frNow")).toThrowError(QueueError);
        mixedTypeQueue.dequeue()
        expect(() => mixedTypeQueue.dequeue()).toThrowError(QueueError);
        mixedTypeQueue.setCapacity(3)
        mixedTypeQueue.enqueue("killMePls");
        mixedTypeQueue.enqueue("killMePls");
        mixedTypeQueue.enqueue("killMePls");
        expect(() => mixedTypeQueue.setCapacity(2)).toThrowError(QueueError);
    });
});