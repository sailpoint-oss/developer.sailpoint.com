# Credential

# Credential

A credential, such as an API key or access key, discovered from a connected source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Description of the credential. | [optional] 
**status** | **str** | The credential status reported by the source. | [optional] 
**native_identity** | **str** | The credential's unique identifier on the source. | [optional] 
**environment** | **str** | The environment the credential belongs to. | [optional] 
**source** | [**CredentialAllOfSource**](credential-all-of-source) |  | [optional] 
**resource** | [**CredentialResource**](credential-resource) |  | [optional] 
**dataset_id** | **str** | The ID of the source dataset the credential was retrieved from. | [optional] 
**type** | **str** | The credential type. | [optional] 
**scope** | **str** | The scope the source reports for the credential. | [optional] 
**expires_at** | **datetime** | The date and time the credential expires. | [optional] 
**last_used_at** | **datetime** | The date and time the credential was last used. | [optional] 
**owners** | [**CredentialOwners**](credential-owners) |  | [optional] 
**attributes** | **map[string]object** | A map of curated credential attributes. | [optional] 
**connector_attributes** | **map[string]object** | A map of attributes sourced from the connector during aggregation. | [optional] 
**manually_edited** | **bool** | Indicates if the credential has been manually edited. | [optional] [default to False]
\}

## Example

```python
from sailpoint.credentials.models.credential import Credential

credential = Credential(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='Key used by the nightly export job',
status='Active',
native_identity='AKIAIOSFODNN7EXAMPLE',
environment='production',
source=,
resource=sailpoint.credentials.models.credential_resource.Credential Resource(
                    id = '8886e5e3-63d0-462f-a195-d98da885b8dc', 
                    type = 'aws:iam-access-key', 
                    name = 'nightly-export-key', 
                    features = ["PROVISIONING"], ),
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='ACCESS_KEY',
scope='read-write',
expires_at='2026-12-31T23:59:59Z',
last_used_at='2026-10-20T08:15Z',
owners=sailpoint.credentials.models.credential_owners.Credential Owners(
                    primary = null, 
                    secondary = [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}], ),
attributes={"status":"Active"},
connector_attributes={"keyId":"AKIAIOSFODNN7EXAMPLE"},
manually_edited=True
)

```
[[Back to top]](#) 

