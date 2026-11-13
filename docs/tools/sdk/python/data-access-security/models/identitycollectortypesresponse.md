# Identitycollectortypesresponse

# Identitycollectortypesresponse

Public identity collector types available for discovery and create flows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**types** | [**[]Identitycollectortype**](identitycollectortype) | Enabled public identity collector types. Flagged types (Snowflake, Databricks, Atlassian Suite) are omitted when their feature flags are disabled. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectortypesresponse import Identitycollectortypesresponse

identitycollectortypesresponse = Identitycollectortypesresponse(
types=[
                    sailpoint.data_access_security.models.identitycollectortype.Identitycollectortype(
                        type = 'Google Drive', 
                        isc_connector_names = ["G Suite","Google Workspace SaaS"], )
                    ]
)

```
[[Back to top]](#) 

