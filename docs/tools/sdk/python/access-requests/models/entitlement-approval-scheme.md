# EntitlementApprovalScheme

# EntitlementApprovalScheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver_type** |  **Enum** [  'ENTITLEMENT_OWNER',    'SOURCE_OWNER',    'MANAGER',    'GOVERNANCE_GROUP',    'WORKFLOW' ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. A workflow approver has these requirements.  - The Adaptive Approvals feature must be enabled for the tenant. - The workflow given in **approverId** must use the `idn:access-request-trigger` trigger. - `WORKFLOW` is exclusive of the other approver types. If you use it, it must be the only entry in **approvalSchemes**. - `WORKFLOW` is supported only in entitlement-level configuration. The source-level [Update source entitlement request configuration](https://developer.sailpoint.com/docs/api/update-source-entitlement-request-config-v-1) endpoint rejects it with a 400. | [optional] 
**approver_id** | **str** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW. For WORKFLOW this is the ID of the workflow to run. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.entitlement_approval_scheme import EntitlementApprovalScheme

entitlement_approval_scheme = EntitlementApprovalScheme(
approver_type='GOVERNANCE_GROUP',
approver_id='e3eab852-8315-467f-9de7-70eda97f63c8'
)

```
[[Back to top]](#) 

