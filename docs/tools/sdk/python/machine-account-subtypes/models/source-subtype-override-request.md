# SourceSubtypeOverrideRequest

# SourceSubtypeOverrideRequest

Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. Later edits to the connector-tier parent are not copied onto the snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | Source that receives the override. | [required]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.source_subtype_override_request import SourceSubtypeOverrideRequest

source_subtype_override_request = SourceSubtypeOverrideRequest(
source_id='6d0458373bec4b4b80460992b76016da'
)

```
[[Back to top]](#) 

