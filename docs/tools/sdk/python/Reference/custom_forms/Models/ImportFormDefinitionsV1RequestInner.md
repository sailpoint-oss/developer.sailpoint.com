---
id: import-form-definitions-v1-request-inner
title: ImportFormDefinitionsV1RequestInner
pagination_label: ImportFormDefinitionsV1RequestInner
sidebar_label: ImportFormDefinitionsV1RequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportFormDefinitionsV1RequestInner', 'ImportFormDefinitionsV1RequestInner'] 
slug: /tools/sdk/python/custom-forms/models/import-form-definitions-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1RequestInner', 'ImportFormDefinitionsV1RequestInner']
---

# ImportFormDefinitionsV1RequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**Formdefinitionresponse**](formdefinitionresponse) |  | [optional] 
**var_self** | **str** |  | [optional] 
**version** | **int** |  | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.import_form_definitions_v1_request_inner import ImportFormDefinitionsV1RequestInner

import_form_definitions_v1_request_inner = ImportFormDefinitionsV1RequestInner(
object=sailpoint.custom_forms.models.formdefinitionresponse.formdefinitionresponse(
                    id = '00000000-0000-0000-0000-000000000000', 
                    name = 'My form', 
                    description = 'My form description', 
                    owner = sailpoint.custom_forms.models.formowner.formowner(
                        type = 'IDENTITY', 
                        id = '2c9180867624cbd7017642d8c8c81f67', 
                        name = 'Grant Smith', ), 
                    used_by = [
                        sailpoint.custom_forms.models.formusedby.formusedby(
                            type = 'WORKFLOW', 
                            id = '61940a92-5484-42bc-bc10-b9982b218cdf', 
                            name = 'Access Request Form', )
                        ], 
                    form_input = [
                        sailpoint.custom_forms.models.formdefinitioninput.formdefinitioninput(
                            id = '00000000-0000-0000-0000-000000000000', 
                            type = 'STRING', 
                            label = 'input1', 
                            description = 'A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic', )
                        ], 
                    form_elements = [
                        sailpoint.custom_forms.models.formelement.formelement(
                            id = '00000000-0000-0000-0000-000000000000', 
                            element_type = 'TEXT', 
                            config = {"label":"Department"}, 
                            key = 'department', 
                            validations = [
                                sailpoint.custom_forms.models.formelementvalidationsset.formelementvalidationsset(
                                    validation_type = 'REQUIRED', )
                                ], )
                        ], 
                    form_conditions = [
                        sailpoint.custom_forms.models.formcondition.formcondition(
                            rule_operator = 'AND', 
                            rules = [
                                sailpoint.custom_forms.models.conditionrule.conditionrule(
                                    source_type = 'ELEMENT', 
                                    source = 'department', 
                                    operator = 'EQ', 
                                    value_type = 'STRING', 
                                    value = 'Engineering', )
                                ], 
                            effects = [
                                sailpoint.custom_forms.models.conditioneffect.conditioneffect(
                                    effect_type = 'HIDE', 
                                    config = sailpoint.custom_forms.models.conditioneffect_config.conditioneffect_config(
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

