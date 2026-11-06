# SourceDeletedActor

# SourceDeletedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who deleted the source. | [required]
**Id** | **String** | ID of identity who deleted the source. | [required]
**Name** | **String** | Display name of identity who deleted the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceDeletedActor = Initialize-SourceDeletedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceDeletedActor | ConvertTo-JSON
```


[[Back to top]](#) 

