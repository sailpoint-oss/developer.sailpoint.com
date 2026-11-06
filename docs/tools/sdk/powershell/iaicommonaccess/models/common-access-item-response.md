# CommonAccessItemResponse

# CommonAccessItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common Access Item ID | [optional] 
**Access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | **CommonAccessItemState** |  | [optional] 
**LastUpdated** | **String** |  | [optional] 
**ReviewedByUser** | **Boolean** |  | [optional] 
**LastReviewed** | **String** |  | [optional] 
**CreatedByUser** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemResponse = Initialize-CommonAccessItemResponse  -Id null `
 -Access null `
 -Status null `
 -LastUpdated null `
 -ReviewedByUser null `
 -LastReviewed null `
 -CreatedByUser null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

