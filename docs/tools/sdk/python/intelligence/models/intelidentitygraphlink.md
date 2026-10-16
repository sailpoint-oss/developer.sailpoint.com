# Intelidentitygraphlink

# Intelidentitygraphlink

Deep link into Identity Graph UI for the resolved identity at the aggregate root. Omitted when the tenant lacks the idg:base license.  To access the Identity Graph UI, the user must have the **Identity Graph Read Only** user level assigned. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity` and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity` for Human responses and `machine_identity` for NHI responses.  | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelidentitygraphlink import Intelidentitygraphlink

intelidentitygraphlink = Intelidentitygraphlink(
href='https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8'
)

```
[[Back to top]](#) 

