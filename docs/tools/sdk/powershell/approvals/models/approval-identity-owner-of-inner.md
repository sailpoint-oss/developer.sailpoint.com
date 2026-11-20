# ApprovalIdentityOwnerOfInner

# ApprovalIdentityOwnerOfInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object that is owned. | [optional] 
**Name** | **String** | Name of the object that is owned. | [optional] 
**Type** | **String** | Type of the object that is owned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityOwnerOfInner = Initialize-ApprovalIdentityOwnerOfInner  -Id string `
 -Name Access Request App `
 -Type APPLICATION
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityOwnerOfInner | ConvertTo-JSON
```


[[Back to top]](#) 

