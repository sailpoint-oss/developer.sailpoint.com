# MCPPackage

# MCPPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistryType** | **String** | Package registry that hosts the package. | [optional] 
**Identifier** | **String** | Package identifier within the registry. | [optional] 
**Command** | **String** | Command used to launch the package. | [optional] 
**VarArgs** | **[]String** | Arguments passed to the launch command, in the order they are applied. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPPackage = Initialize-MCPPackage  -RegistryType npm `
 -Identifier @modelcontextprotocol/server-github `
 -Command npx `
 -VarArgs ["-y","@modelcontextprotocol/server-github"]
```

- Convert the resource to JSON
```powershell
$MCPPackage | ConvertTo-JSON
```


[[Back to top]](#) 

