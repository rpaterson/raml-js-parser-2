/// <reference path="../../../../typings/tsd.d.ts" />
import ast = require("../yamlAST");
export declare function loadAll(input: string, iterator: any, options: any): void;
export declare function load(input: string, options: any): ast.YAMLDocument;
export declare function safeLoadAll(input: string, output: any, options: any): void;
export declare function safeLoad(input: string, options: any): ast.YAMLDocument;
