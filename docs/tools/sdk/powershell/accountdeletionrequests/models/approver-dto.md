# ApproverDto

# ApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | **String** | Identity ID and it cannot be null. | [optional] 
**Id** | **String** | Optional id | [optional] 
**Name** | **String** | Identity display name | [optional] 
**Email** | **String** | Email address of identity | [optional] 
**Type** | **String** | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [optional] 
**OwnerOf** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for account owner identities | [optional] 
**ActionedAs** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto who acted on behalf of other identities. | [optional] 
**Members** | [**[]ApproverReference**](approver-reference) | List of reference of identity type dto for member identities. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApproverDto = Initialize-ApproverDto  -IdentityID 22efd140d88a4ceeab32c8829973244c `
 -Id null `
 -Name SailPoint Support `
 -Email support@testmail.identitysoon.com `
 -Type IDENTITY `
 -OwnerOf null `
 -ActionedAs null `
 -Members null
```

- Convert the resource to JSON
```powershell
$ApproverDto | ConvertTo-JSON
```


[[Back to top]](#) 

