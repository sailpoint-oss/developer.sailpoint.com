# SedPatch

# SedPatch

Patch for Suggested Entitlement Description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **str** | desired operation | [optional] 
**path** | **str** | field to be patched | [optional] 
**value** | **object** | value to replace with | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sed_patch import SedPatch

sed_patch = SedPatch(
op='replace',
path='status',
value=approved
)

```
[[Back to top]](#) 

