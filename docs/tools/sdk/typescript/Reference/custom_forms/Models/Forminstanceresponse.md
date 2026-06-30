---
id: v1-forminstanceresponse-v1
title: ForminstanceresponseV1
pagination_label: ForminstanceresponseV1
sidebar_label: ForminstanceresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ForminstanceresponseV1', 'v1ForminstanceresponseV1']
slug: /tools/sdk/typescript/custom_forms/models/forminstanceresponse-v1
tags: ['SDK', 'Software Development Kit', 'ForminstanceresponseV1', 'v1ForminstanceresponseV1']
---

# ForminstanceresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique guid identifying this form instance | [default to undefined]
**expire** | **(optional)** `string` | Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record | [default to undefined]
**state** | **(optional)** `string` | State the state of the form instance ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [default to undefined]
**standAloneForm** | **(optional)** `boolean` | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [default to false]
**standAloneFormUrl** | **(optional)** `string` | StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI | [default to undefined]
**createdBy** | **(optional)** `ForminstancecreatedbyV1` |  | [default to undefined]
**formDefinitionId** | **(optional)** `string` | FormDefinitionID is the id of the form definition that created this form | [default to undefined]
**formInput** | **(optional)**  | FormInput is an object of form input labels to value | [default to undefined]
**formElements** | **(optional)** `Array<FormelementV1>` | FormElements is the configuration of the form, this would be a repeat of the fields from the form-config | [default to undefined]
**formData** | **(optional)**  | FormData is the data provided by the form on submit. The data is in a key -> value map | [default to undefined]
**formErrors** | **(optional)** `Array<FormerrorV1>` | FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors | [default to undefined]
**formConditions** | **(optional)** `Array<FormconditionV1>` | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [default to undefined]
**created** | **(optional)** `string` | Created is the date the form instance was assigned | [default to undefined]
**modified** | **(optional)** `string` | Modified is the last date the form instance was modified | [default to undefined]
**recipients** | **(optional)** `Array<ForminstancerecipientV1>` | Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it | [default to undefined]

