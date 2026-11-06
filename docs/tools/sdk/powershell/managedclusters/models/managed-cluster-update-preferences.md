# ManagedClusterUpdatePreferences

# ManagedClusterUpdatePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessGroups** | **String** | The processGroups for updatePreferences | [optional] 
**UpdateState** |  **Enum** [  "AUTO",    "DISABLED" ] | The current updateState for the cluster | [optional] 
**NotificationEmail** | **String** | The mail id to which new releases will be notified | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterUpdatePreferences = Initialize-ManagedClusterUpdatePreferences  -ProcessGroups processGroup1 `
 -UpdateState DISABLED `
 -NotificationEmail test@mail.com
```

- Convert the resource to JSON
```powershell
$ManagedClusterUpdatePreferences | ConvertTo-JSON
```


[[Back to top]](#) 

