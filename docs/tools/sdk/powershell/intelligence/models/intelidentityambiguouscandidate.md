# Intelidentityambiguouscandidate

# Intelidentityambiguouscandidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity Security Cloud identifier for a matching candidate. | [required]
**DisplayName** | **String** | Human-facing label when available; omitted when empty upstream. | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelidentityambiguouscandidate = Initialize-Intelidentityambiguouscandidate  -Id ef38f94347e94562b5bb8424a56397d8 `
 -DisplayName Jane Example
```

- Convert the resource to JSON
```powershell
$Intelidentityambiguouscandidate | ConvertTo-JSON
```


[[Back to top]](#) 

