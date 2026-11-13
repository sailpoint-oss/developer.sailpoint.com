# IdentityAccountSelections

# IdentityAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedItems** | [**[]RequestedItemAccountSelections**](requested-item-account-selections) | Available account selections for the identity, per requested item | [optional] 
**AccountsSelectionRequired** | **Boolean** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to $false]
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | The identity id for the requested-for identity. * `IDENTITY`: the human identity id. * `MACHINE_IDENTITY`: the machine identity id (not the correlated human identity).  | [optional] 
**Name** | **String** | The name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAccountSelections = Initialize-IdentityAccountSelections  -RequestedItems null `
 -AccountsSelectionRequired false `
 -Type null `
 -Id 70016590f2df4b879bdb1313a9e4e19e `
 -Name User name
```

- Convert the resource to JSON
```powershell
$IdentityAccountSelections | ConvertTo-JSON
```


[[Back to top]](#) 

