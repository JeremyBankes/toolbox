# A JavaScript/TypeScript Toolbox
A utility library delivering many quality of life improvements to both browser and node environments.

# API Documentation
## Classes

<dl>
<dt><a href="#ElementMapping">ElementMapping</a></dt>
<dd><p>Holds a mapping of IDs to their corresponding elements
An easy-to-use typed, wrapping of documnet.getElementById()</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#get">get(name)</a> ⇒</dt>
<dd><p>Retrieves a cookie by name.</p>
</dd>
<dt><a href="#getJson">getJson(name)</a> ⇒</dt>
<dd><p>Retrieves a JSON cookie by name.</p>
</dd>
<dt><a href="#getAll">getAll()</a> ⇒</dt>
<dd><p>Retrieves all cookies and returns each key, value pair as an object.</p>
</dd>
<dt><a href="#set">set(name, value)</a></dt>
<dd><p>Sets a cookie named <a href="name">name</a> to <a href="value">value</a>.</p>
</dd>
<dt><a href="#setJson">setJson(name, value)</a></dt>
<dd><p>Sets a cookie named <a href="name">name</a> to <a href="value">value</a> as JSON.</p>
</dd>
<dt><a href="#delete">delete(name)</a></dt>
<dd><p>Deletes a cookie named <a href="name">name</a>.</p>
</dd>
<dt><a href="#onReady">onReady(callback)</a></dt>
<dd><p>Registers a callback to be run when the DOM content loads.</p>
</dd>
<dt><a href="#onError">onError(callback)</a></dt>
<dd><p>Registers a callback to be run if an error occurs while executing onReady callbacks.</p>
</dd>
<dt><a href="#getMapping">getMapping(root)</a> ⇒</dt>
<dd><p>Returns an ElementMapping of all elements in <a href="root">root</a>.</p>
</dd>
<dt><a href="#create">create(options)</a> ⇒</dt>
<dd><p>Creates an HTML element</p>
</dd>
<dt><a href="#exists">exists(elementId)</a> ⇒</dt>
<dd><p>Checks to see if an element with the ID &#39;elementId&#39; exists in the DOM.</p>
</dd>
<dt><a href="#clear">clear(container)</a></dt>
<dd><p>Removes all children from a node.</p>
</dd>
<dt><a href="#getFormData">getFormData(section)</a></dt>
<dd><p>Retrieves form data for inputs within a certain section in a form</p>
</dd>
<dt><a href="#setFormData">setFormData(form, data)</a></dt>
<dd><p>Populates a form&#39;s inputs with data.</p>
</dd>
<dt><a href="#clearFormSection">clearFormSection(section)</a></dt>
<dd><p>Clears the value of the inputs within a certain section within a form.</p>
</dd>
<dt><a href="#submitFormWithValidation">submitFormWithValidation(form)</a></dt>
<dd><p>Submits a form whilst triggering HTML&#39;s default form validation.</p>
</dd>
<dt><a href="#pulse">pulse(element, color)</a></dt>
<dd><p>Pulses a halo affect around an element to bring attention to it.</p>
</dd>
<dt><a href="#getCssVariable">getCssVariable(name)</a> ⇒</dt>
<dd><p>Get a computed value of a css variable.</p>
</dd>
<dt><a href="#setSlowedInputListener">setSlowedInputListener(input, callback, delay)</a></dt>
<dd><p>Attaches a input listener that only fires a given amount of time after the user has stopped inputting.
This is useful to reducing the amount of API requests for suggestions-as-you-type search boxes.</p>
</dd>
<dt><a href="#setFormSubmitListener">setFormSubmitListener(form, submissionCallback, errorCallback, finallyCallback)</a></dt>
<dd><p>Creates a client-side form submission handler</p>
</dd>
<dt><a href="#existanceControlledBy">existanceControlledBy(templateElement, controlInput, valueEvaluationCallback)</a></dt>
<dd><p>Controls the existance of &#39;templateElement&#39;s content in the DOM based on the value of &#39;controlInput&#39;</p>
</dd>
<dt><a href="#isBrowser">isBrowser()</a> ⇒</dt>
<dd><p>Determines if the current runtime is a browser.</p>
</dd>
<dt><a href="#request">request(url, body, headers)</a> ⇒</dt>
<dd><p>Sends a <a href="method">method</a> request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#get">get(url, parameters, headers)</a> ⇒</dt>
<dd><p>Sends a post request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#post">post(url, body, headers)</a> ⇒</dt>
<dd><p>Sends a post request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#put">put(url, body, headers)</a> ⇒</dt>
<dd><p>Sends a put request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#patch">patch(url, body, headers)</a> ⇒</dt>
<dd><p>Sends a patch request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#delete">delete(url, body, headers)</a> ⇒</dt>
<dd><p>Sends a delete request with optional body data and headers.
Uses the fetch API and <a href="Network.defaults">Network.defaults</a></p>
</dd>
<dt><a href="#has">has(target, path)</a> ⇒</dt>
<dd><p>Checks to see if a given <a href="target">target</a> object has a given <a href="path">path</a>.</p>
</dd>
<dt><a href="#get">get(target, path, fallback)</a> ⇒</dt>
<dd><p>Finds a retrieves a value at <a href="path">path</a> in <a href="target">target</a> object.</p>
</dd>
<dt><a href="#getOrThrow">getOrThrow(target, path, validator)</a> ⇒</dt>
<dd><p>Finds a retrieves a value at <a href="path">path</a> in <a href="target">target</a> or throws and error if the value fails validation by <a href="validator">validator</a>.</p>
</dd>
<dt><a href="#set">set(target, path, value)</a></dt>
<dd><p>Sets a <a href="value">value</a> in a <a href="target">target</a> object at <a href="path">path</a>.</p>
</dd>
<dt><a href="#remove">remove(target, path)</a> ⇒</dt>
<dd><p>Removes a value at <a href="path">path</a> in <a href="target">target</a>.</p>
</dd>
<dt><a href="#clone">clone(target, deep)</a> ⇒</dt>
<dd><p>Creates a copy of <a href="target">target</a>.</p>
</dd>
<dt><a href="#walk">walk(target, callback, path, level)</a></dt>
<dd><p>Walks across the nested properties of <a href="target">target</a> and calls <a href="callback">callback</a> for every property.</p>
</dd>
<dt><a href="#flatten">flatten(target)</a> ⇒</dt>
<dd><p>Flattens an object&#39;s nested hierarchy.
I.E. { name: { first: &#39;Jeremy&#39;, last: &#39;Bankes&#39; } } -&gt; { &#39;name.first&#39;: &#39;Jeremy&#39;, &#39;name.last&#39;: &#39;Bankes&#39; }</p>
</dd>
<dt><a href="#hierarchize">hierarchize(target)</a> ⇒</dt>
<dd><p>Converts a flattened object back into an object with a nested hierarchy.</p>
</dd>
<dt><a href="#numberize">numberize(target)</a> ⇒</dt>
<dd><p>Converts any nested properties in <a href="target">target</a> that can be parsed as numbers to numbers.</p>
</dd>
<dt><a href="#ensure">ensure(target, path, fallback)</a> ⇒</dt>
<dd><p>Ensures that <a href="target">target</a> has a value at <a href="path">path</a> with the same type of <a href="fallback">fallback</a>.
If the value at <a href="path">path</a> in <a href="target">target</a> does not exist, or has a differing type than <a href="fallback">fallback</a>, <a href="fallback">fallback</a> will take it&#39;s place.</p>
</dd>
<dt><a href="#validate">validate(data, schema, error)</a> ⇒</dt>
<dd><p>Validates that <a href="data">data</a> matches the given <a href="schema">schema</a>.
The hierarchy of <a href="schema">schema</a> represents the hierarchy that <a href="data">data</a> should match.
The values of <a href="schema">schema</a> represent the types that the values in <a href="data">data</a> should match. (Evaluated by typeof)</p>
<p>I.E.
data   = { name: { first: &#39;Jeremy&#39;, last: &#39;Bankes&#39; }, age: 21       }
schema = { name: { first: &#39;string&#39;, last: &#39;string&#39; }, age: &#39;number&#39; }</p>
</dd>
<dt><a href="#filter">filter(target, predicate)</a> ⇒</dt>
<dd><p>Filters nested properties from <a href="target">target</a> based on <a href="predicate">predicate</a>.</p>
</dd>
<dt><a href="#conditional">conditional(condition, value)</a> ⇒</dt>
<dd><p>Used to optionally include <a href="value">value</a>&#39;s properties when defining an inline object.</p>
</dd>
<dt><a href="#toSlug">toSlug(string)</a> ⇒</dt>
<dd><p>Converts <a href="string">string</a> to a url-slug. Note that this function treats camel casing as seperate words. Convert <a href="string">string</a> to lower case first to avoid this functionality.</p>
</dd>
<dt><a href="#toCamel">toCamel(string)</a> ⇒</dt>
<dd><p>Converts <a href="string">string</a> to camelCase.</p>
</dd>
<dt><a href="#toTitle">toTitle(string)</a> ⇒</dt>
<dd><p>Converts string to Title Case</p>
</dd>
<dt><a href="#toPrettyList">toPrettyList(values)</a> ⇒</dt>
<dd><p>Creates an English readable list from <a href="values">values</a>.</p>
</dd>
<dt><a href="#pluralize">pluralize(singular, count)</a> ⇒</dt>
<dd><p>Makes <a href="singular">singular</a> plural.</p>
</dd>
<dt><a href="#withNumberSuffix">withNumberSuffix(value)</a> ⇒</dt>
<dd><p>Adds a number suffix to &#39;value&#39;. (-st, -nd, -rd or -th)</p>
</dd>
<dt><a href="#fromDate">fromDate(date, format)</a> ⇒</dt>
<dd><p>Converts a date object into strings of various formats.</p>
</dd>
<dt><a href="#toDate">toDate(dateString, formFormat)</a> ⇒</dt>
<dd><p>Converts a string into a date object.</p>
</dd>
<dt><a href="#fromTime">fromTime(hoursOfDayOrDate, format)</a> ⇒</dt>
<dd><p>Converts a date or hours number into time strings of various formats.</p>
</dd>
<dt><a href="#toTime">toTime(formTimeString)</a> ⇒</dt>
<dd><p>Converts a form time string to a number of hours of a day.</p>
</dd>
<dt><a href="#toDurationString">toDurationString(milliseconds, maximumPrecision, minimumPrecision, pluralize)</a> ⇒</dt>
<dd><p>Converts a given duration in milliseconds to a string.</p>
</dd>
<dt><a href="#getWeekdayName">getWeekdayName(date)</a> ⇒</dt>
<dd><p>Gets the name of the day of the week from <a href="date">date</a>.</p>
</dd>
<dt><a href="#getMonthName">getMonthName(date)</a> ⇒</dt>
<dd><p>Gets the name of the month of the year from <a href="date">date</a>.</p>
</dd>
<dt><a href="#fromCurrency">fromCurrency(currency)</a> ⇒</dt>
<dd><p>Creates a string from <a href="currency">currency</a>.</p>
</dd>
<dt><a href="#fromPercentage">fromPercentage(percentage)</a> ⇒</dt>
<dd><p>Creates a string from <a href="percentage">percentage</a>.</p>
</dd>
<dt><a href="#fromNumber">fromNumber(number, fractionalDigits)</a> ⇒</dt>
<dd><p>Creates a string from <a href="number">number</a>.</p>
</dd>
<dt><a href="#getLevenshteinDistance">getLevenshteinDistance(stringA, stringB)</a> ⇒</dt>
<dd><p>Calculates the <a href="https://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein distance</a> between two strings.</p>
</dd>
<dt><a href="#getSimilarityFactor">getSimilarityFactor(stringA, stringB)</a> ⇒</dt>
<dd><p>Calculates a normalized similarity factor between two strings. Determines how similar two strings are. Used for fuzzy string checking.</p>
</dd>
</dl>

<a name="get"></a>

## get(name) ⇒
Retrieves a cookie by name.

**Kind**: global function  
**Returns**: The cookie named [name](name), or null if it does not exist.  

| Param | Description |
| --- | --- |
| name | The name of the cookie to get the value of. |

<a name="getJson"></a>

## getJson(name) ⇒
Retrieves a JSON cookie by name.

**Kind**: global function  
**Returns**: The cookie named [name](name), or null if it does not exist, or cannot be parsed as JSON.  

| Param | Description |
| --- | --- |
| name | The name of the cookie to get the value of. |

<a name="getAll"></a>

## getAll() ⇒
Retrieves all cookies and returns each key, value pair as an object.

**Kind**: global function  
**Returns**: An object where each key in a cookie name that maps a cookie value.  
<a name="set"></a>

## set(name, value)
Sets a cookie named [name](name) to [value](value).

**Kind**: global function  

| Param | Description |
| --- | --- |
| name | The name of the cookie to set the value of. |
| value | The value of the cookie to be set. |

<a name="setJson"></a>

## setJson(name, value)
Sets a cookie named [name](name) to [value](value) as JSON.

**Kind**: global function  

| Param | Description |
| --- | --- |
| name | The name of the cookie to set the value of. |
| value | The value of the cookie to be set. |

<a name="delete"></a>

## delete(name)
Deletes a cookie named [name](name).

**Kind**: global function  

| Param | Description |
| --- | --- |
| name | The name of the cookie to delete. |

<a name="onReady"></a>

## onReady(callback)
Registers a callback to be run when the DOM content loads.

**Kind**: global function  

| Param | Description |
| --- | --- |
| callback | The callback to be run when the DOM content loads. |

<a name="onError"></a>

## onError(callback)
Registers a callback to be run if an error occurs while executing onReady callbacks.

**Kind**: global function  

| Param | Description |
| --- | --- |
| callback | The callback to be run if an error occurs while executing onReady callbacks. |

<a name="getMapping"></a>

## getMapping(root) ⇒
Returns an ElementMapping of all elements in [root](root).

**Kind**: global function  
**Returns**: A mapping of element in [root](root)  

| Param | Description |
| --- | --- |
| root | The document to create the mapping for. |

<a name="create"></a>

## create(options) ⇒
Creates an HTML element

**Kind**: global function  
**Returns**: The created HTML element  

| Param | Description |
| --- | --- |
| options | The options used to create the element |

<a name="exists"></a>

## exists(elementId) ⇒
Checks to see if an element with the ID 'elementId' exists in the DOM.

**Kind**: global function  
**Returns**: True of an element with the ID 'elementId' exists in the DOM, false otherwise.  

| Param | Description |
| --- | --- |
| elementId | The ID of an element to check the existance of. |

<a name="clear"></a>

## clear(container)
Removes all children from a node.

**Kind**: global function  

| Param | Description |
| --- | --- |
| container | The node to remove the children from. |

<a name="getFormData"></a>

## getFormData(section)
Retrieves form data for inputs within a certain section in a form

**Kind**: global function  

| Param | Description |
| --- | --- |
| section | The section to retrieve the form data from. This can be the form itself. |

<a name="setFormData"></a>

## setFormData(form, data)
Populates a form's inputs with data.

**Kind**: global function  

| Param | Description |
| --- | --- |
| form | The form element to populate. |
| data | The data to populate [form](form) with. |

<a name="clearFormSection"></a>

## clearFormSection(section)
Clears the value of the inputs within a certain section within a form.

**Kind**: global function  

| Param | Description |
| --- | --- |
| section | The section to retrieve the form data from. |

<a name="submitFormWithValidation"></a>

## submitFormWithValidation(form)
Submits a form whilst triggering HTML's default form validation.

**Kind**: global function  

| Param | Description |
| --- | --- |
| form | A form to submit. |

<a name="pulse"></a>

## pulse(element, color)
Pulses a halo affect around an element to bring attention to it.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| element |  | The element to pluse |
| color | <code>#FF0000</code> | The color of the pluse |

<a name="getCssVariable"></a>

## getCssVariable(name) ⇒
Get a computed value of a css variable.

**Kind**: global function  
**Returns**: The computed style of the css variable named [name](name).  

| Param | Description |
| --- | --- |
| name | The name of the css variable. (Starts with "--") |

<a name="setSlowedInputListener"></a>

## setSlowedInputListener(input, callback, delay)
Attaches a input listener that only fires a given amount of time after the user has stopped inputting.This is useful to reducing the amount of API requests for suggestions-as-you-type search boxes.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| input |  | The element to attach the listener to |
| callback |  | The callback to be run after inputting |
| delay | <code>500</code> | The time in milliseconds to wait after the user has inputted until firing the callback |

<a name="setFormSubmitListener"></a>

## setFormSubmitListener(form, submissionCallback, errorCallback, finallyCallback)
Creates a client-side form submission handler

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| form |  | The form element to list for submissions on. |
| submissionCallback |  | The callback to execute on the submission of [form](form). |
| errorCallback | <code></code> | The callback to execute on an error during the execution of [submissionCallback](submissionCallback). |
| finallyCallback | <code></code> | The callback to execute after the execution of [submissionCallback](submissionCallback) and [errorCallback](errorCallback). |

<a name="existanceControlledBy"></a>

## existanceControlledBy(templateElement, controlInput, valueEvaluationCallback)
Controls the existance of 'templateElement's content in the DOM based on the value of 'controlInput'

**Kind**: global function  

| Param | Description |
| --- | --- |
| templateElement | The element whoes existance is dictated by 'controlInput' |
| controlInput | The element whoes value controls the existance of 'templateElement' |
| valueEvaluationCallback | The callback to assess 'controlInput's value. Returns true for templateElement to exists, false otherwise |

<a name="isBrowser"></a>

## isBrowser() ⇒
Determines if the current runtime is a browser.

**Kind**: global function  
**Returns**: True if the current runtime is a browser, false otherwise.  
<a name="request"></a>

## request(url, body, headers) ⇒
Sends a [method](method) request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| body | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="get"></a>

## get(url, parameters, headers) ⇒
Sends a post request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| parameters | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="post"></a>

## post(url, body, headers) ⇒
Sends a post request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| body | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="put"></a>

## put(url, body, headers) ⇒
Sends a put request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| body | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="patch"></a>

## patch(url, body, headers) ⇒
Sends a patch request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| body | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="delete"></a>

## delete(url, body, headers) ⇒
Sends a delete request with optional body data and headers.Uses the fetch API and [Network.defaults](Network.defaults)

**Kind**: global function  
**Returns**: The response from [url](url)  

| Param | Description |
| --- | --- |
| url | The address of the server to make the request to. |
| body | The body data to send to [url](url) |
| headers | The headers to send to [url](url) |

<a name="has"></a>

## has(target, path) ⇒
Checks to see if a given [target](target) object has a given [path](path).

**Kind**: global function  
**Returns**: True if [target](target) has [path](path).  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path to check the existance of. |

<a name="get"></a>

## get(target, path, fallback) ⇒
Finds a retrieves a value at [path](path) in [target](target) object.

**Kind**: global function  
**Returns**: The value in [target](target) at [path](path), or [fallback](fallback) if [path](path) can't be found.  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path to retrieve a value from. |
| fallback | A value to fallback on if [path](path) couldn't be found. |

<a name="getOrThrow"></a>

## getOrThrow(target, path, validator) ⇒
Finds a retrieves a value at [path](path) in [target](target) or throws and error if the value fails validation by [validator](validator).

**Kind**: global function  
**Returns**: The value found at [path](path) in [target](target).  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path to retrieve a value from. |
| validator | A predicate to validate the value found at [path](path). |

<a name="set"></a>

## set(target, path, value)
Sets a [value](value) in a [target](target) object at [path](path).

**Kind**: global function  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path to set [value](value) at. |
| value | The value to be set. |

<a name="remove"></a>

## remove(target, path) ⇒
Removes a value at [path](path) in [target](target).

**Kind**: global function  
**Returns**: The removed value, or null if no value was removed.  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path of the value to remove from [target](target). |

<a name="clone"></a>

## clone(target, deep) ⇒
Creates a copy of [target](target).

**Kind**: global function  
**Returns**: A copy of [target](target).  

| Param | Default | Description |
| --- | --- | --- |
| target |  | The target object to clone. |
| deep | <code>false</code> | True to perform a deep copy, false to perform a shallow copy. |

<a name="walk"></a>

## walk(target, callback, path, level)
Walks across the nested properties of [target](target) and calls [callback](callback) for every property.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| target |  | The target object. |
| callback |  | The callback to be executed for every nested property in [target](target). |
| path |  | The path to start walking in [target](target). |
| level | <code>0</code> | The level of nesting from the starting path in [target](target). |

<a name="flatten"></a>

## flatten(target) ⇒
Flattens an object's nested hierarchy.I.E. { name: { first: 'Jeremy', last: 'Bankes' } } -> { 'name.first': 'Jeremy', 'name.last': 'Bankes' }

**Kind**: global function  
**Returns**: A flattend version of [target](target) without any nesting.  

| Param | Description |
| --- | --- |
| target | The target object |

<a name="hierarchize"></a>

## hierarchize(target) ⇒
Converts a flattened object back into an object with a nested hierarchy.

**Kind**: global function  
**Returns**: a hierarchized version of [target](target) with a nested hierarchy.  

| Param |
| --- |
| target | 

<a name="numberize"></a>

## numberize(target) ⇒
Converts any nested properties in [target](target) that can be parsed as numbers to numbers.

**Kind**: global function  
**Returns**: A copy of [target](target) with all of its properties that can be parsed as numbers, parsed as numbers.  

| Param |
| --- |
| target | 

<a name="ensure"></a>

## ensure(target, path, fallback) ⇒
Ensures that [target](target) has a value at [path](path) with the same type of [fallback](fallback).If the value at [path](path) in [target](target) does not exist, or has a differing type than [fallback](fallback), [fallback](fallback) will take it's place.

**Kind**: global function  
**Returns**: The value at [path](path) in [target](target).  

| Param | Description |
| --- | --- |
| target | The target object. |
| path | The path to ensure has a valid value of the same type as [fallback](fallback). |
| fallback | The value to fallback to at [path](path) in [target](target) to if it doesn't already exist. |

<a name="validate"></a>

## validate(data, schema, error) ⇒
Validates that [data](data) matches the given [schema](schema).The hierarchy of [schema](schema) represents the hierarchy that [data](data) should match.The values of [schema](schema) represent the types that the values in [data](data) should match. (Evaluated by typeof)I.E.data   = { name: { first: 'Jeremy', last: 'Bankes' }, age: 21       }schema = { name: { first: 'string', last: 'string' }, age: 'number' }

**Kind**: global function  
**Returns**: True if validation is passed, false otherwise.  

| Param | Default | Description |
| --- | --- | --- |
| data |  | The target object to validate. |
| schema |  | The schema that [data](data) should match. |
| error | <code>true</code> | If true, throws a validation error if the schema isn't matched. |

<a name="filter"></a>

## filter(target, predicate) ⇒
Filters nested properties from [target](target) based on [predicate](predicate).

**Kind**: global function  
**Returns**: A copy of [target](target) with its properties filtered based on [predicate](predicate).  

| Param | Description |
| --- | --- |
| target | The target object to filter. |
| predicate | The predicate to determine which properties to filter. Return true to keep property, false to filter it. |

<a name="conditional"></a>

## conditional(condition, value) ⇒
Used to optionally include [value](value)'s properties when defining an inline object.

**Kind**: global function  
**Returns**: The given [value](value) if [condition](condition) is met, an empty array otherwise.  

| Param | Description |
| --- | --- |
| condition | The condition to be checked. |
| value | The object with properties to include in an inline object definition if [condition](condition) is met. |

<a name="toSlug"></a>

## toSlug(string) ⇒
Converts [string](string) to a url-slug. Note that this function treats camel casing as seperate words. Convert [string](string) to lower case first to avoid this functionality.

**Kind**: global function  
**Returns**: a-slug-string  

| Param | Description |
| --- | --- |
| string | The text to turn into a slug |

<a name="toCamel"></a>

## toCamel(string) ⇒
Converts [string](string) to camelCase.

**Kind**: global function  
**Returns**: aCamelCaseString  

| Param | Description |
| --- | --- |
| string | The text to turn into camel case. |

<a name="toTitle"></a>

## toTitle(string) ⇒
Converts string to Title Case

**Kind**: global function  
**Returns**: A Title Case String  

| Param | Description |
| --- | --- |
| string | The text to turn into title case. |

<a name="toPrettyList"></a>

## toPrettyList(values) ⇒
Creates an English readable list from [values](values).

**Kind**: global function  
**Returns**: A list deliminated by commas with the word 'and' seperating the last element.  

| Param | Description |
| --- | --- |
| values | A list of values to make a pretty list out of. |

<a name="pluralize"></a>

## pluralize(singular, count) ⇒
Makes [singular](singular) plural.

**Kind**: global function  
**Returns**: The plural of [singular](singular).  

| Param | Default | Description |
| --- | --- | --- |
| singular |  | The singular word to make plural. |
| count | <code>0</code> | The number of [singular](singular). Not 1 to pluralize. |

<a name="withNumberSuffix"></a>

## withNumberSuffix(value) ⇒
Adds a number suffix to 'value'. (-st, -nd, -rd or -th)

**Kind**: global function  
**Returns**: A string of 'value' with a number suffix.  

| Param | Description |
| --- | --- |
| value | The number to add a suffix to. |

<a name="fromDate"></a>

## fromDate(date, format) ⇒
Converts a date object into strings of various formats.

**Kind**: global function  
**Returns**: A formatted date string.  

| Param | Default | Description |
| --- | --- | --- |
| date |  | The date to convert. |
| format | <code>pretty</code> | The format to use. |

<a name="toDate"></a>

## toDate(dateString, formFormat) ⇒
Converts a string into a date object.

**Kind**: global function  
**Returns**: The parsed date.  

| Param | Description |
| --- | --- |
| dateString | The string to parse into a date. |
| formFormat | If true, parses 'dateString' in the current timezone instead of UTC. |

<a name="fromTime"></a>

## fromTime(hoursOfDayOrDate, format) ⇒
Converts a date or hours number into time strings of various formats.

**Kind**: global function  
**Returns**: The formatted time string.  

| Param | Default | Description |
| --- | --- | --- |
| hoursOfDayOrDate |  | A number of hours in a day (0-24) or a date object to convert to a time string. |
| format | <code>pretty</code> | The format of the time string. |

<a name="toTime"></a>

## toTime(formTimeString) ⇒
Converts a form time string to a number of hours of a day.

**Kind**: global function  
**Returns**: An hour of the day (0-24) representing [formTimeString](formTimeString).  

| Param | Description |
| --- | --- |
| formTimeString | The string to parse. |

<a name="toDurationString"></a>

## toDurationString(milliseconds, maximumPrecision, minimumPrecision, pluralize) ⇒
Converts a given duration in milliseconds to a string.

**Kind**: global function  
**Returns**: A duration string.  

| Param | Default | Description |
| --- | --- | --- |
| milliseconds |  | Milliseconds to convert into a duration string. |
| maximumPrecision | <code>day</code> | The maximum precision of the duration string. |
| minimumPrecision | <code>second</code> | The minimum precision of the duration string. |
| pluralize | <code>false</code> | True to pluralize the units, false otherwise. |

<a name="getWeekdayName"></a>

## getWeekdayName(date) ⇒
Gets the name of the day of the week from [date](date).

**Kind**: global function  
**Returns**: The name of the day of the week.  

| Param | Description |
| --- | --- |
| date | The date to get the weekday from. |

<a name="getMonthName"></a>

## getMonthName(date) ⇒
Gets the name of the month of the year from [date](date).

**Kind**: global function  
**Returns**: The name of the month of the year.  

| Param | Description |
| --- | --- |
| date | The date to get the month from. |

<a name="fromCurrency"></a>

## fromCurrency(currency) ⇒
Creates a string from [currency](currency).

**Kind**: global function  
**Returns**: A string representing [currency](currency).  

| Param | Description |
| --- | --- |
| currency | The currency to convert to a string. |

<a name="fromPercentage"></a>

## fromPercentage(percentage) ⇒
Creates a string from [percentage](percentage).

**Kind**: global function  
**Returns**: A string representing [percentage](percentage).  

| Param | Description |
| --- | --- |
| percentage | The percentage to convert to a string. |

<a name="fromNumber"></a>

## fromNumber(number, fractionalDigits) ⇒
Creates a string from [number](number).

**Kind**: global function  
**Returns**: A string representing [number](number).  

| Param | Default | Description |
| --- | --- | --- |
| number |  | The number to convert to a string. |
| fractionalDigits | <code>2</code> | The number of digits to represent the fractional portion of the number. |

<a name="getLevenshteinDistance"></a>

## getLevenshteinDistance(stringA, stringB) ⇒
Calculates the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) between two strings.

**Kind**: global function  
**Returns**: The distance between [stringA](stringA) and [stringB](stringB)  

| Param | Description |
| --- | --- |
| stringA | The first string |
| stringB | The second string |

<a name="getSimilarityFactor"></a>

## getSimilarityFactor(stringA, stringB) ⇒
Calculates a normalized similarity factor between two strings. Determines how similar two strings are. Used for fuzzy string checking.

**Kind**: global function  
**Returns**: A similarity factor, 1 being identical, 0 being very different.  

| Param | Description |
| --- | --- |
| stringA | The first string |
| stringB | The second string |

