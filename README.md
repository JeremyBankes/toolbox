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

