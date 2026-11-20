# EntitlementStateSnapshotJitDetail

# EntitlementStateSnapshotJitDetail

A single JIT entitlement snapshot entry from the provisioning plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | Application id for the entitlement attribute (same as EntitlementStateSnapshot.applicationId). | [optional] 
**attribute_name** | **str** | Account attribute name for the entitlement (EntitlementStateSnapshot.attributeName). | [optional] 
**attribute_values** | **[]str** | Entitlement values for that attribute (EntitlementStateSnapshot.attributeValues). | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.entitlement_state_snapshot_jit_detail import EntitlementStateSnapshotJitDetail

entitlement_state_snapshot_jit_detail = EntitlementStateSnapshotJitDetail(
application_id='2c9180835d2e5168015d32f890ca1581',
attribute_name='groups',
attribute_values=["CN=Engineering,OU=Groups,DC=example,DC=com"]
)

```
[[Back to top]](#) 

