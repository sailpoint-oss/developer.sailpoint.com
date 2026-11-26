# ApprovalIdentityMembersInner

# ApprovalIdentityMembersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **String** | Email of the member. | [optional] 
**Id** | **String** | ID of the member. | [optional] 
**Name** | **String** | Name of the member. | [optional] 
**Type** | **String** | Type of the member. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityMembersInner = Initialize-ApprovalIdentityMembersInner  -Email mail@mail.com `
 -Id 17e633e7d57e481569df76323169deb6a `
 -Name Bob Neil `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityMembersInner | ConvertTo-JSON
```


[[Back to top]](#) 

