# A JavaScript/TypeScript Toolbox
A utility library delivering many quality of life improvements to both browser and node environments.

# API Documentation
## Functions

<dl>
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
<dd><p>Finds a retrieves a value at a <a href="path">path</a> in a <a href="target">target</a> object.</p>
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
<dt><a href="#ensure">ensure(target, path, fallback)</a> ⇒</dt>
<dd><p>Ensures that <a href="target">target</a> has a value at <a href="path">path</a> with the same type of <a href="fallback">fallback</a>.
If the value at <a href="path">path</a> in <a href="target">target</a> does not exist, or has a differing type than <a href="fallback">fallback</a>, <a href="fallback">fallback</a> will take it&#39;s place.</p>
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
</dl>

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
Finds a retrieves a value at a [path](path) in a [target](target) object.

**Kind**: global function  
**Returns**: The value in [target](target) at [path](path), or [fallback](fallback) if [path](path) can't be found.  

| Param | Default | Description |
| --- | --- | --- |
| target |  | The target object. |
| path |  | The path to retrieve a value from. |
| fallback | <code></code> | A value to fallback on if [path](path) couldn't be found. |

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
| string | The text to turn into camel case |

