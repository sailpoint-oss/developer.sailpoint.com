# IdentityHistoryResponse

# IdentityHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the identity ID | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**Snapshot** | **String** | the date when the identity record was created | [optional] 
**DeletedDate** | **String** | the date when the identity was deleted | [optional] 
**AccessItemCount** | **map[string]Int32** | A map containing the count of each access item | [optional] 
**Attributes** | **map[string]AnyType** | A map containing the identity attributes | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityHistoryResponse = Initialize-IdentityHistoryResponse  -Id bc693f07e7b645539626c25954c58554 `
 -DisplayName Adam Zampa `
 -Snapshot 2007-03-01T13:00:00.000Z `
 -DeletedDate 2007-03-01T13:00:00.000Z `
 -AccessItemCount {"app":0,"role":2,"entitlement":4,"accessProfile":3,"account":1} `
 -Attributes {"jobTitle":"HR Manager","location":"NYC","firstname":"Adam","lastname":"Zampa","department":"HR"}
```

- Convert the resource to JSON
```powershell
$IdentityHistoryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

