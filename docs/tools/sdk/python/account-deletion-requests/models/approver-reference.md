# ApproverReference

# ApproverReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of supported DtoType like IDENTITY, MACHINE_IDENTITY etc. | [optional] 
**type** | **str** | Type of Dto | [optional] 
**name** | **str** | Display name of DtoType like IDENTITY, MACHINE_IDENTITY etc | [optional] 
\}

## Example

```python
from sailpoint.account_deletion_requests.models.approver_reference import ApproverReference

approver_reference = ApproverReference(
id='85131bd73fdc423599e57f40b29f01fe',
type='IDENTITY',
name='SailPoint Support'
)

```
[[Back to top]](#) 

