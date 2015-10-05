// Generated by dts-bundle v0.3.0

declare module 'typescript-mockify' {
    import { MockBuilder } from "__typescript-mockify/mock/MockBuilder";
    import { Mock } from "__typescript-mockify/mock/Mock";
    import { StubbedFunc } from "__typescript-mockify/mock/StubbedFunc";
    import { IConstructor } from "__typescript-mockify/mock/IConstructor";
    import { ConstructorArguments } from "__typescript-mockify/mock/ConstructorArguments";
    export { MockBuilder, Mock, StubbedFunc, IConstructor, ConstructorArguments };
}

declare module '__typescript-mockify/mock/MockBuilder' {
    import { Mock } from "__typescript-mockify/mock/Mock";
    import { ConstructorArguments } from "__typescript-mockify/mock/ConstructorArguments";
    import { IConstructor } from "__typescript-mockify/mock/IConstructor";
    export class MockBuilder {
        static createInstance<T>(ctor: IConstructor<T>, args?: ConstructorArguments): Mock<T>;
    }
}

declare module '__typescript-mockify/mock/Mock' {
    import { ConstructorArguments } from "__typescript-mockify/mock/ConstructorArguments";
    import { StubbedFunc } from "__typescript-mockify/mock/StubbedFunc";
    export class Mock<T> {
        instance: T;
        args: ConstructorArguments;
        constructor(instance: T, args?: ConstructorArguments);
        setupMethod(func: string): StubbedFunc<T>;
        mapProperty(propertyName: string, value: any): Mock<T>;
    }
}

declare module '__typescript-mockify/mock/StubbedFunc' {
    import Spy = jasmine.Spy;
    import { Mock } from "__typescript-mockify/mock/Mock";
    export class StubbedFunc<T> {
        constructor(func: Function, mock: Mock<T>);
        andReturn(value: any): Mock<T>;
        getSpy(): Spy;
    }
}

declare module '__typescript-mockify/mock/IConstructor' {
    export interface IConstructor<T> {
        prototype: any;
        apply(inst: any, args: Array<any>): void;
    }
}

declare module '__typescript-mockify/mock/ConstructorArguments' {
    export class ConstructorArguments {
        arguments: any;
        map(key: string, value: any): ConstructorArguments;
    }
}
