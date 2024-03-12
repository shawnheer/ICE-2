"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const calculator = __importStar(require("./calculator"));
const promptSync = (0, prompt_sync_1.default)({});
const readInput = () => {
    console.log("Welcome to the calculator. Choose one of the following options");
    console.log("1. add");
    console.log("2. subtract");
    console.log("3. multiply");
    console.log("4. divide");
    console.log("5. exit");
    const option = promptSync(">> ");
    if (option !== "5") {
        console.log("Enter the first number");
        const a = Number(promptSync(">> "));
        console.log("Enter the second number");
        const b = Number(promptSync(">> "));
        let c;
        switch (option) {
            case "1":
                {
                    c = calculator.add(a, b);
                    console.log(`a + b = ${c}`);
                }
                break;
            case "2":
                {
                    c = calculator.subtract(a, b);
                    console.log(`a - b = ${c}`);
                }
                break;
            case "3":
                {
                    c = calculator.multiply(a, b);
                    console.log(`a * b = ${c}`);
                }
                break;
            case "4":
                {
                    c = calculator.divide(a, b);
                    console.log(`a / b = ${c}`);
                }
                break;
        }
        readInput();
    }
};
readInput();
console.log("Thank you for using calculator. Good Bye");
//# sourceMappingURL=index.js.map