# CommonAccessItemRequest

# CommonAccessItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | **CommonAccessItemState** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemRequest = Initialize-CommonAccessItemRequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

