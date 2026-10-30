# SourceEntitlementApprovalScheme

# SourceEntitlementApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** |  **Enum** [  "ENTITLEMENT_OWNER",    "SOURCE_OWNER",    "MANAGER",    "GOVERNANCE_GROUP" ] | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW** is not supported in source-level entitlement request configuration. Use the entitlement-level [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1) endpoint to configure a workflow approver. A source-level request that contains `WORKFLOW` is rejected with a 400. | [optional] 
**ApproverId** | **String** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementApprovalScheme = Initialize-SourceEntitlementApprovalScheme  -ApproverType GOVERNANCE_GROUP `
 -ApproverId e3eab852-8315-467f-9de7-70eda97f63c8
```

- Convert the resource to JSON
```powershell
$SourceEntitlementApprovalScheme | ConvertTo-JSON
```


[[Back to top]](#) 

