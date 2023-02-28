import Data from '../Data.js';

type OnDomReadyCallback = (mapping: ElementMapping) => void | Promise<void>;
type OnDomErrorCallback = (error: Error, mapping: ElementMapping) => void;
type SlowedInputCallback = (event: Event, slowed: boolean) => void;
type FormSubmissionCallback = (data: unknown) => boolean | Promise<boolean>;
type FormErrorCallback = (error: Error) => void;
type FormFinallyCallback = () => void;
type ValueEvaluationCallback = (element: HTMLInputElement) => boolean;

type HTMLElementCreationOptions = {
    tagName: string,
    classList?: string[],
    textContent?: string,
    innerHTML?: string,
    outerHTML?: string,
    attributes?: { [key: string]: string },
    eventListeners?: { [key: string]: EventListenerOrEventListenerObject },
    childNodes?: Node[]
};

export default class Dom {

    /** Called when the DOM content is loaded */
    private static _onReadyListeners: OnDomReadyCallback[] = [];

    /**
     * Called if an error occurs while executing the {@link Network.onReady} callback.
     */
    private static _onErrorListeners: OnDomErrorCallback[] = [];

    /**
     * Registers a callback to be run when the DOM content loads.
     * @param callback The callback to be run when the DOM content loads.
     */
    public static onReady(callback: OnDomReadyCallback) {
        Dom._onReadyListeners.push(callback);
    }

    /**
     * Registers a callback to be run if an error occurs while executing onReady callbacks.
     * @param callback The callback to be run if an error occurs while executing onReady callbacks.
     */
    public static onError(callback: OnDomErrorCallback) {
        Dom._onErrorListeners.push(callback);
    }

    /**
     * Returns an ElementMapping of all elements in {@link root}.
     * @param root The document to create the mapping for.
     * @returns A mapping of element in {@link root}
     */
    public static getMapping(root: Document | DocumentFragment = document) {
        return new ElementMapping(root);
    }

    /**
     * Creates an HTML element
     * @param options The options used to create the element
     * @returns The created HTML element
     */
    public static create(options: HTMLElementCreationOptions) {
        const element = document.createElement(options.tagName);
        element.classList.add(...Data.get(options, 'classList', []));
        element.textContent = Data.get(options, 'textContent', '');
        if (Data.has(options, 'innerHTML')) {
            element.innerHTML = Data.get(options, 'innerHTML', null);
        }
        if (Data.has(options, 'outerHTML')) {
            element.outerHTML = Data.get(options, 'outerHTML', null);
        }
        if (Data.has(options, 'attributes')) {
            for (const name in options.attributes) {
                element.setAttribute(name, options.attributes[name]);
            }
        }
        if (Data.has(options, 'eventListeners')) {
            for (const type in options.eventListeners) {
                element.addEventListener(type, options.eventListeners[type]);
            }
        }
        if (Data.has(options, 'childNodes')) {
            element.append(...Data.get(options, 'childNodes', []));
        }
        return element;
    }

    /**
     * Checks to see if an element with the ID 'elementId' exists in the DOM.
     * @param elementId The ID of an element to check the existance of.
     * @returns True of an element with the ID 'elementId' exists in the DOM, false otherwise.
     */
    public static exists(elementId: string) {
        return document.getElementById(elementId) !== null;
    }

    /**
     * Removes all children from a node.
     * @param container The node to remove the children from.
     */
    public static clear(container: Node) {
        while (container.lastChild !== null) {
            container.lastChild.remove();
        }
        return container;
    }

    /**
     * Retrieves form data for inputs within a certain section in a form
     * @param section The section to retrieve the form data from. This can be the form itself.
     */
    public static getFormData(section: HTMLElement) {
        const form = section.closest('form');
        if (form === null) {
            throw new Error('Section not in form.');
        }
        const formData = new FormData(form);
        for (const element of form.elements) {
            if (!section.contains(element)) {
                if (element instanceof HTMLInputElement) {
                    formData.delete(element.name);
                }
            }
        }
        return formData;
    }

    /**
     * Populates a form's inputs with data.
     * @param form The form element to populate.
     * @param data The data to populate {@link form} with.
     */
    public static setFormData(form: HTMLFormElement, data: FormData | object) {
        let formData: FormData;
        if (data instanceof FormData) {
            formData = data;
        } else {
            formData = new FormData();
            Data.walk(data, (_, property, path) => {
                if (typeof property !== 'object') {
                    formData.append(path, property);
                }
                return false;
            });
        }
        for (const [key, value] of formData) {
            if (key in form.elements) {
                const input = form.elements[key];
                switch (input.type) {
                    case 'checkbox':
                        input.checked = !!value;
                        break;
                    default:
                        input.value = value;
                        break;
                }
            }
        }
    }

