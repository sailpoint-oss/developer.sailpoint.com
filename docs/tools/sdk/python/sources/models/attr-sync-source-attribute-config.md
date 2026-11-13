# AttrSyncSourceAttributeConfig

# AttrSyncSourceAttributeConfig

Specification of source attribute sync mapping configuration for an identity attribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the identity attribute | [required]
**display_name** | **str** | Display name of the identity attribute | [required]
**enabled** | **bool** | Determines whether or not the attribute is enabled for synchronization | [required]
**target** | **str** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | [required]
\}

## Example

```python
from sailpoint.sources.models.attr_sync_source_attribute_config import AttrSyncSourceAttributeConfig

attr_sync_source_attribute_config = AttrSyncSourceAttributeConfig(
name='email',
display_name='Email',
enabled=True,
target='mail'
)

```
[[Back to top]](#) 

