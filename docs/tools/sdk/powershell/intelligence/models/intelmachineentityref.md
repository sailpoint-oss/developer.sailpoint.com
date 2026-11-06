# Intelmachineentityref

# Intelmachineentityref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY). | [required]
**Id** | **String** | Referenced object identifier. | [required]
**Name** | **String** | Display name for the referenced identity or entity. | [required]
**Email** | **String** | Email for authorized human holders when available upstream. | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelmachineentityref = Initialize-Intelmachineentityref  -Type IDENTITY `
 -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Example User `
 -Email user@example.com
```

- Convert the resource to JSON
```powershell
$Intelmachineentityref | ConvertTo-JSON
```


[[Back to top]](#) 