    /**
     * Clears the value of the inputs within a certain section within a form.
     * @param section The section to retrieve the form data from.
     */
    public static clearFormSection(section: HTMLElement) {
        const form = section.closest('form');
        if (form === null) {
            throw new Error('Section not in form.');
        }
        for (const element of form.elements) {
            if (section.contains(element)) {
                if (element instanceof HTMLInputElement) {
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = false;
                    } else {
                        element.value = '';
                    }
                } else if (element instanceof HTMLTextAreaElement) {
                    element.value = '';
                } else if (element instanceof HTMLSelectElement) {
                    element.selectedIndex = 0;
                }
            }
        }
    }

    /**
     * Submits a form whilst triggering HTML's default form validation.
     * @param form A form to submit.
     */
    public static submitFormWithValidation(form: HTMLFormElement) {
        const input = document.createElement('input');
        input.style.display = 'none';
        input.setAttribute('type', 'submit');
        form.appendChild(input);
        input.click();
        input.remove();
    }

    /**
     * Pulses a halo affect around an element to bring attention to it.
     * @param element The element to pluse
     * @param color The color of the pluse
     */
    public static pulse(element: HTMLElement, color: string = '#FF0000') {
        let i = 0;
        const duration = 500;
        const steps = 20;
        const boxShadowBefore = element.style.boxShadow;
        const intervalId = setInterval(() => {
            if (i > 1) {
                element.style.boxShadow = boxShadowBefore;
                clearInterval(intervalId);
            } else {
                i += (duration / 1000) / steps;
                const expand = Math.sin(Math.PI * (4 * i + 1.5)) + 1;
                element.style.boxShadow = `0 0 ${expand * 15}px ${color}`;
            }
        }, duration / steps);
    }

    /**
     * Get a computed value of a css variable.
     * @param name The name of the css variable. (Starts with "--")
     * @returns The computed style of the css variable named {@link name}.
     */
    public static getCssVariable(name: string) {
        return getComputedStyle(document.documentElement).getPropertyValue(name);
    }

    /**
     * Attaches a input listener that only fires a given amount of time after the user has stopped inputting.
     * This is useful to reducing the amount of API requests for suggestions-as-you-type search boxes.
     * @param input The element to attach the listener to
     * @param callback The callback to be run after inputting
     * @param delay The time in milliseconds to wait after the user has inputted until firing the callback 
     */
    public static setSlowedInputListener(input: HTMLInputElement, callback: SlowedInputCallback, delay: number = 500) {
        if (callback) {
            let timeout = null;
            input.oninput = event => {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => callback(event, true), delay);
                callback(event, false);
            };
        } else {
            input.oninput = null;
        }
    }

    public static addAlwaysUppercaseModifier(input: HTMLInputElement) {
        input.addEventListener('input', () => {
            const selectionStart = input.selectionStart;
            const selectionEnd = input.selectionEnd;
            input.value = input.value.toUpperCase();
            input.setSelectionRange(selectionStart, selectionEnd);
        });
    }

    /**
     * Creates a client-side form submission handler
     * @param form The form element to list for submissions on.
     * @param submissionCallback The callback to execute on the submission of {@link form}.
     * @param errorCallback The callback to execute on an error during the execution of {@link submissionCallback}.
     * @param finallyCallback The callback to execute after the execution of {@link submissionCallback} and {@link errorCallback}.
     */
    public static setFormSubmitListener(form: HTMLFormElement, submissionCallback: FormSubmissionCallback, errorCallback: FormErrorCallback = null, finallyCallback: FormFinallyCallback = null) {
        form.onsubmit = (event) => {
            if (event instanceof SubmitEvent) {
                const form = event.target;
                if (form instanceof HTMLFormElement) {
                    const inputs = form.querySelectorAll('input[name]:not(:disabled),textarea[name]:not(:disabled),select[name]:not(:disabled),button[name]:not(:disabled)');
                    const data = {};
                    for (const input of inputs) {
                        if (
                            input instanceof HTMLInputElement
                            || input instanceof HTMLTextAreaElement
                            || input instanceof HTMLSelectElement
                            || input instanceof HTMLButtonElement
                        ) {
                            let value = null;
                            switch (input.type) {
                                case 'checkbox':
                                    if (input instanceof HTMLInputElement) {
                                        if (input.hasAttribute('value')) {
                                            if (input.checked) {
                                                value = input.value;
                                            }
                                        } else {
                                            value = input.checked;
                                        }
                                    }
                                    break;
                                case 'number':
                                    value = parseFloat(input.value);
                                    break;
                                default:
                                    value = input.value;
                                    break;
                            }
                            if (value !== null) {
                                Data.set(data, input.name, value);
                            }
                        }
                    }
                    form.classList.add('loading');
                    Promise.resolve(submissionCallback(data)).then(result => {
                        if (result) {
                            form.reset();
                        }
                    }).catch((error) => {
                        console.warn(error);
                        if (errorCallback !== null) {
                            errorCallback(error);
                        }
                    }).finally(() => {
                        if (finallyCallback !== null) {
                            finallyCallback();
                        }
                        form.classList.remove('loading');
                    });
                }
            }
            return false;
        };
        return {};
    }

    /**
     * Controls the existance of 'templateElement's content in the DOM based on the value of 'controlInput'
     * @param templateElement The element whoes existance is dictated by 'controlInput'
     * @param controlInput The element whoes value controls the existance of 'templateElement'
     * @param valueEvaluationCallback The callback to assess 'controlInput's value. Returns true for templateElement to exists, false otherwise
     */
    public static existanceControlledBy(templateElement: HTMLTemplateElement, controlInput: HTMLInputElement, valueEvaluationCallback: ValueEvaluationCallback = (controlInput) => controlInput.checked) {
        const puppetElements = [...templateElement.content.childNodes];
        const update = () => {
            if (valueEvaluationCallback(controlInput)) {
                templateElement.after(...puppetElements);
            } else {
                templateElement.content.append(...puppetElements);
            }
        };
        controlInput.onchange = update;
        update();
    }

    static loaded: boolean = false;

    static {
        if (window !== undefined && "addEventListener" in window && typeof window.addEventListener === "function") {
            addEventListener('DOMContentLoaded', () => {
                if (!Dom.loaded) {
                    const mapping = Dom.getMapping();
                    Promise.all(Dom._onReadyListeners.map(readyListener => {
                        return readyListener(mapping);
                    })).catch(error => {
                        for (const errorListner of Dom._onErrorListeners) {
                            errorListner(error, mapping);
                        }
                    });
                    Dom.loaded = true;
                }
            });
        }
    }

}

