# EntitlementmetadatabulkupdatebyidrequestValuesInner

# EntitlementmetadatabulkupdatebyidrequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The technical name of the metadata attribute. | [required]
**values** | **[]str** | The values of the attribute to be updated. | [required]
**object_type** | **str** | The type of the metadata attribute. Set to `custom` for custom metadata attributes, which require a suite license. | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlementmetadatabulkupdatebyidrequest_values_inner import EntitlementmetadatabulkupdatebyidrequestValuesInner

entitlementmetadatabulkupdatebyidrequest_values_inner = EntitlementmetadatabulkupdatebyidrequestValuesInner(
attribute='iscFederalClassifications',
values=["secret"],
object_type='custom'
)

```
[[Back to top]](#) 

