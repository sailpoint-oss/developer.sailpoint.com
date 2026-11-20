# EntitlementConnectionSearchHitEntitlement

# EntitlementConnectionSearchHitEntitlement

Entitlement object embedded in entitlement connection search responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Entitlement identifier. | [optional] 
**name** | **str** | Entitlement name. | [optional] 
**display_name** | **str** | Human-readable entitlement label. | [optional] 
**description** | **str** | Entitlement description. | [optional] 
**attribute** | **str** | Source attribute carrying entitlement values. | [optional] 
**value** | **str** | Source entitlement value. | [optional] 
**source_schema_object_type** | **str** | Source schema object type for the entitlement. | [optional] 
**privilege_level** | [**EntitlementConnectionSearchHitEntitlementPrivilegeLevel**](entitlement-connection-search-hit-entitlement-privilege-level) |  | [optional] 
\}

## Example

```python
from sailpoint.entitlement_connections.models.entitlement_connection_search_hit_entitlement import EntitlementConnectionSearchHitEntitlement

entitlement_connection_search_hit_entitlement = EntitlementConnectionSearchHitEntitlement(
id='2c918085804e1a0601806289c30a66de',
name='Launcher',
display_name='Launcher',
description='description of launcher entitlement',
attribute='memberOf',
value='CN=productivity-bryants-org-1,OU=Groups,dc=flatfile,dc=endtoend,dc=com',
source_schema_object_type='ENTITLEMENT',
privilege_level=sailpoint.entitlement_connections.models.entitlement_connection_search_hit_entitlement_privilege_level.EntitlementConnectionSearchHitEntitlement_privilegeLevel(
                    effective = 'HIGH', )
)

```
[[Back to top]](#) 

