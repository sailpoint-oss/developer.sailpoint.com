# Intelnhicapabilities

# Intelnhicapabilities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mcp** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked MCP servers for this identity. | [optional] 
**Tool** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked tools for this identity. | [optional] 
**Skill** | [**Intelnhicapabilitybucket**](intelnhicapabilitybucket) | Linked skills for this identity. | [optional] 
**Message** | **String** | Set when linked capabilities could not be loaded. The `mcp`, `tool`, and `skill` properties are omitted; only `message` and `reason` are present. | [optional] 
**Reason** | **Intelenrichmentfailurereason** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelnhicapabilities = Initialize-Intelnhicapabilities  -Mcp null `
 -Tool null `
 -Skill null `
 -Message Data temporarily unavailable. Please try again later. `
 -Reason null
```

- Convert the resource to JSON
```powershell
$Intelnhicapabilities | ConvertTo-JSON
```


[[Back to top]](#) 

