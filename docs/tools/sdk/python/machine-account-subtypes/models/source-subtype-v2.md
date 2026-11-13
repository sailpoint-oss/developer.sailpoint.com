# SourceSubtypeV2

# SourceSubtypeV2

A machine account subtype defined at the source tier or the connector tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the subtype. | [optional] 
**technical_name** | **str** | Technical name of the subtype. | [optional] 
**display_name** | **str** | Display name of the subtype. | [optional] 
**description** | **str** | Description of the subtype. | [optional] 
**type** | **str** | Entity type of the subtype. | [optional] 
**target_type** |  **Enum** [  'SOURCE',    'CONNECTOR',    'CONNECTOR_VARIANT' ] | Tier the subtype is defined at. `SOURCE` subtypes apply to one source. `CONNECTOR` subtypes apply to every source of a connector type. `CONNECTOR_VARIANT` is reserved for future use. | [optional] 
**target_id** | **str** | Scope key of the subtype. The source ID for `SOURCE` subtypes, or the connector type for `CONNECTOR` subtypes. | [optional] 
**target_name** | **str** | Display name of the target source or connector. | [optional] 
**classification** |  **Enum** [  'MACHINE' ] | Classification of the subtype. | [optional] 
**origin** |  **Enum** [  'SOURCE',    'CONNECTOR',    'CONNECTOR_VARIANT' ] | Tier of the parent subtype this subtype overrides. Set to `CONNECTOR` when a source subtype replaces a connector subtype with the same technical name in a source's effective subtype list. Otherwise `null`. | [optional] 
**profile** | [**SourceSubtypeV2Profile**](source-subtype-v2-profile) |  | [optional] 
**system_managed** | **bool** | Indicates whether the subtype is managed by the system. | [optional] [readonly] [default to False]
**created** | **datetime** | Creation timestamp. | [optional] 
**modified** | **datetime** | Last modified timestamp. | [optional] 
**target** | [**SubtypeTarget**](subtype-target) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2

source_subtype_v2 = SourceSubtypeV2(
id='43bdd144-4b17-4fce-a744-17c7fd3e717b',
technical_name='service-account',
display_name='Service Account',
description='Accounts used by automated services.',
type='MACHINE',
target_type='CONNECTOR',
target_id='active-directory',
target_name='Active Directory',
classification='MACHINE',
origin='SOURCE',
profile=sailpoint.machine_account_subtypes.models.source_subtype_v2_profile.SourceSubtypeV2_profile(
                    id = '9a4b7d2e-1c3f-4e5a-8b6c-7d8e9f0a1b2c', 
                    connector_type = 'JDBC', 
                    variant = 'MySql', ),
system_managed=False,
created='2026-07-28T16:13:42.801Z',
modified='2026-07-28T16:13:42.750Z',
target=sailpoint.machine_account_subtypes.models.subtype_target.Subtype Target(
                    type = 'CONNECTOR', 
                    id = 'active-directory', 
                    name = 'Active Directory', 
                    supports_provisioning = True, )
)

```
[[Back to top]](#) 

