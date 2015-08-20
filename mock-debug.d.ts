/// <reference path="typings/node/node.d.ts" />
export interface DebugLogger {
    (formatter: any, ...args: any[]): void;
    get?(): string[];
}
export declare function makeMockLogger(): DebugLogger;
