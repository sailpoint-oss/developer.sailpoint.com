# Identitycollectordependency

# Identitycollectordependency

A dependent object blocking deletion of an identity collector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name of the dependent object. For applications, the platform dependency query may prefix the object name (for example, `Application - Finance SharePoint`). | [optional] 
**type** | **str** | The internal dependent object type identifier (fully qualified type name). | [optional] 
**type_display_name** | **str** | The human-readable display name of the dependent object type. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectordependency import Identitycollectordependency

identitycollectordependency = Identitycollectordependency(
name='Application - Finance SharePoint',
type='WBX.WhiteOPS.ServerCore.BAM',
type_display_name='Application'
)

```
[[Back to top]](#) 

