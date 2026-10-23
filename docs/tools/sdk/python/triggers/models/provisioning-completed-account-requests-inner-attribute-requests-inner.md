# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The name of the attribute being provisioned. | [required]
**attribute_value** | **str** | The value of the attribute being provisioned. | [optional] 
**operation** |  **Enum** [  'Add',    'Set',    'Remove' ] | The operation to handle the attribute. | [required]
\}

## Example

```python
from sailpoint.triggers.models.provisioning_completed_account_requests_inner_attribute_requests_inner import ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

provisioning_completed_account_requests_inner_attribute_requests_inner = ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner(
attribute_name='memberOf',
attribute_value='CN=jedi,DC=starwars,DC=com',
operation='Add'
)

```
[[Back to top]](#) 

