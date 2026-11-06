# ApprovalIdentityRecord

# ApprovalIdentityRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | **String** | Identity ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type of identity. | [optional] 
**Name** | **String** | Name of the identity. | [optional] 
**ActionedAs** | [**[]ApprovalReference**](approval-reference) | List of references representing actions taken by the identity. | [optional] 
**Members** | [**[]ApprovalReference**](approval-reference) | List of references representing members of the identity. | [optional] 
**DecisionDate** | **System.DateTime** | Date when the decision was made. | [optional] 
**Email** | **String** | Email associated with the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityRecord = Initialize-ApprovalIdentityRecord  -IdentityID 17e633e7d57e481569df76323169deb6a `
 -Type IDENTITY `
 -Name Jim Bob `
 -ActionedAs null `
 -Members null `
 -DecisionDate 2023-04-12T23:20:50.520Z `
 -Email user@example.com
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityRecord | ConvertTo-JSON
```


[[Back to top]](#) 

