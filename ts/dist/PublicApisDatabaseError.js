"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApisDatabaseError = void 0;
class PublicApisDatabaseError extends Error {
    isPublicApisDatabaseError = true;
    sdk = 'PublicApisDatabase';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PublicApisDatabaseError = PublicApisDatabaseError;
//# sourceMappingURL=PublicApisDatabaseError.js.map