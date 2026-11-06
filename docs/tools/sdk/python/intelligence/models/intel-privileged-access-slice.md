# IntelPrivilegedAccessSlice

# IntelPrivilegedAccessSlice

Full privileged access result embedded in the aggregate identity response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]IntelPrivilegedAccessItemWire**](intel-privileged-access-item-wire) | Privileged access items for the identity. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intel_privileged_access_slice import IntelPrivilegedAccessSlice

intel_privileged_access_slice = IntelPrivilegedAccessSlice(
items=[
                    sailpoint.intelligence.models.intel_privileged_access_item_wire.IntelPrivilegedAccessItemWire(
                        privileged = True, 
                        privilege_level = sailpoint.intelligence.models.intelprivilegelevel.Intelprivilegelevel(
                            effective = 'HIGH', ), 
                        id = 'ent-1', 
                        type = 'entitlement', 
                        display_name = 'Example_Admin_Access', 
                        name = 'Example_Admin_Access', 
                        source = sailpoint.intelligence.models.intel_privileged_access_item_wire_source.IntelPrivilegedAccessItemWire_source(
                            name = 'Example HR Source', 
                            id = 'src-2', ), 
                        attribute = 'EXAMPLE_PERMISSION_GROUPS', 
                        value = 'Example_Admin_Access', )
                    ]
)

```
[[Back to top]](#) 

