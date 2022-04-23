"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function* generator(bank1, bank2) {
    while (true) {
        yield random(bank1) + " " + random(bank2);
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const list1 = (yield fs_1.promises.readFile((0, path_1.join)("bank", "list1.txt"), {
            encoding: "utf-8",
        })).split("\r\n");
        const list2 = (yield fs_1.promises.readFile((0, path_1.join)("bank", "list2.txt"), {
            encoding: "utf-8",
        })).split("\r\n");
        const g = generator(list1, list2);
        while (true) {
            console.log(g.next().value);
        }
    });
}
main();
