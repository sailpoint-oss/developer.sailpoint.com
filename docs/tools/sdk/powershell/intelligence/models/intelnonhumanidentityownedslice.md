# Intelnonhumanidentityownedslice

# Intelnonhumanidentityownedslice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelnonhumanidentityownershipitem**](intelnonhumanidentityownershipitem) | First page of owned non-human identities for this role. | [required]
**TotalCount** | **Int32** | Total number of owned non-human identities in this role; omitted when items is empty. | [optional] 
**Next** | **String** | Absolute URL to the next page for this category and ownership role; present when totalCount exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and `count=true`.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelnonhumanidentityownedslice = Initialize-Intelnonhumanidentityownedslice  -Items null `
 -TotalCount 11 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true
```

- Convert the resource to JSON
```powershell
$Intelnonhumanidentityownedslice | ConvertTo-JSON
```


[[Back to top]](#) 

