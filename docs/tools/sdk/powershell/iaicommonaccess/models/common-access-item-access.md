# CommonAccessItemAccess

# CommonAccessItemAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common access ID | [optional] 
**Type** | **CommonAccessType** |  | [optional] 
**Name** | **String** | Common access name | [optional] 
**Description** | **String** | Common access description | [optional] 
**OwnerName** | **String** | Common access owner name | [optional] 
**OwnerId** | **String** | Common access owner ID | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemAccess = Initialize-CommonAccessItemAccess  -Id null `
 -Type null `
 -Name null `
 -Description null `
 -OwnerName null `
 -OwnerId null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemAccess | ConvertTo-JSON
```


[[Back to top]](#) 

