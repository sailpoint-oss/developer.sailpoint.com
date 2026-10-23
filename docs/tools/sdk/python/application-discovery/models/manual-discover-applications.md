# ManualDiscoverApplications

# ManualDiscoverApplications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. | [required]
\}

## Example

```python
from sailpoint.application_discovery.models.manual_discover_applications import ManualDiscoverApplications

manual_discover_applications = ManualDiscoverApplications(
file='[B@1968a49c'
)

```
[[Back to top]](#) 

