# CreateSourceSubtypeV2Request

# CreateSourceSubtypeV2Request

Request body for creating a machine account subtype at the source tier or the connector tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'SOURCE',    'CONNECTOR' ] | Tier to create the subtype at. Defaults to `SOURCE`. | [optional] [default to 'SOURCE']
**target_id** | **str** | Scope key of the subtype. The source ID for a `SOURCE` subtype, or a registered connector type for a `CONNECTOR` subtype. | [required]
**target_name** | **str** | Display name of the target. For a `CONNECTOR` subtype, a supplied value must match the connector's registered name and is replaced by the registered spelling. When omitted, the registered name is used. | [optional] 
**technical_name** | **str** | Technical name of the subtype. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [required]
**type** | **str** | Entity type of the subtype. Defaults to `MACHINE`. | [optional] [default to 'MACHINE']
**classification** |  **Enum** [  'MACHINE' ] | Classification of the subtype. Defaults to `MACHINE`. | [optional] [default to 'MACHINE']
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.create_source_subtype_v2_request import CreateSourceSubtypeV2Request

create_source_subtype_v2_request = CreateSourceSubtypeV2Request(
target_type='SOURCE',
target_id='active-directory',
target_name='Active Directory',
technical_name='service-account',
display_name='Service Account',
description='Accounts used by automated services.',
type='MACHINE',
classification='MACHINE'
)

```
[[Back to top]](#) 

