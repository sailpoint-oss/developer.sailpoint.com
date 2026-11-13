# SodPolicySecondaryOwnerRefsInner

# SodPolicySecondaryOwnerRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Secondary Owner Type | [optional] 
**Id** | **String** | Secondary Owner ID | [optional] 
**Name** | **String** | Secondary Owner Name | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicySecondaryOwnerRefsInner = Initialize-SodPolicySecondaryOwnerRefsInner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$SodPolicySecondaryOwnerRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

