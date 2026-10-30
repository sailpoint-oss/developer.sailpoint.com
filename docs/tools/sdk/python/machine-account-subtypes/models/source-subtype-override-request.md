# SourceSubtypeOverrideRequest

# SourceSubtypeOverrideRequest

Request body for overriding a connector subtype on one source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | ID of the source to create the overriding source subtype on. | [required]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.source_subtype_override_request import SourceSubtypeOverrideRequest

source_subtype_override_request = SourceSubtypeOverrideRequest(
source_id='6d0458373bec4b4b80460992b76016da'
)

```
[[Back to top]](#) 

