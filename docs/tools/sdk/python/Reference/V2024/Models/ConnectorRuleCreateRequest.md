---
id: v2024-connector-rule-create-request
title: ConnectorRuleCreateRequest
pagination_label: ConnectorRuleCreateRequest
sidebar_label: ConnectorRuleCreateRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleCreateRequest', 'V2024ConnectorRuleCreateRequest'] 
slug: /tools/sdk/python/v2024/models/connector-rule-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleCreateRequest', 'V2024ConnectorRuleCreateRequest']
---

# ConnectorRuleCreateRequest

ConnectorRuleCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the rule | [required]
**description** | **str** | a description of the rule's purpose | [optional] 
**type** |  **Enum** [  'BuildMap',    'ConnectorAfterCreate',    'ConnectorAfterDelete',    'ConnectorAfterModify',    'ConnectorBeforeCreate',    'ConnectorBeforeDelete',    'ConnectorBeforeModify',    'JDBCBuildMap',    'JDBCOperationProvisioning',    'JDBCProvision',    'PeopleSoftHRMSBuildMap',    'PeopleSoftHRMSOperationProvisioning',    'PeopleSoftHRMSProvision',    'RACFPermissionCustomization',    'SAPBuildMap',    'SapHrManagerRule',    'SapHrOperationProvisioning',    'SapHrProvision',    'SuccessFactorsOperationProvisioning',    'WebServiceAfterOperationRule',    'WebServiceBeforeOperationRule' ] | the type of rule | [required]
**signature** | [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**source_code** | [**SourceCode**](source-code) |  | [required]
**attributes** | **object** | a map of string to objects | [optional] 
}

## Example

```python
from sailpoint.v2024.models.connector_rule_create_request import ConnectorRuleCreateRequest

connector_rule_create_request = ConnectorRuleCreateRequest(
name='WebServiceBeforeOperationRule',
description='This rule does that',
type='BuildMap',
signature=sailpoint.v2024.models.connector_rule_create_request_signature.ConnectorRuleCreateRequest_signature(
                    input = [
                        sailpoint.v2024.models.argument.Argument(
                            name = 'firstName', 
                            description = 'the first name of the identity', 
                            type = 'String', )
                        ], 
                    output = sailpoint.v2024.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', ), ),
source_code=sailpoint.v2024.models.source_code.SourceCode(
                    version = '1.0', 
                    script = 'return "Mr. " + firstName;', ),
attributes={}
)

```
[[Back to top]](#) 

