# SpConfigMessage2

# SpConfigMessage2

Message model for Config Import/Export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Message key. | [required]
**text** | **str** | Message text. | [required]
**details** | **map[string]object** | Message details if any, in key:value pairs. | [required]
\}

## Example

```python
from sailpoint.sp_config.models.sp_config_message2 import SpConfigMessage2

sp_config_message2 = SpConfigMessage2(
key='UNKNOWN_REFERENCE_RESOLVER',
text='Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]',
details={"details":"message details"}
)

```
[[Back to top]](#) 

