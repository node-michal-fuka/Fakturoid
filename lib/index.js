"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("./Client");
var Fakturoid = /** @class */ (function (_super) {
    __extends(Fakturoid, _super);
    function Fakturoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fakturoid.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, 'account.json')];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getBankAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, 'bank_accounts.json')];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/users/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getUsers = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, 'users.json', filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // INVOICES
    Fakturoid.prototype.getInvoices = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, 'invoices.json', filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getRegularInvoices = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, '/invoices/regular.json', filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getProformaInvoices = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, '/invoices/proforma.json', filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getInvoice = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/invoices/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getInvoicePdf = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.download.call(this, "/invoices/".concat(id, "/download.pdf"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.searchInvoices = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/invoices/search.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.updateInvoice = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/invoices/".concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.fireInvoice = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/invoices/".concat(id, "/fire.json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.createInvoice = function (invoice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/invoices.json", invoice)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteInvoice = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/invoices/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // EXPENSES
    Fakturoid.prototype.getExpenses = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, 'expenses.json', filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getExpense = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/expenses/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.searchExpenses = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/expenses/search.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.updateExpense = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/expenses/".concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.fireExpense = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/expenses/".concat(id, "/fire.json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.createExpense = function (invoice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/expenses.json", invoice)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteExpense = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/expenses/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // SUBJECTS
    Fakturoid.prototype.getSubjects = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/subjects.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getSubject = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/subjects/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.createSubject = function (subject) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/subjects.json", subject)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.updateSubject = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/subjects/".concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteSubject = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/subjects/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.searchSubjects = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/subjects/search.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // GENERATOR
    Fakturoid.prototype.getGenerators = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/generators.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getTemplateGenerators = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/generators/template.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getRecurringGenerators = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/generators/recurring.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getGenerator = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/generators/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.updateGenerator = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/generators/".concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.createGenerator = function (generator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/generators.json", generator)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteGenerator = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/generators/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // MESSAGE
    Fakturoid.prototype.createMessage = function (invoiceId, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/invoices/".concat(invoiceId, "/message.json"), message)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // NUMBER FORMATS
    Fakturoid.prototype.getInvoiceNumberFormats = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/number_formats/invoices.json")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // REPORTS
    Fakturoid.prototype.getReports = function (year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/reports/".concat(year, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getPaidReports = function (year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/reports/".concat(year, "/paid.json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getVatReports = function (year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/reports/".concat(year, "/vat.json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // EVENTS
    Fakturoid.prototype.getEvents = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/events.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getPaidEvents = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/events/paid.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getInventoryItems = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_items.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // INVENTORY ITEMS
    Fakturoid.prototype.getArchivedInventoryItems = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_items/archived.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getInventoryItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_items/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.searchInventoryItems = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_items/search.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.archiveInventoryItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/inventory_items/".concat(id, "/archive.json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.unarchiveInventoryItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/inventory_items/".concat(id, "/unarchive.json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.updateInventoryItem = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/inventory_items/".concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.createInventoryItem = function (generator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/inventory_items.json", generator)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteInventoryItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/inventory_items/".concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // INVENTORY MOVES
    Fakturoid.prototype.getInventoryMoves = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_moves.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    Fakturoid.prototype.getInventoryMove = function (inventoryItemId, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/inventory_items/".concat(inventoryItemId, "/inventory_moves/").concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent())
                            .data];
                }
            });
        });
    };
    Fakturoid.prototype.updateInventoryMove = function (inventoryItemId, id, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.patch.call(this, "/inventory_items/".concat(inventoryItemId, "/inventory_moves/").concat(id, ".json"), data)];
                    case 1: return [2 /*return*/, (_a.sent())
                            .data];
                }
            });
        });
    };
    Fakturoid.prototype.createInventoryMove = function (inventoryItemId, generator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.post.call(this, "/inventory_items/".concat(inventoryItemId, "/inventory_moves.json"), generator)];
                    case 1: return [2 /*return*/, (_a.sent())
                            .data];
                }
            });
        });
    };
    Fakturoid.prototype.deleteInventoryMove = function (inventoryItemId, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.delete.call(this, "/inventory_items/".concat(inventoryItemId, "/inventory_moves/").concat(id, ".json"))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    // TODOS
    Fakturoid.prototype.getTodos = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.get.call(this, "/todos.json", filter)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    return Fakturoid;
}(Client_1.default));
exports.default = Fakturoid;
