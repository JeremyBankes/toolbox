type ObjectWithPath<Path extends string, Type = any> = (
    Path extends `${infer Head}.${infer Tail}` ? (
        { [Key in Head]: ObjectWithPath<Tail, Type> }
    ) : (
        { [Key in Path]: Type }
    )
);

type ObjectWithOptionalPath<Path extends string, Type = any> = (
    Path extends `${infer Head}.${infer Tail}` ? (
        { [Key in Head]?: ObjectWithOptionalPath<Tail, Type> }
    ) : (
        { [Key in Path]?: Type }
    )
);

type TypeAtPath<Target, Path extends string> = (
    Path extends `${infer Head}.${infer Tail}` ? (
        Target extends { [Key in Head]: any } ? TypeAtPath<Target[Head], Tail> : undefined
    ) : (
        Target extends { [Key in Path]: any } ? Target[Path] : undefined
    )
);

interface WalkObjectCallback {

    /**
     * @param target The direct parent object of {@link property}. (Not necessarily the object being walked.)
     * @param property The value of a property within {@link target}.
     * @param path A string representing the path to {@link property} in the object being walked.
     * @param level The depth of {@link property} within the object being walked.
     * @returns True representing being finished with {@link property}, and to stop traversing its keys. False to continute.
     */
    (target: any, property: any, path: string, level: number): boolean;

}

/**
 * A data manipulation module primarily used for reading and altering objects.
 */
export namespace Data {

    /**
     * Checks to see if a given {@link target} object has a given {@link path}.
     * @param target The target object.
     * @param path The path to check the existance of.
     * @returns True if {@link target} has {@link path}.
     */
    export function has<Path extends string>(target: any, path: Path): target is ObjectWithPath<Path> {
        const pieces = path.split(".");
        const key = pieces.shift();
        if (key === undefined) {
            return target !== undefined && target !== null;
        } else {
            if (typeof target === "object" && target !== null && key in target) {
                return has(target[key], pieces.join("."));
            } else {
                return false;
            }
        }
    }

    /**
     * Finds a retrieves a value at {@link pieces} in {@link target} object.
     * @param target The target object.
     * @param pieces The path to retrieve a value from.
     * @returns The value in {@link target} at {@link pieces}, or undefined if {@link pieces} can't be found.
     */
    export function get<Target, Path extends string>(target: Target, path: Path): TypeAtPath<Target, Path> | undefined;
    /**
     * Retrieves a value at {@link pieces} in {@link target} object.
     * @param target The target object.
     * @param pieces The path to retrieve a value from.
     * @param fallback A value to fallback on if {@link pieces} couldn't be found.
     * @returns The value in {@link target} at {@link pieces}, or {@link fallback} if {@link pieces} can't be found.
     */
    export function get<Target, Path extends string, Fallback>(target: Target, path: Path, fallback: Fallback): Exclude<TypeAtPath<Target, Path>, undefined> | Fallback;
    export function get(target: any, path: string, fallback?: any) {
        const pieces = path.split(".");
        const key = pieces.shift();
        if (key === undefined) {
            if (target === undefined || target === null) {
                return fallback;
            } else {
                return target;
            }
        } else {
            if (typeof target === "object" && target !== null && key in target) {
                if (pieces.length > 0) {
                    return Data.get(target[key], pieces.join("."), fallback);
                } else {
                    return target[key];
                }
            } else {
                return fallback;
            }
        }
    }

    /**
     * Finds a retrieves a value at {@link path} in {@link target} or throws and error if the value fails validation by {@link validator}.
     * @param target The target object.
     * @param path The path to retrieve a value from.
     * @param validator A predicate to validate the value found at {@link path}.
     * @returns The value found at {@link path} in {@link target}.
     */
    export function getOrThrow<Target, Path extends string>(target: Target, path: Path): TypeAtPath<Target, Path> {
        const value = Data.get(target, path, undefined);
        if (value === undefined) {
            throw new Error(`Failed to find valid ${path} value in ${JSON.stringify(target)}. "${value}" value failed validation predicate.`);
        }
        return value;
    }

