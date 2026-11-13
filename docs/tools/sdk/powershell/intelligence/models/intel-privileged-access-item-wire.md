# IntelPrivilegedAccessItemWire

# IntelPrivilegedAccessItemWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Privileged** | **Boolean** | True when this item is classified as privileged access for the identity. | [required]
**PrivilegeLevel** | [**Intelprivilegelevel**](intelprivilegelevel) |  | [optional] 
**Id** | **String** | Identifier of the privileged access item. | [required]
**Type** | **String** | Type of privileged access object. | [required]
**DisplayName** | **String** | Display label for the privileged access item in administrative experiences. | [optional] 
**Name** | **String** | Technical name of the privileged access item. | [optional] 
**Source** | [**IntelPrivilegedAccessItemWireSource**](intel-privileged-access-item-wire-source) |  | [optional] 
**Attribute** | **String** | Source attribute name that carries the privileged value when applicable. | [optional] 
**Value** | **String** | Privileged value on the source attribute when applicable. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelPrivilegedAccessItemWire = Initialize-IntelPrivilegedAccessItemWire  -Privileged true `
 -PrivilegeLevel null `
 -Id ent-1 `
 -Type entitlement `
 -DisplayName Example_Admin_Access `
 -Name Example_Admin_Access `
 -Source null `
 -Attribute EXAMPLE_PERMISSION_GROUPS `
 -Value Example_Admin_Access
```

- Convert the resource to JSON
```powershell
$IntelPrivilegedAccessItemWire | ConvertTo-JSON
```


[[Back to top]](#) 

