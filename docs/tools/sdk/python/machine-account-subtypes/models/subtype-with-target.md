# SubtypeWithTarget

# SubtypeWithTarget

Tiered source subtype as returned by v2 list, create, and patch. Get-by-id uses Subtype With Target Provisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Server-generated subtype identifier. Must not be supplied on create. | [optional] [readonly] 
**technical_name** | **str** | Technical name of the subtype. Unique within the target tier scope. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [required]
**type** | **str** | Entity type of the subtype. Defaults to `MACHINE` when omitted. | [optional] [default to 'MACHINE']
**target_type** | **SubtypeTargetType** |  | [optional] 
**target_id** | **str** | Scope key for the subtype. Source id when `targetType` is `SOURCE`. Connector type or connector specification id when `targetType` is `CONNECTOR`. | [required]
**target_name** | **str** | Human-readable target label. May be omitted on create; the service persists a display name. | [optional] [default to '']
**classification** | **SubtypeClassification** |  | [optional] 
**origin** |  **Enum** [  'SOURCE',    'CONNECTOR',    'CONNECTOR_VARIANT' ] | Response-only origin badge. Set on effective-set list reads: `CONNECTOR` when a SOURCE winner overrides a CONNECTOR parent of the same technical name. `null` on connector-only and source-only winners, and on plain CRUD list, create, patch, and get-by-id. | [optional] [readonly] 
**profile** | [**ConnectorVariantProfile**](connector-variant-profile) |  | [optional] 
**system_managed** | **bool** | Server-set flag indicating the subtype is managed by the system. Incoming values are ignored. | [optional] [readonly] [default to False]
**created** | **datetime** | Creation timestamp. | [optional] [readonly] 
**modified** | **datetime** | Last modified timestamp. | [optional] [readonly] 
**target** | [**SubtypeTargetRef**](subtype-target-ref) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_with_target import SubtypeWithTarget

subtype_with_target = SubtypeWithTarget(
id='43bdd144-4b17-4fce-a744-17c7fd3e717b',
technical_name='nonPersonal',
display_name='Non Personal',
description='Machine accounts for JDBC connectors',
type='MACHINE',
target_type='CONNECTOR',
target_id='JDBC',
target_name='',
classification='MACHINE',
origin='CONNECTOR',
profile=sailpoint.machine_account_subtypes.models.connector_variant_profile.Connector Variant Profile(
                    id = '65de7634-d315-482c-aad4-7fdbd1e42056', 
                    connector_type = '', 
                    variant = '', ),
system_managed=False,
created='2026-08-18T12:00Z',
modified='2026-08-18T12:00Z',
target=sailpoint.machine_account_subtypes.models.subtype_target_ref.Subtype Target Ref(
                    type = 'CONNECTOR', 
                    id = '65de7634-d315-482c-aad4-7fdbd1e42056', 
                    name = '15Five', )
)

```
[[Back to top]](#) 

