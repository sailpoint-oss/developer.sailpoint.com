# Schedule2Hours

# Schedule2Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify hours value | [required]
**Values** | **[]String** | Values of the days based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Hours = Initialize-Schedule2Hours  -Type LIST `
 -Values ["1"] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$Schedule2Hours | ConvertTo-JSON
```


[[Back to top]](#) 

