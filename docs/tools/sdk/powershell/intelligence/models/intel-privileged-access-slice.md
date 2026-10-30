# IntelPrivilegedAccessSlice

# IntelPrivilegedAccessSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]IntelPrivilegedAccessItemWire**](intel-privileged-access-item-wire) | Privileged access items for the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IntelPrivilegedAccessSlice = Initialize-IntelPrivilegedAccessSlice  -Items null
```

- Convert the resource to JSON
```powershell
$IntelPrivilegedAccessSlice | ConvertTo-JSON
```


[[Back to top]](#) 

