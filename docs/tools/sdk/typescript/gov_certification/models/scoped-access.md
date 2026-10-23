# ScopedAccess

# ScopedAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `ScopedAccessType` |  | [default to undefined]
**id** | **(optional)** `string` | Unique identifier of the access item. | [default to undefined]
**name** | **(optional)** `string` | Name of the access item. | [default to undefined]
**description** | **(optional)** `string` | Description of the access item. | [default to undefined]
**sourceName** | **(optional)** `string` | Name of the source that provides this access. | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access item is privileged. Retained for backward compatibility. | [default to false]
**attributeName** | **(optional)** `string` | Name of the attribute that defines this access. | [default to undefined]
**attributeValue** | **(optional)** `string` | Value of the attribute that defines this access. | [default to undefined]
**hasDataAccess** | **(optional)** `boolean` | Indicates whether this access grants data access. | [default to false]

