---
id: v1-outliercontributingfeature
title: Outliercontributingfeature
pagination_label: Outliercontributingfeature
sidebar_label: Outliercontributingfeature
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Outliercontributingfeature', 'V1Outliercontributingfeature'] 
slug: /tools/sdk/go/iaioutliers/models/outliercontributingfeature
tags: ['SDK', 'Software Development Kit', 'Outliercontributingfeature', 'V1Outliercontributingfeature']
---

# Outliercontributingfeature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Contributing feature id | [optional] 
**Name** | Pointer to **string** | The name of the feature | [optional] 
**ValueType** | Pointer to [**Outliervaluetype**](outliervaluetype) |  | [optional] 
**Value** | Pointer to **float32** | The feature value | [optional] 
**Importance** | Pointer to **float32** | The importance of the feature. This can also be a negative value | [optional] 
**DisplayName** | Pointer to **string** | The (translated if header is passed) displayName for the feature | [optional] 
**Description** | Pointer to **string** | The (translated if header is passed) description for the feature | [optional] 
**TranslationMessages** | Pointer to [**NullableOutlierfeaturetranslation**](outlierfeaturetranslation) |  | [optional] 

## Methods

### NewOutliercontributingfeature

`func NewOutliercontributingfeature() *Outliercontributingfeature`

NewOutliercontributingfeature instantiates a new Outliercontributingfeature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutliercontributingfeatureWithDefaults

`func NewOutliercontributingfeatureWithDefaults() *Outliercontributingfeature`

NewOutliercontributingfeatureWithDefaults instantiates a new Outliercontributingfeature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Outliercontributingfeature) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Outliercontributingfeature) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Outliercontributingfeature) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Outliercontributingfeature) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Outliercontributingfeature) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Outliercontributingfeature) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Outliercontributingfeature) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Outliercontributingfeature) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValueType

`func (o *Outliercontributingfeature) GetValueType() Outliervaluetype`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *Outliercontributingfeature) GetValueTypeOk() (*Outliervaluetype, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *Outliercontributingfeature) SetValueType(v Outliervaluetype)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *Outliercontributingfeature) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetValue

`func (o *Outliercontributingfeature) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Outliercontributingfeature) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Outliercontributingfeature) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Outliercontributingfeature) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetImportance

`func (o *Outliercontributingfeature) GetImportance() float32`

GetImportance returns the Importance field if non-nil, zero value otherwise.

### GetImportanceOk

`func (o *Outliercontributingfeature) GetImportanceOk() (*float32, bool)`

GetImportanceOk returns a tuple with the Importance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportance

`func (o *Outliercontributingfeature) SetImportance(v float32)`

SetImportance sets Importance field to given value.

### HasImportance

`func (o *Outliercontributingfeature) HasImportance() bool`

HasImportance returns a boolean if a field has been set.

### GetDisplayName

`func (o *Outliercontributingfeature) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Outliercontributingfeature) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Outliercontributingfeature) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Outliercontributingfeature) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Outliercontributingfeature) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Outliercontributingfeature) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Outliercontributingfeature) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Outliercontributingfeature) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *Outliercontributingfeature) GetTranslationMessages() Outlierfeaturetranslation`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *Outliercontributingfeature) GetTranslationMessagesOk() (*Outlierfeaturetranslation, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *Outliercontributingfeature) SetTranslationMessages(v Outlierfeaturetranslation)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *Outliercontributingfeature) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.

### SetTranslationMessagesNil

`func (o *Outliercontributingfeature) SetTranslationMessagesNil(b bool)`

 SetTranslationMessagesNil sets the value for TranslationMessages to be an explicit nil

### UnsetTranslationMessages
`func (o *Outliercontributingfeature) UnsetTranslationMessages()`

UnsetTranslationMessages ensures that no value is present for TranslationMessages, not even an explicit nil

