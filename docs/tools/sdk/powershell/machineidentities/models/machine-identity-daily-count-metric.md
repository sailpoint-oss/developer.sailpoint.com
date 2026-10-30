# MachineIdentityDailyCountMetric

# MachineIdentityDailyCountMetric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** |  **Enum** [  "machine_identity",    "machine_account",    "capability",    "credential" ] | Entity type the counts apply to. | [optional] 
**SubType** | **String** | Subtype the counts apply to. `UNKNOWN` is used for entities that have no subtype. | [optional] 
**TotalCount** | **Int64** | Number of entities of this type and subtype that existed on the day. | [optional] 
**CreatedCount** | **Int64** | Number of entities of this type and subtype created on the day. | [optional] 
**CreatedCount30d** | **Int64** | Number of entities of this type and subtype created in the 30 days ending on the day. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityDailyCountMetric = Initialize-MachineIdentityDailyCountMetric  -EntityType machine_identity `
 -SubType AI Agent `
 -TotalCount 412 `
 -CreatedCount 3 `
 -CreatedCount30d 37
```

- Convert the resource to JSON
```powershell
$MachineIdentityDailyCountMetric | ConvertTo-JSON
```


[[Back to top]](#) 

