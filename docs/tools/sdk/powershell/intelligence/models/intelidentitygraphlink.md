# Intelidentitygraphlink

# Intelidentitygraphlink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Href** | **String** | Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity` and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity` for Human responses and `machine_identity` for NHI responses.  | [required]

## Examples

- Prepare the resource
```powershell
$Intelidentitygraphlink = Initialize-Intelidentitygraphlink  -Href https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8
```

- Convert the resource to JSON
```powershell
$Intelidentitygraphlink | ConvertTo-JSON
```


[[Back to top]](#) 