    /**
     * Sets a {@link value} in a {@link target} object at {@link pieces}.
     * @param target The target object.
     * @param pieces The path to set {@link value} at.
     * @param value The value to be set.
     * @returns True if the target is updated, false otherwise.
     */
    export function set<Path extends string, Value>(target: any, path: Path, value: Value): target is ObjectWithPath<Path, Value> {
        const pieces = path.split(".");
        const key = pieces.shift();
        if (key !== undefined) {
            if (pieces.length === 0) {
                target[key] = value;
            } else {
                if (typeof target[key] !== "object" && target[key] !== null) {
                    target[key] = pieces.length > 0 && !isNaN(parseInt(pieces[0].toString())) ? [] : {};
                }
                Data.set(target[key], pieces.join("."), value);
            }
        }
        return true;
    }

    /**
     * Removes a value at {@link pieces} in {@link target}.
     * @param target The target object.
     * @param pieces The path of the value to remove from {@link target}.
     * @returns The removed value.
     */
    export function remove<Target extends ObjectWithPath<Path, any>, Path extends string>
        (target: Target, path: Path): TypeAtPath<Target, Path> {
        const pieces = path.split(".");
        const key = pieces.shift();
        if (key !== undefined) {
            if (pieces.length === 0) {
                const deleted = target[key];
                delete target[key];
                return deleted;
            } else if (key in target) {
                return Data.remove(target[key], pieces.join("."));
            }
        }
        throw new Error(`Failed to remove "${path}" from ${JSON.stringify(target)}.`);
    }

    /**
     * Creates a copy of {@link target}.
     * @param target The target object to clone.
     * @param deep True to perform a deep copy, false to perform a shallow copy.
     * @returns A copy of {@link target}.
     */
    export function clone<Target extends object>(target: Target, deep: boolean = false): Target {
        if (deep) {
            const objectClone = Array.isArray(target) ? [] : {};
            Data.walk(target, (_, property, path) => {
                if (typeof property !== "object") {
                    Data.set(objectClone, path, property);
                } else if (property === null) {
                    Data.set(objectClone, path, null);
                } else if (Object.keys(property).length === 0) {
                    Data.set(objectClone, path, Array.isArray(property) ? [] : {});
                }
                return false;
            });
            return objectClone as Target;
        } else {
            return { ...target };
        }
    }

    /**
     * Walks across the nested properties of {@link target} and calls {@link callback} for every property.
     * @param target The target object.
     * @param callback The callback to be executed for every nested property in {@link target}.
     * @param path The path to start walking in {@link target}.
     * @param level The level of nesting from the starting path in {@link target}.
     */
    export function walk(target: any, callback: WalkObjectCallback, path: string = "", level: number = 0) {
        for (const key in target) {
            const value = target[key];
            const valuePath = path === "" ? key : path + "." + key;
            const finished = callback(target, value, valuePath, level);
            if (!finished && typeof value === "object" && value !== null) {
                Data.walk(value, callback, valuePath, level + 1);
            }
        }
    }

    /**
     * Flattens an object's nested hierarchy.
     * I.E. { name: { first: "Jeremy", last: "Bankes" } } -> { "name.first": "Jeremy", "name.last": "Bankes" }
     * 
     * @param target The target object
     * @returns A flattend version of {@link target} without any nesting.
     */
    export function flatten(target: any) {
        const flattenedTarget: any = {};
        Data.walk(target, (_, property, path) => {
            if (typeof property !== "object" || property instanceof Date) {
                flattenedTarget[path] = property;
                return true;
            }
            return false;
        });
        return flattenedTarget;
    }

    /**
     * Converts a flattened object back into an object with a nested hierarchy.
     * @param target
     * @returns a hierarchized version of {@link target} with a nested hierarchy.
     */
    export function hierarchize(target: any) {
        const object: any = {};
        for (const key in target) {
            Data.set(object, key, target[key]);
        }
        return object;
    }

    /**
     * Used to optionally include {@link value}'s properties when defining an inline object. 
     * @param condition The condition to be checked.
     * @param value The object with properties to include in an inline object definition if {@link condition} is met.
     * @returns The given {@link value} if {@link condition} is met, an empty array otherwise.
     */
    export function conditional<ValueType extends any[] | any>(condition: boolean, value: ValueType): ValueType {
        if (condition) {
            return value;
        } else {
            if (Array.isArray(value)) {
                return [] as ValueType;
            } else {
                return {} as ValueType;
            }
        }
    }

    export function assert(condition: boolean, message: string = "Assertion failed."): asserts condition {
        if (!condition) {
            throw new Error(message);
        }
    }

}

const a = {
    person: {
        name: {
            first: "Jeremy",
            last: "Bankes"
        }
    }
}