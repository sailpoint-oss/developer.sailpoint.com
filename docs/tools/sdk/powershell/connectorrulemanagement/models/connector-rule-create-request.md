# ConnectorRuleCreateRequest

# ConnectorRuleCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | [required]
**Attributes** | **SystemCollectionsHashtable** | a map of string to objects | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequest = Initialize-ConnectorRuleCreateRequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

