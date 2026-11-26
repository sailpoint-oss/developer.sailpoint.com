# ApprovalSchemeForRole

# ApprovalSchemeForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.  **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners  **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field  **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP. | [default to undefined]

