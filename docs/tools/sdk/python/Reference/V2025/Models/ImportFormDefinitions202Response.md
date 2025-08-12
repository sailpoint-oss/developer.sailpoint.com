---
id: v2025-import-form-definitions202-response
title: ImportFormDefinitions202Response
pagination_label: ImportFormDefinitions202Response
sidebar_label: ImportFormDefinitions202Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportFormDefinitions202Response', 'V2025ImportFormDefinitions202Response'] 
slug: /tools/sdk/python/v2025/models/import-form-definitions202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202Response', 'V2025ImportFormDefinitions202Response']
---

# ImportFormDefinitions202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**imported_objects** | [**[]ImportFormDefinitionsRequestInner**](import-form-definitions-request-inner) |  | [optional] 
**infos** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**warnings** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.import_form_definitions202_response import ImportFormDefinitions202Response

import_form_definitions202_response = ImportFormDefinitions202Response(
errors=[
                    sailpoint.v2025.models.import_form_definitions_202_response_errors_inner.importFormDefinitions_202_response_errors_inner(
                        detail = {
                            'key' : None
                            }, 
                        key = '', 
                        text = '', )
                    ],
imported_objects=[
                    sailpoint.v2025.models.import_form_definitions_request_inner.importFormDefinitions_request_inner(
                        object = sailpoint.v2025.models.form_definition_response.FormDefinitionResponse(
                            id = '00000000-0000-0000-0000-000000000000', 
                            name = 'My form', 
                            description = 'My form description', 
                            owner = sailpoint.v2025.models.form_owner.FormOwner(
                                type = 'IDENTITY', 
                                id = '2c9180867624cbd7017642d8c8c81f67', 
                                name = 'Grant Smith', ), 
                            used_by = [
                                sailpoint.v2025.models.form_used_by.FormUsedBy(
                                    type = 'WORKFLOW', 
                                    id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                                    name = 'Access Request Form', )
                                ], 
                            form_input = [
                                sailpoint.v2025.models.form_definition_input.FormDefinitionInput(
                                    id = '00000000-0000-0000-0000-000000000000', 
                                    type = 'STRING', 
                                    label = 'input1', 
                                    description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                                ], 
                            form_elements = [
                                sailpoint.v2025.models.form_element.FormElement(
                                    id = '00000000-0000-0000-0000-000000000000', 
                                    element_type = 'TEXT', 
                                    config = {label=Department}, 
                                    key = 'department', 
                                    validations = [
                                        sailpoint.v2025.models.form_element_validations_set.FormElementValidationsSet(
                                            validation_type = 'REQUIRED', )
                                        ], )
                                ], 
                            form_conditions = [
                                sailpoint.v2025.models.form_condition.FormCondition(
                                    rule_operator = 'AND', 
                                    rules = [
                                        sailpoint.v2025.models.condition_rule.ConditionRule(
                                            source_type = 'ELEMENT', 
                                            source = 'department', 
                                            operator = 'EQ', 
                                            value_type = 'STRING', 
                                            value = 'Engineering', )
                                        ], 
                                    effects = [
                                        sailpoint.v2025.models.condition_effect.ConditionEffect(
                                            effect_type = 'HIDE', 
                                            config = sailpoint.v2025.models.condition_effect_config.ConditionEffect_config(
                                                default_value_label = 'Access to Remove', 
                                                element = '8110662963316867', ), )
                                        ], )
                                ], 
                            created = '2023-07-12T20:14:57.744860Z', 
                            modified = '2023-07-12T20:14:57.744860Z', ), 
                        self = '', 
                        version = 56, )
                    ],
infos=[
                    sailpoint.v2025.models.import_form_definitions_202_response_errors_inner.importFormDefinitions_202_response_errors_inner(
                        detail = {
                            'key' : None
                            }, 
                        key = '', 
                        text = '', )
                    ],
warnings=[
                    sailpoint.v2025.models.import_form_definitions_202_response_errors_inner.importFormDefinitions_202_response_errors_inner(
                        detail = {
                            'key' : None
                            }, 
                        key = '', 
                        text = '', )
                    ]
)

```
[[Back to top]](#) 

