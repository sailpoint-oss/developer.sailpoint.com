# AccessProfileApprovalScheme

# AccessProfileApprovalScheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'APP_OWNER',    'OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW',    'ADDITIONAL_OWNER',    'ADDITIONAL_GOVERNANCE_GROUP' ] | Describes the individual or group that is responsible for an approval step. Values are as follows. **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**approver_id** | **str** | ID of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.access_profile_approval_scheme import AccessProfileApprovalScheme

access_profile_approval_scheme = AccessProfileApprovalScheme(
approver_type='GOVERNANCE_GROUP',
approver_id='46c79819-a69f-49a2-becb-12c971ae66c6'
)

```
[[Back to top]](#) 

