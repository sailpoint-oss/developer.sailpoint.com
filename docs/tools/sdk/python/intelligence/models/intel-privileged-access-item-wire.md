# IntelPrivilegedAccessItemWire

# IntelPrivilegedAccessItemWire


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privileged** | **bool** | True when this item is classified as privileged access for the identity. | [required]
**privilege_level** | [**Intelprivilegelevel**](intelprivilegelevel) |  | [optional] 
**id** | **str** | Identifier of the privileged access item. | [required]
**type** | **str** | Type of privileged access object. | [required]
**display_name** | **str** | Display label for the privileged access item in administrative experiences. | [optional] 
**name** | **str** | Technical name of the privileged access item. | [optional] 
**source** | [**IntelPrivilegedAccessItemWireSource**](intel-privileged-access-item-wire-source) |  | [optional] 
**attribute** | **str** | Source attribute name that carries the privileged value when applicable. | [optional] 
**value** | **str** | Privileged value on the source attribute when applicable. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_privileged_access_item_wire import IntelPrivilegedAccessItemWire

intel_privileged_access_item_wire = IntelPrivilegedAccessItemWire(
privileged=True,
privilege_level=sailpoint.intelligence.models.intelprivilegelevel.Intelprivilegelevel(
                    effective = 'HIGH', ),
id='ent-1',
type='entitlement',
display_name='Example_Admin_Access',
name='Example_Admin_Access',
source=sailpoint.intelligence.models.intel_privileged_access_item_wire_source.IntelPrivilegedAccessItemWire_source(
                    name = 'Example HR Source', 
                    id = 'src-2', ),
attribute='EXAMPLE_PERMISSION_GROUPS',
value='Example_Admin_Access'
)

```
[[Back to top]](#) 

