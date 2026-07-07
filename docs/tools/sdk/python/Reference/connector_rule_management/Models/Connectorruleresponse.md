---
id: connectorruleresponse
title: Connectorruleresponse
pagination_label: Connectorruleresponse
sidebar_label: Connectorruleresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorruleresponse', 'Connectorruleresponse'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorruleresponse
tags: ['SDK', 'Software Development Kit', 'Connectorruleresponse', 'Connectorruleresponse']
---

# Connectorruleresponse

ConnectorRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the rule | [required]
**description** | **str** | a description of the rule's purpose | [optional] 
**type** |  **Enum** [  'BuildMap',    'ConnectorAfterCreate',    'ConnectorAfterDelete',    'ConnectorAfterModify',    'ConnectorBeforeCreate',    'ConnectorBeforeDelete',    'ConnectorBeforeModify',    'JDBCBuildMap',    'JDBCOperationProvisioning',    'JDBCProvision',    'PeopleSoftHRMSBuildMap',    'PeopleSoftHRMSOperationProvisioning',    'PeopleSoftHRMSProvision',    'RACFPermissionCustomization',    'ResourceObjectCustomization',    'SAPBuildMap',    'SapHrManagerRule',    'SapHrOperationProvisioning',    'SapHrProvision',    'SuccessFactorsOperationProvisioning',    'WebServiceAfterOperationRule',    'WebServiceBeforeOperationRule',    'ResourceObjectCustomization' ] | the type of rule | [required]
**signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**source_code** | [**Sourcecode**](sourcecode) |  | [required]
**attributes** | **object** | a map of string to objects | [optional] 
**id** | **str** | the ID of the rule | [required]
**created** | **str** | an ISO 8601 UTC timestamp when this rule was created | [required]
**modified** | **str** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorruleresponse import Connectorruleresponse

connectorruleresponse = Connectorruleresponse(
name='WebServiceBeforeOperationRule',
description='This rule does that',
type='BuildMap',
signature=sailpoint.connector_rule_management.models.connectorrulecreaterequest_signature.connectorrulecreaterequest_signature(
                    input = [
                        sailpoint.connector_rule_management.models.argument.Argument(
                            name = 'firstName', 
                            description = 'the first name of the identity', 
                            type = 'String', )
                        ], 
                    output = sailpoint.connector_rule_management.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', ), ),
source_code=sailpoint.connector_rule_management.models.source_code.Source Code(
                    version = '1.0', 
                    script = 'return "Mr. " + firstName;', ),
attributes={},
id='8113d48c0b914f17b4c6072d4dcb9dfe',
created='021-07-22T15:59:23Z',
modified='021-07-22T15:59:23Z'
)

```
[[Back to top]](#) 

