# ConnectorRuleUpdateRequest

# ConnectorRuleUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the rule | [required]
**Description** | **String** | a description of the rule's purpose | [optional] 
**Type** |  **Enum** [  "BuildMap",    "ConnectorAfterCreate",    "ConnectorAfterDelete",    "ConnectorAfterModify",    "ConnectorBeforeCreate",    "ConnectorBeforeDelete",    "ConnectorBeforeModify",    "JDBCBuildMap",    "JDBCOperationProvisioning",    "JDBCProvision",    "PeopleSoftHRMSBuildMap",    "PeopleSoftHRMSOperationProvisioning",    "PeopleSoftHRMSProvision",    "RACFPermissionCustomization",    "ResourceObjectCustomization",    "SAPBuildMap",    "SapHrManagerRule",    "SapHrOperationProvisioning",    "SapHrProvision",    "SuccessFactorsOperationProvisioning",    "WebServiceAfterOperationRule",    "WebServiceBeforeOperationRule",    "ResourceObjectCustomization" ] | the type of rule | [required]
**Signature** | [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**SourceCode** | [**SourceCode**](source-code) |  | [required]
**Attributes** | **SystemCollectionsHashtable** | a map of string to objects | [optional] 
**Id** | **String** | the ID of the rule to update | [required]

## Examples

- Prepare the resource
```powershell
$ConnectorRuleUpdateRequest = Initialize-ConnectorRuleUpdateRequest  -Name WebServiceBeforeOperationRule `
 -Description This rule does that `
 -Type BuildMap `
 -Signature null `
 -SourceCode null `
 -Attributes {} `
 -Id 8113d48c0b914f17b4c6072d4dcb9dfe
```

- Convert the resource to JSON
```powershell
$ConnectorRuleUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

