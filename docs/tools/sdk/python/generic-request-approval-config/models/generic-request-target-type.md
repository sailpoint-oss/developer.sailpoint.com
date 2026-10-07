# GenericRequestTargetType

# GenericRequestTargetType

Scope of a generic request approval configuration document.  Phase II agent activate and deactivate use `RESOURCE` and `GLOBAL`. `SUBTYPE` and `SOURCE` are accepted by the service for other generic-request vocabularies.  | targetType | Allowed actions | targetId | sourceId | |------------|-----------------|----------|----------| | RESOURCE | ACTIVATE, DEACTIVATE | Required. Connector resource **id** (not the `std:*` type). Resolved resource type must be `std:agent`. | Required | | GLOBAL | ACTIVATE, DEACTIVATE | Derived (tenant id). Omit. | Must be omitted | | SUBTYPE | CREATE, DELETE | Required. Subtype id. | Required | | SOURCE | DELETE | Derived from sourceId. | Required |

## Enum

* `RESOURCE` (value: `'RESOURCE'`)

* `GLOBAL` (value: `'GLOBAL'`)

* `SUBTYPE` (value: `'SUBTYPE'`)

* `SOURCE` (value: `'SOURCE'`)

[[Back to top]](#) 

