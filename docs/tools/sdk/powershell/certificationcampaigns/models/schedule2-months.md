# Schedule2Months

# Schedule2Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify months value | [required]
**Values** | **[]String** | Values of the months based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Months = Initialize-Schedule2Months  -Type LIST `
 -Values ["1"] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$Schedule2Months | ConvertTo-JSON
```


[[Back to top]](#) 

