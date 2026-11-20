# IntelOutliersSlice

# IntelOutliersSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RareAccess** | [**IntelRareAccessSlice**](intel-rare-access-slice) | First page of rare access items for the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IntelOutliersSlice = Initialize-IntelOutliersSlice  -RareAccess null
```

- Convert the resource to JSON
```powershell
$IntelOutliersSlice | ConvertTo-JSON
```


[[Back to top]](#) 

