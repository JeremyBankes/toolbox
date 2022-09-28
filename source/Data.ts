type ObjectFilterPredicate = (target: any, property: any, path: string, level: number) => boolean;
type ValueValidationPredicate = (value: any) => boolean;

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
export default class Data {

    /**
     * Checks to see if a given {@link target} object has a given {@link path}.
     * @param target The target object.
     * @param path The path to check the existance of.
     * @returns True if {@link target} has {@link path}.
     */
    public static has(target: any, path: string | (string | number | symbol)[]) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return target !== undefined && target !== null;
        } else {
            const key = path.shift();
            if (typeof target === 'object' && target !== null && key in target) {
                return Data.has(target[key], path);
            } else {
                return false;
            }
        }
    }

    /**
     * Finds a retrieves a value at {@link path} in {@link target} object.
     * @param target The target object.
     * @param path The path to retrieve a value from.
     * @param fallback A value to fallback on if {@link path} couldn't be found.
     * @returns The value in {@link target} at {@link path}, or {@link fallback} if {@link path} can't be found.
     */
    public static get<FallbackType>(target: any, path: string | (string | number | symbol)[], fallback: FallbackType = undefined): FallbackType {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            if (target === undefined || target === null) {
                return fallback;
            } else {
                return target as FallbackType;
            }
        } else {
            const key = path.shift();
            if (typeof target === 'object' && target !== null && key in target) {
                return Data.get(target[key], path, fallback);
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
    public static getOrThrow(target: any, path: string | (string | number | symbol)[], validator: ValueValidationPredicate = (value: any) => value !== null && value !== undefined) {
        const value = Data.get(target, path, null);
        if (!validator(value)) {
            throw new Error(`Failed to find valid ${path} value in ${JSON.stringify(target)}. "${value}" value failed validation predicate.`);
        }
        return value;
    }

    /**
     * Sets a {@link value} in a {@link target} object at {@link path}.
     * @param target The target object.
     * @param path The path to set {@link value} at.
     * @param value The value to be set.
     */
    public static set(target: any, path: string | (string | number | symbol)[], value: any) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length > 0) {
            const key = path.shift();
            if (path.length === 0) {
                target[key] = value;
            } else {
                if (typeof target[key] !== 'object' && target[key] !== null) {
                    target[key] = path.length > 0 && !isNaN(parseInt(path[0].toString())) ? [] : {};
                }
                Data.set(target[key], path, value);
            }
        }
    }

    /**
     * Removes a value at {@link path} in {@link target}.
     * @param target The target object.
     * @param path The path of the value to remove from {@link target}.
     * @returns The removed value, or null if no value was removed.
     */
    public static remove(target: any, path: string | (string | number | symbol)[]) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return null;
        }
        const key = path.shift();
        if (path.length === 0) {
            const deleted = target[key];
            delete target[key];
            return deleted;
        } else if (key in target) {
            Data.remove(target[key], path);
        }
    }

    /**
     * Creates a copy of {@link target}.
     * @param target The target object to clone.
     * @param deep True to perform a deep copy, false to perform a shallow copy.
     * @returns A copy of {@link target}.
     */
    public static clone<TargetType extends object>(target: TargetType, deep: boolean = false): TargetType {
        if (deep) {
            const objectClone = Array.isArray(target) ? [] : {};
            Data.walk(target, (_, property, path) => {
                if (typeof property !== 'object') {
                    Data.set(objectClone, path, property);
                } else if (property === null) {
                    Data.set(objectClone, path, null);
                } else if (Object.keys(property).length === 0) {
                    Data.set(objectClone, path, Array.isArray(property) ? [] : {});
                }
                return false;
            });
            return objectClone as TargetType;
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
    public static walk(target: any, callback: WalkObjectCallback, path: string = '', level: number = 0) {
        for (const key in target) {
            const value = target[key];
            const valuePath = path === '' ? key : path + '.' + key;
            callback(target, value, valuePath, level);
            if (typeof value === 'object' && value !== null) {
                Data.walk(value, callback, valuePath, level + 1);
            }
        }
    }

    /**
     * Flattens an object's nested hierarchy.
     * I.E. { name: { first: 'Jeremy', last: 'Bankes' } } -> { 'name.first': 'Jeremy', 'name.last': 'Bankes' }
     * 
     * @param target The target object
     * @returns A flattend version of {@link target} without any nesting.
     */
    public static flatten(target: any) {
        const flattenedTarget: any = {};
        Data.walk(target, (_, property, path) => {
            if (typeof property !== 'object' || property instanceof Date) {
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
    public static hierarchize(target: any) {
        const object: any = {};
        for (const key in target) {
            Data.set(object, key, target[key]);
        }
        return object;
    }

    /**
     * Converts any nested properties in {@link target} that can be parsed as numbers to numbers.
     * @param target 
     * @returns A copy of {@link target} with all of its properties that can be parsed as numbers, parsed as numbers.
     */
    public static numberize(target: any): any {
        target = Data.clone(target, true);
        Data.walk(target, (_, property, path) => {
            if (typeof property === 'string' && /^-?[0-9.]+$/.test(property)) {
                const attemptedNumber = parseFloat(property);
                if (!isNaN(attemptedNumber)) {
                    Data.set(target, path, attemptedNumber);
                }
            }
            return false;
        });
        return target;
    }

    /**
     * Ensures that {@link target} has a value at {@link path} with the same type of {@link fallback}.
     * If the value at {@link path} in {@link target} does not exist, or has a differing type than {@link fallback}, {@link fallback} will take it's place.
     * @param target The target object.
     * @param path The path to ensure has a valid value of the same type as {@link fallback}.
     * @param fallback The value to fallback to at {@link path} in {@link target} to if it doesn't already exist.
     * @returns The value at {@link path} in {@link target}.
     */
    public static ensure<TargetType extends any>(target: TargetType, path: string, fallback: TargetType): TargetType {
        if (!Data.has(target, path) || typeof Data.get(target, path) !== typeof fallback) {
            Data.set(target, path, fallback);
        }
        return Data.get(target, path);
    }

    /**
     * Validates that {@link data} matches the given {@link schema}.
     * The hierarchy of {@link schema} represents the hierarchy that {@link data} should match.
     * The values of {@link schema} represent the types that the values in {@link data} should match. (Evaluated by typeof) 
     * 
     * I.E.
     * data   = { name: { first: 'Jeremy', last: 'Bankes' }, age: 21       }
     * schema = { name: { first: 'string', last: 'string' }, age: 'number' }
     * 
     * @param data The target object to validate.
     * @param schema The schema that {@link data} should match.
     * @param error If true, throws a validation error if the schema isn't matched.
     * @returns True if validation is passed, false otherwise.
     */
    public static validate(data: any, schema: any, error: boolean = true): boolean {
        const failures = [];
        Data.walk(schema, (target, property, path) => {
            if (typeof property === 'string') {
                if (!Data.has(data, path)) {
                    failures.push(`Missing path "${path}".`);
                } else {
                    const type = typeof Data.get(data, path);
                    if (type !== property) {
                        failures.push(`Incorrect data type for "${path}". (Expected "${property}", got "${type}").`);
                    }
                }
                return true;
            }
            return false;
        });
        if (failures.length === 0) {
            return true;
        } else if (error) {
            failures.push('Validation failed.');
            throw new Error(failures.join(' '));
        } else {
            return false;
        }
    }

    /**
     * Filters nested properties from {@link target} based on {@link predicate}.
     * @param target The target object to filter.
     * @param predicate The predicate to determine which properties to filter. Return true to keep property, false to filter it.
     * @returns A copy of {@link target} with its properties filtered based on {@link predicate}.
     */
    public static filter(target: any, predicate: ObjectFilterPredicate) {
        const filteredObject: any = Data.clone(target, true);
        Data.walk(target, (target, property, path, level) => {
            if (!predicate(target, property, path, level)) {
                Data.remove(filteredObject, path);
                return true;
            }
            return false;
        });
        return filteredObject;
    }

    /**
     * Used to optionally include {@link value}'s properties when defining an inline object. 
     * @param condition The condition to be checked.
     * @param value The object with properties to include in an inline object definition if {@link condition} is met.
     * @returns The given {@link value} if {@link condition} is met, an empty array otherwise.
     */
    public static conditional<ValueType extends any[] | any>(condition: boolean, value: ValueType): ValueType {
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

}