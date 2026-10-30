# JsonPatch

# JsonPatch

A JSONPatch document as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 
\}

## Example

```python
from sailpoint.configuration_hub.models.json_patch import JsonPatch

json_patch = JsonPatch(
operations=[
                    sailpoint.configuration_hub.models.json_patch_operation.Json Patch Operation(
                        op = 'replace', 
                        path = '/description', 
                        value = New description, )
                    ]
)

```
[[Back to top]](#) 

