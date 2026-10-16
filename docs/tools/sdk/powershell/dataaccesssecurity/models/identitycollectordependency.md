# Identitycollectordependency

# Identitycollectordependency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The display name of the dependent object. For applications, the platform dependency query may prefix the object name (for example, `Application - Finance SharePoint`). | [optional] 
**Type** | **String** | The internal dependent object type identifier (fully qualified type name). | [optional] 
**TypeDisplayName** | **String** | The human-readable display name of the dependent object type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitycollectordependency = Initialize-Identitycollectordependency  -Name Application - Finance SharePoint `
 -Type WBX.WhiteOPS.ServerCore.BAM `
 -TypeDisplayName Application
```

- Convert the resource to JSON
```powershell
$Identitycollectordependency | ConvertTo-JSON
```


[[Back to top]](#) 

