# PeerGroupMember

# PeerGroupMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | A unique identifier for the peer group member. | [optional] 
**Type** | **String** | The type of the peer group member. | [optional] 
**PeerGroupId** | **String** | The ID of the peer group. | [optional] 
**Attributes** | **map[string]SystemCollectionsHashtable** | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 

## Examples

- Prepare the resource
```powershell
$PeerGroupMember = Initialize-PeerGroupMember  -Id null `
 -Type null `
 -PeerGroupId null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$PeerGroupMember | ConvertTo-JSON
```


[[Back to top]](#) 

