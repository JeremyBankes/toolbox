/**
 * A set of semantic errors for your easy server side development!
 */
export namespace Error {

    export const Original = global.Error;

    /**
     * For when something goes very wrong.
     */
    export class Fatal extends Original {

        public constructor(message?: string) {
            super(message);
        }

    }

    /**
     * For use for features that haven't been implemented yet.
     */
    export class Unimplemented extends Fatal {

        public constructor() {
            super("This feature has not been implemented.");
        }

    }

    /**
     * For use to indicate networks errors whilst using the HTTP protocol.
     */
    export class Http extends Original {

        protected _code: number;

        public constructor(code: number, message?: string) {
            super(message);
            this.name = this.constructor.name;
            this._code = code;
        }

        public get code() {
            return this._code;
        }

    }

    /**
     * For use to indicate the server made a mistake over the HTTP protocol.
     */
    export class Server extends Http {

        public constructor(message?: string) {
            super(500, message);
        }

    }

    /**
     * For use to indicate the user made a mistake over the HTTP protocol.
     */
    export class User extends Http {

        public constructor(message?: string) {
            super(400, message);
        }

    }

    /**
     * Used to indicate that the user attempted to perform an action that requires authentication over the HTTP protocol.
     */
    export class Authentication extends User {

        public constructor(message?: string) {
            super(message);
            this._code = 403;
        }

    }

    /**
     * Used to indicate that the user attempted to perform an action that they didn't have the correct authorization level for over the HTTP protocol.
     * This is used instead of {@link Authentication} if the user identified themselves (I.E. signed in) but didn't have permission to perform an action.
     */
    export class Authorization extends User {

        public constructor(message?: string) {
            super(message);
            this._code = 401;
        }

    }

    /**
     * Used to indicate that the user requested a resource that couldn't be found over the HTTP protocol.
     */
    export class NotFound extends User {

        public constructor(message?: string) {
            super(message);
            this._code = 404;
        }

    }

    /**
     * Used to indicate that the user made too many requested successive requests in too short of a time for a resource over the HTTP protocol.
     */
    export class RateLimit extends User {

        public constructor(message?: string) {
            super(message);
            this._code = 429;
        }

    }

}