# SourceUsage

# SourceUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The first day of the month for which activity is aggregated. | [optional] 
**count** | **float** | The average number of days that accounts were active within this source, for the month. | [optional] 
\}

## Example

```python
from sailpoint.source_usages.models.source_usage import SourceUsage

source_usage = SourceUsage(
var_date='Fri Apr 21 00:00:00 UTC 2023',
count=10.45
)

```
[[Back to top]](#) 

