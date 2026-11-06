# RequestabilityForRole

# RequestabilityForRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_required** | **bool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to False]
**denial_comments_required** | **bool** | Whether an approver must provide comments when denying the request | [optional] [default to False]
**reauthorization_required** | **bool** | Indicates whether reauthorization is required for the request. | [optional] [default to False]
**require_end_date** | **bool** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to False]
**max_permitted_access_duration** | [**AccessDuration**](access-duration) |  | [optional] 
**approval_schemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the request | [optional] 
**dimension_schema** | [**DimensionSchema**](dimension-schema) |  | [optional] 
**form_definition_id** | **str** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.requestability_for_role import RequestabilityForRole

requestability_for_role = RequestabilityForRole(
comments_required=True,
denial_comments_required=True,
reauthorization_required=True,
require_end_date=True,
max_permitted_access_duration=sailpoint.roles.models.access_duration.AccessDuration(
                    value = 6, 
                    time_unit = 'MONTHS', ),
approval_schemes=[
                    sailpoint.roles.models.approval_scheme_for_role.ApprovalSchemeForRole(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = '46c79819-a69f-49a2-becb-12c971ae66c6', )
                    ],
dimension_schema=sailpoint.roles.models.dimension_schema.DimensionSchema(
                    dimension_attributes = [
                        sailpoint.roles.models.dimension_attribute.DimensionAttribute(
                            name = 'city', 
                            display_name = 'City', 
                            derived = True, )
                        ], ),
form_definition_id='78258e80-e9e2-4e1a-a11f-ce0b7c62f25d'
)

```
[[Back to top]](#) 

