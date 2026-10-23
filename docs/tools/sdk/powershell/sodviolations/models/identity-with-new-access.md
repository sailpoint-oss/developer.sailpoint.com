# IdentityWithNewAccess

# IdentityWithNewAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity id to be checked. | [required]
**AccessRefs** | [**[]IdentityWithNewAccessAccessRefsInner**](identity-with-new-access-access-refs-inner) | The list of access items to consider for possible violations in a preventive check. Supported types are ENTITLEMENT, ACCESS_PROFILE, and ROLE. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccess = Initialize-IdentityWithNewAccess  -IdentityId 2c91808568c529c60168cca6f90c1313 `
 -AccessRefs [{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ACCESS_PROFILE","id":"2c918087682f9a86016839c0509c1ab2"},{"type":"ROLE","id":"2c918087682f9a86016839c050a01ab3"}]
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccess | ConvertTo-JSON
```


[[Back to top]](#) 

