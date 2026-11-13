# CreateUploadedConfigurationV1Request

# CreateUploadedConfigurationV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | JSON file containing the objects to be imported. | [required]
**name** | **str** | Name that will be assigned to the uploaded configuration file. | [required]
\}

## Example

```python
from sailpoint.configuration_hub.models.create_uploaded_configuration_v1_request import CreateUploadedConfigurationV1Request

create_uploaded_configuration_v1_request = CreateUploadedConfigurationV1Request(
data=bytes(b'blah'),
name=''
)

```
[[Back to top]](#) 

