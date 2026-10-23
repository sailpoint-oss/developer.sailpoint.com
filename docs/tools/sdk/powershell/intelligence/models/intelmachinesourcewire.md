# Intelmachinesourcewire

# Intelmachinesourcewire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source identifier. | [required]
**Name** | **String** | Source display name. | [required]
**Type** | **String** | Source type label from upstream. | [required]

## Examples

- Prepare the resource
```powershell
$Intelmachinesourcewire = Initialize-Intelmachinesourcewire  -Id 60de165099e649cb828553a5e8510fc4 `
 -Name Example Directory `
 -Type DelimitedFile
```

- Convert the resource to JSON
```powershell
$Intelmachinesourcewire | ConvertTo-JSON
```


[[Back to top]](#) 

