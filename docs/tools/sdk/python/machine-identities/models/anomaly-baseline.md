# AnomalyBaseline

# AnomalyBaseline

Peer-group baseline for time-series anomaly detections (SIEM source only). Contains the windowed data points and deviation thresholds used to render the anomaly chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ui_feature_name** | **str** | Name of the feature the baseline describes. | [optional] 
**window_size** | **int** | Number of data points in the window. | [optional] 
**values** | **[]int** | Observed values across the window. | [optional] 
**raw_value** | **[]str** | Raw observed values across the window. | [optional] 
**upper_bound** | **[]float** | Upper deviation threshold per data point. | [optional] 
**lower_bound** | **[]float** | Lower deviation threshold per data point. | [optional] 
**minimum_value** | **int** | Minimum value in the window. | [optional] 
**fpr_value** | **float** | False-positive-rate threshold value. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.anomaly_baseline import AnomalyBaseline

anomaly_baseline = AnomalyBaseline(
ui_feature_name='outbound_volume',
window_size=7,
values=[3,5,4,6,5,7,5],
raw_value=["3","5","4","6","5","7","5"],
upper_bound=[8,8.2,8.1,8.5,8.3,8.6,8.4],
lower_bound=[1,1.2,1.1,1.5,1.3,1.6,1.4],
minimum_value=0,
fpr_value=0.01
)

```
[[Back to top]](#) 

