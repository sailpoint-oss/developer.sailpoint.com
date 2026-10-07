# RequestedItemStatusForm

# RequestedItemStatusForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_definition_id** | **str** | ID of the form definition that was completed for this item. | [optional] 
**form_instance_id** | **str** | ID of the completed form instance. | [optional] 
**form_data** | **map[string]object** | Key-value pairs (form field technical name to value) from the completed form instance. | [optional] 
**form_elements** | **[]Dict[str, object]** | Optional form element definitions when present. Shape follows the form instance payload. | [optional] 
**form_conditions** | **[]Dict[str, object]** | Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API. | [optional] 
**form_instance_inputs** | **map[string]object** | Optional inputs passed into the form instance when present. Copied from the form instance payload as-is. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_status_form import RequestedItemStatusForm

requested_item_status_form = RequestedItemStatusForm(
form_definition_id='b2c1808f-77f5-4a3a-9f3a-1d2e3f4a5b6c',
form_instance_id='9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e',
form_data={department=Engineering, notifyRequester=true, platforms=[AWS, GCP]},
form_elements=[{id=00000000-0000-0000-0000-000000000000, elementType=TEXT}],
form_conditions=[{ruleOperator=AND, rules=[], effects=[]}],
form_instance_inputs={department=Engineering}
)

```
[[Back to top]](#) 

