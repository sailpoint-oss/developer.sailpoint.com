---
id: beta-list-form-definitions-by-tenant-response
title: ListFormDefinitionsByTenantResponse
pagination_label: ListFormDefinitionsByTenantResponse
sidebar_label: ListFormDefinitionsByTenantResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListFormDefinitionsByTenantResponse', 'BetaListFormDefinitionsByTenantResponse'] 
slug: /tools/sdk/python/beta/models/list-form-definitions-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormDefinitionsByTenantResponse', 'BetaListFormDefinitionsByTenantResponse']
---

# ListFormDefinitionsByTenantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count number of results. | [optional] 
**results** | [**[]FormDefinitionResponse**](form-definition-response) | List of FormDefinitionResponse items. | [optional] 
}

## Example

```python
from sailpoint.beta.models.list_form_definitions_by_tenant_response import ListFormDefinitionsByTenantResponse

list_form_definitions_by_tenant_response = ListFormDefinitionsByTenantResponse(
count=1,
results=[
                    sailpoint.beta.models.form_definition_response.FormDefinitionResponse(
                        id = '00000000-0000-0000-0000-000000000000', 
                        name = 'My form', 
                        description = 'My form description', 
                        owner = sailpoint.beta.models.form_owner.FormOwner(
                            type = 'IDENTITY', 
                            id = '2c9180867624cbd7017642d8c8c81f67', 
                            name = 'Grant Smith', ), 
                        used_by = [
                            sailpoint.beta.models.form_used_by.FormUsedBy(
                                type = 'WORKFLOW', 
                                id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                                name = 'Access Request Form', )
                            ], 
                        form_input = [
                            sailpoint.beta.models.form_definition_input.FormDefinitionInput(
                                id = '00000000-0000-0000-0000-000000000000', 
                                type = 'STRING', 
                                label = 'input1', 
                                description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                            ], 
                        form_elements = [
                            sailpoint.beta.models.form_element.FormElement(
                                id = '00000000-0000-0000-0000-000000000000', 
                                element_type = 'TEXT', 
                                config = {label=Department}, 
                                key = 'department', 
                                validations = [
                                    sailpoint.beta.models.form_element_validations_set.FormElementValidationsSet(
                                        validation_type = 'REQUIRED', )
                                    ], )
                            ], 
                        form_conditions = [
                            sailpoint.beta.models.form_condition.FormCondition(
                                rule_operator = 'AND', 
                                rules = [
                                    sailpoint.beta.models.condition_rule.ConditionRule(
                                        source_type = 'ELEMENT', 
                                        source = 'department', 
                                        operator = 'EQ', 
                                        value_type = 'STRING', 
                                        value = 'Engineering', )
                                    ], 
                                effects = [
                                    sailpoint.beta.models.condition_effect.ConditionEffect(
                                        effect_type = 'HIDE', 
                                        config = sailpoint.beta.models.condition_effect_config.ConditionEffect_config(
                                            default_value_label = 'Access to Remove', 
                                            element = '8110662963316867', ), )
                                    ], )
                            ], 
                        created = '2023-07-12T20:14:57.744860Z', 
                        modified = '2023-07-12T20:14:57.744860Z', )
                    ]
)

```
[[Back to top]](#) 

