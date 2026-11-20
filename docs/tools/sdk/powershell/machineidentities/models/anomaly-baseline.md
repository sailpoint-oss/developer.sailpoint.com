# AnomalyBaseline

# AnomalyBaseline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UiFeatureName** | **String** | Name of the feature the baseline describes. | [optional] 
**WindowSize** | **Int32** | Number of data points in the window. | [optional] 
**Values** | **[]Int32** | Observed values across the window. | [optional] 
**RawValue** | **[]String** | Raw observed values across the window. | [optional] 
**UpperBound** | **[]Double** | Upper deviation threshold per data point. | [optional] 
**LowerBound** | **[]Double** | Lower deviation threshold per data point. | [optional] 
**MinimumValue** | **Int32** | Minimum value in the window. | [optional] 
**FprValue** | **Double** | False-positive-rate threshold value. | [optional] 

## Examples

- Prepare the resource
```powershell
$AnomalyBaseline = Initialize-AnomalyBaseline  -UiFeatureName outbound_volume `
 -WindowSize 7 `
 -Values [3,5,4,6,5,7,5] `
 -RawValue ["3","5","4","6","5","7","5"] `
 -UpperBound [8,8.2,8.1,8.5,8.3,8.6,8.4] `
 -LowerBound [1,1.2,1.1,1.5,1.3,1.6,1.4] `
 -MinimumValue 0 `
 -FprValue 0.01
```

- Convert the resource to JSON
```powershell
$AnomalyBaseline | ConvertTo-JSON
```


[[Back to top]](#) 

