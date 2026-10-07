# Orphanidentitiesreportarguments

# Orphanidentitiesreportarguments

Arguments for Orphan Identities report (ORPHAN_IDENTITIES)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_formats** | **[]str** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
\}

## Example

```python
from sailpoint.reports_data_extraction.models.orphanidentitiesreportarguments import Orphanidentitiesreportarguments

orphanidentitiesreportarguments = Orphanidentitiesreportarguments(
selected_formats=["CSV"]
)

```
[[Back to top]](#) 

