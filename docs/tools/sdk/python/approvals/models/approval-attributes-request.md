# ApprovalAttributesRequest

# ApprovalAttributesRequest

Approval Attributes Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **map[string]str** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**comment** | **str** | Comment associated with the request. | [optional] 
**remove_attribute_keys** | **[]str** | List of attribute keys to be removed. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_attributes_request import ApprovalAttributesRequest

approval_attributes_request = ApprovalAttributesRequest(
additional_attributes={"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"},
comment='comment',
remove_attribute_keys=["string"]
)

```
[[Back to top]](#) 

