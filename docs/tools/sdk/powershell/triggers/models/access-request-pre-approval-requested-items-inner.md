# AccessRequestPreApprovalRequestedItemsInner

# AccessRequestPreApprovalRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the access item being requested. | [required]
**Name** | **String** | The human friendly name of the access item. | [required]
**Description** | **String** | Detailed description of the access item. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | The action to perform on the access item. | [required]
**Comment** | **String** | A comment from the identity requesting the access. | [optional] 
**Form** | [**AccessRequestDynamicApproverRequestedItemsInnerForm**](access-request-dynamic-approver-requested-items-inner-form) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApprovalRequestedItemsInner = Initialize-AccessRequestPreApprovalRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Access to engineering database `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access to do his job. `
 -Form null
```

- Convert the resource to JSON
```powershell
$AccessRequestPreApprovalRequestedItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

