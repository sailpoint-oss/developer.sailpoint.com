# EntitlementConnectionSearchHit

# EntitlementConnectionSearchHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Connection ID as represented in search results. | [optional] 
**Identity** | **map[string]AnyType** | Identity summary object from search index. | [optional] 
**MachineIdentity** | **map[string]AnyType** | Machine identity summary object when available. | [optional] 
**Account** | **map[string]AnyType** | Account summary object. | [optional] 
**Entitlement** | [**EntitlementConnectionSearchHitEntitlement**](entitlement-connection-search-hit-entitlement) |  | [optional] 
**Source** | **map[string]AnyType** | Source summary object. | [optional] 
**State** | **map[string]AnyType** | Connection state object. | [optional] 
**Jit** | **map[string]AnyType** | JIT timestamps for lifecycle events. | [optional] 
**Standalone** | **Boolean** | Indicates whether the connection is marked as standalone. | [optional] [default to $false]
**Type** |  **Enum** [  "JIT",    "STANDING",    "NA" ] | Connection type classification. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementConnectionSearchHit = Initialize-EntitlementConnectionSearchHit  -Id 6c692d9972f8400ca4560a68f62c4c5f `
 -Identity {"id":"2c918084804e1a0c0180628967085bc0","type":"IDENTITY","name":"Donna Helpdesk21b7","alias":"Donna.Helpdesk21b7"} `
 -MachineIdentity {"id":"2c918084804e1a0c0180628967085bc1","type":"MACHINE","name":"service123"} `
 -Account {"id":"17a0e011f3fc4b43a19ddf13d6b92ede","name":"account-name123"} `
 -Entitlement null `
 -Source {"id":"a8c0036f95b347d5a3a55a81f515f8ef","name":"ODS-AD-FF-Source"} `
 -State {"value":"Available","changed":"2025-10-30T15:02:12.345-05:00"} `
 -Jit {"activation":"2025-12-03T10:15:30+01:00","provisioned":"2025-12-03T10:15:30+01:00","deactivation":"2025-12-03T10:15:30+01:00","deprovisioned":"2025-12-03T10:15:30+01:00","expiration":"2025-12-03T10:15:30+01:00"} `
 -Standalone true `
 -Type JIT
```

- Convert the resource to JSON
```powershell
$EntitlementConnectionSearchHit | ConvertTo-JSON
```


[[Back to top]](#) 

