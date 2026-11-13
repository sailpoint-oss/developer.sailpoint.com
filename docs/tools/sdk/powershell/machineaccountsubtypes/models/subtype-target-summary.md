# SubtypeTargetSummary

# SubtypeTargetSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "SOURCE",    "CONNECTOR" ] | Tier of the target. | [optional] 
**TargetId** | **String** | Connector type for a `CONNECTOR` target, or source ID for a `SOURCE` target. | [optional] 
**TargetName** | **String** | Display name of the target. Falls back to `targetId` when no name is stored. | [optional] 
**SubtypeCount** | **Int32** | Number of subtypes defined for the target. | [optional] 
**SourceCount** | **Int32** | Number of sources the target's subtypes apply to. | [optional] 
**LastModified** | **System.DateTime** | Most recent modification time across the target's subtypes. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubtypeTargetSummary = Initialize-SubtypeTargetSummary  -TargetType CONNECTOR `
 -TargetId active-directory `
 -TargetName Active Directory `
 -SubtypeCount 3 `
 -SourceCount 12 `
 -LastModified 2026-07-28T16:13:42.750Z
```

- Convert the resource to JSON
```powershell
$SubtypeTargetSummary | ConvertTo-JSON
```


[[Back to top]](#) 

