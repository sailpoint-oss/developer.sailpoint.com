# AccessProfileUsage

# AccessProfileUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** | **String** | ID of the Access Profile that is in use | [optional] 
**UsedBy** | [**[]AccessProfileUsageUsedByInner**](access-profile-usage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsage = Initialize-AccessProfileUsage  -AccessProfileId 2c91808876438bbb017668c21919ecca `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$AccessProfileUsage | ConvertTo-JSON
```


[[Back to top]](#) 

