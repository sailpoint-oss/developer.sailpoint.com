# SubtypeTargetRef

# SubtypeTargetRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE",    "CONNECTOR" ] | DTO type of the target. `SOURCE` for source-tier rows; `CONNECTOR` for connector-tier rows. | [optional] 
**Id** | **String** | Target identifier. Source id for `SOURCE`. Connector specification id or connector type for `CONNECTOR`. | [optional] 
**Name** | **String** | Human-readable target name. Falls back to `id` when a display name is not available. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubtypeTargetRef = Initialize-SubtypeTargetRef  -Type CONNECTOR `
 -Id 65de7634-d315-482c-aad4-7fdbd1e42056 `
 -Name 15Five
```

- Convert the resource to JSON
```powershell
$SubtypeTargetRef | ConvertTo-JSON
```


[[Back to top]](#) 

