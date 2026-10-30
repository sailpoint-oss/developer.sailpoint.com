# CredentialResource

# CredentialResource

The source resource a credential is derived from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source resource identifier. | [optional] 
**type** | **str** | The type of the source resource. | [optional] 
**name** | **str** | The display name of the source resource. | [optional] 
**features** | **[]str** | The set of features supported by the source resource. | [optional] 
\}

## Example

```python
from sailpoint.credentials.models.credential_resource import CredentialResource

credential_resource = CredentialResource(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='aws:iam-access-key',
name='nightly-export-key',
features=["PROVISIONING"]
)

```
[[Back to top]](#) 

