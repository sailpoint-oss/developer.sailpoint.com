---
id: beta-import-form-definitions-request-inner
title: ImportFormDefinitionsRequestInner
pagination_label: ImportFormDefinitionsRequestInner
sidebar_label: ImportFormDefinitionsRequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner'] 
slug: /tools/sdk/python/beta/models/import-form-definitions-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner']
---

# ImportFormDefinitionsRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**var_self** | **str** |  | [optional] 
**version** | **int** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.import_form_definitions_request_inner import ImportFormDefinitionsRequestInner

import_form_definitions_request_inner = ImportFormDefinitionsRequestInner(
object=sailpoint.beta.models.form_definition_response.FormDefinitionResponse(
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
                    modified = '2023-07-12T20:14:57.744860Z', ),
var_self='',
version=56
)

```
[[Back to top]](#) 

