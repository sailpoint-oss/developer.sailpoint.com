# AccessItemRef

# AccessItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the access item to retrieve the recommendation for. | [optional] 
**Type** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | Access item's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRef = Initialize-AccessItemRef  -Id 2c938083633d259901633d2623ec0375 `
 -Type ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$AccessItemRef | ConvertTo-JSON
```


[[Back to top]](#) 

