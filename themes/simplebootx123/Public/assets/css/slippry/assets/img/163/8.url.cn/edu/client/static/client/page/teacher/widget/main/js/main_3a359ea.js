ture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
}

interface HashChangeEvent extends Event {
    newURL: string;
    oldURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
}

interface History {
    length: number;
    state: any;
    back(distance?: any): void;
    forward(distance?: any): void;
    go(delta?: any): void;
    pushState(statedata: any, title?: string, url?: string): void;
    replaceState(statedata: any, title?: string, url?: string): void;
}

declare var History: {
    prototype: History;
    new(): History;
}

interface IDBCursor {
    direction: string;
    key: any;
    primaryKey: any;
    source: any;
    advance(count: number): void;
    continue(key?: any): void;
    delete(): IDBRequest;
    update(value: any): IDBRequest;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
    PREV: string;
    PREV_NO_DUPLICATE: string;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
    PREV: string;
    PREV_NO_DUPLICATE: string;
}

interface IDBCursorWithValue extends IDBCursor {
    value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
}

interface IDBDatabase extends EventTarget {
    name: string;
    objectStoreNames: DOMStringList;
    onabort: (ev: Event) => any;
    onerror: (ev: Event) => any;
    version: number;
    close(): void;
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: any, mode?: string): IDBTransaction;
    addEventListener(type: "abort", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

d