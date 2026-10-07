# ProvisioningDetails

# ProvisioningDetails

Provides additional details about provisioning for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordered_sub_phase_references** | **str** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.provisioning_details import ProvisioningDetails

provisioning_details = ProvisioningDetails(
ordered_sub_phase_references='manualWorkItemDetails'
)

```
[[Back to top]](#) 