/**
 * Holds a mapping of IDs to their corresponding elements
 * An easy-to-use typed, wrapping of documnet.getElementById()
 */
export class ElementMapping {

    private _rootView: {};

    public constructor(root: Document | DocumentFragment = document) {
        this._rootView = new Proxy({}, {
            get(_, key: string) {
                return root.getElementById(key);
            }
        });
    }

    get elements() { return this._rootView as { [key: string]: HTMLElement }; }
    get anchors() { return this._rootView as { [key: string]: HTMLAnchorElement }; }
    get bases() { return this._rootView as { [key: string]: HTMLBaseElement }; }
    get bodies() { return this._rootView as { [key: string]: HTMLBodyElement }; }
    get brs() { return this._rootView as { [key: string]: HTMLBRElement }; }
    get buttons() { return this._rootView as { [key: string]: HTMLButtonElement }; }
    get canvases() { return this._rootView as { [key: string]: HTMLCanvasElement }; }
    get divs() { return this._rootView as { [key: string]: HTMLDivElement }; }
    get dlists() { return this._rootView as { [key: string]: HTMLDListElement }; }
    get embeds() { return this._rootView as { [key: string]: HTMLEmbedElement }; }
    get forms() { return this._rootView as { [key: string]: HTMLFormElement }; }
    get heads() { return this._rootView as { [key: string]: HTMLHeadElement }; }
    get headings() { return this._rootView as { [key: string]: HTMLHeadingElement }; }
    get hrs() { return this._rootView as { [key: string]: HTMLHRElement }; }
    get htmls() { return this._rootView as { [key: string]: HTMLHtmlElement }; }
    get iframes() { return this._rootView as { [key: string]: HTMLIFrameElement }; }
    get images() { return this._rootView as { [key: string]: HTMLImageElement }; }
    get inputs() { return this._rootView as { [key: string]: HTMLInputElement }; }
    get lis() { return this._rootView as { [key: string]: HTMLLIElement }; }
    get links() { return this._rootView as { [key: string]: HTMLLinkElement }; }
    get menus() { return this._rootView as { [key: string]: HTMLMenuElement }; }
    get metas() { return this._rootView as { [key: string]: HTMLMetaElement }; }
    get mods() { return this._rootView as { [key: string]: HTMLModElement }; }
    get olists() { return this._rootView as { [key: string]: HTMLOListElement }; }
    get optgroups() { return this._rootView as { [key: string]: HTMLOptGroupElement }; }
    get options() { return this._rootView as { [key: string]: HTMLOptionElement }; }
    get paragraphs() { return this._rootView as { [key: string]: HTMLParagraphElement }; }
    get pres() { return this._rootView as { [key: string]: HTMLPreElement }; }
    get quotes() { return this._rootView as { [key: string]: HTMLQuoteElement }; }
    get scripts() { return this._rootView as { [key: string]: HTMLScriptElement }; }
    get selects() { return this._rootView as { [key: string]: HTMLSelectElement }; }
    get slots() { return this._rootView as { [key: string]: HTMLSlotElement }; }
    get spans() { return this._rootView as { [key: string]: HTMLSpanElement }; }
    get styles() { return this._rootView as { [key: string]: HTMLStyleElement }; }
    get tablecells() { return this._rootView as { [key: string]: HTMLTableCellElement }; }
    get tables() { return this._rootView as { [key: string]: HTMLTableElement }; }
    get tablerows() { return this._rootView as { [key: string]: HTMLTableRowElement }; }
    get tablesections() { return this._rootView as { [key: string]: HTMLTableSectionElement }; }
    get templates() { return this._rootView as { [key: string]: HTMLTemplateElement }; }
    get times() { return this._rootView as { [key: string]: HTMLTimeElement }; }
    get titles() { return this._rootView as { [key: string]: HTMLTitleElement }; }
    get ulists() { return this._rootView as { [key: string]: HTMLUListElement }; }

}