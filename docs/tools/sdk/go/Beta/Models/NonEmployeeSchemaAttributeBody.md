---
id: non-employee-schema-attribute-body
title: NonEmployeeSchemaAttributeBody
pagination_label: NonEmployeeSchemaAttributeBody
sidebar_label: NonEmployeeSchemaAttributeBody
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeSchemaAttributeBody'] 
slug: /tools/sdk/go/beta/models/non-employee-schema-attribute-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttributeBody']
---

# NonEmployeeSchemaAttributeBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **string** | Type of the attribute. Only type &#39;TEXT&#39; is supported for custom attributes. | 
**Label** |  **string** | Label displayed on the UI for this schema attribute. | 
**TechnicalName** |  **string** | The technical name of the attribute. Must be unique per source. | 
**HelpText** |  Pointer to **string** | help text displayed by UI. | [optional] 
**Placeholder** |  Pointer to **string** | Hint text that fills UI box. | [optional] 
**Required** |  Pointer to **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] 

## Methods

### NewNonEmployeeSchemaAttributeBody

`func NewNonEmployeeSchemaAttributeBody(type_ string, label string, technicalName string, ) *NonEmployeeSchemaAttributeBody`

NewNonEmployeeSchemaAttributeBody instantiates a new NonEmployeeSchemaAttributeBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSchemaAttributeBodyWithDefaults

`func NewNonEmployeeSchemaAttributeBodyWithDefaults() *NonEmployeeSchemaAttributeBody`

NewNonEmployeeSchemaAttributeBodyWithDefaults instantiates a new NonEmployeeSchemaAttributeBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *NonEmployeeSchemaAttributeBody) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NonEmployeeSchemaAttributeBody) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NonEmployeeSchemaAttributeBody) SetType(v string)`

SetType sets Type field to given value.


### GetLabel

`func (o *NonEmployeeSchemaAttributeBody) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *NonEmployeeSchemaAttributeBody) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *NonEmployeeSchemaAttributeBody) SetLabel(v string)`

SetLabel sets Label field to given value.


### GetTechnicalName

`func (o *NonEmployeeSchemaAttributeBody) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *NonEmployeeSchemaAttributeBody) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *NonEmployeeSchemaAttributeBody) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetHelpText

`func (o *NonEmployeeSchemaAttributeBody) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *NonEmployeeSchemaAttributeBody) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *NonEmployeeSchemaAttributeBody) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *NonEmployeeSchemaAttributeBody) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetPlaceholder

`func (o *NonEmployeeSchemaAttributeBody) GetPlaceholder() string`

GetPlaceholder returns the Placeholder field if non-nil, zero value otherwise.

### GetPlaceholderOk

`func (o *NonEmployeeSchemaAttributeBody) GetPlaceholderOk() (*string, bool)`

GetPlaceholderOk returns a tuple with the Placeholder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlaceholder

`func (o *NonEmployeeSchemaAttributeBody) SetPlaceholder(v string)`

SetPlaceholder sets Placeholder field to given value.

### HasPlaceholder

`func (o *NonEmployeeSchemaAttributeBody) HasPlaceholder() bool`

HasPlaceholder returns a boolean if a field has been set.

### GetRequired

`func (o *NonEmployeeSchemaAttributeBody) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *NonEmployeeSchemaAttributeBody) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *NonEmployeeSchemaAttributeBody) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *NonEmployeeSchemaAttributeBody) HasRequired() bool`

HasRequired returns a boolean if a field has been set.


[[Back to top]](#) 


