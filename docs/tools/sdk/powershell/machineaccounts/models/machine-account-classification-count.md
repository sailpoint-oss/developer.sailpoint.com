# MachineAccountClassificationCount

# MachineAccountClassificationCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassificationMethod** |  **Enum** [  "CRITERIA",    "SOURCE",    "DISCOVERY" ] | The classification method that found the candidates. | [optional] 
**Count** | **Int32** | The number of candidates found by this classification method. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountClassificationCount = Initialize-MachineAccountClassificationCount  -ClassificationMethod CRITERIA `
 -Count 42
```

- Convert the resource to JSON
```powershell
$MachineAccountClassificationCount | ConvertTo-JSON
```


[[Back to top]](#) 

