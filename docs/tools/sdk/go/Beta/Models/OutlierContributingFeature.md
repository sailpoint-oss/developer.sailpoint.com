---
id: outlier-contributing-feature
title: OutlierContributingFeature
pagination_label: OutlierContributingFeature
sidebar_label: OutlierContributingFeature
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'OutlierContributingFeature'] 
slug: /tools/sdk/go/beta/models/outlier-contributing-feature
tags: ['SDK', 'Software Development Kit', 'OutlierContributingFeature']
---

# OutlierContributingFeature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Contributing feature id | [optional] 
**Name** |  Pointer to **string** | The name of the feature | [optional] 
**ValueType** |  Pointer to **string** | The data type of the value field | [optional] 
**Value** |  Pointer to [**OutlierContributingFeatureValue**](outlier-contributing-feature-value) |  | [optional] 
**Importance** |  Pointer to **float32** | The importance of the feature. This can also be a negative value | [optional] 
**DisplayName** |  Pointer to **string** | The (translated if header is passed) displayName for the feature | [optional] 
**Description** |  Pointer to **string** | The (translated if header is passed) description for the feature | [optional] 
**TranslationMessages** |  Pointer to [**OutlierFeatureTranslation**](outlier-feature-translation) |  | [optional] 

## Methods

### NewOutlierContributingFeature

`func NewOutlierContributingFeature() *OutlierContributingFeature`

NewOutlierContributingFeature instantiates a new OutlierContributingFeature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutlierContributingFeatureWithDefaults

`func NewOutlierContributingFeatureWithDefaults() *OutlierContributingFeature`

NewOutlierContributingFeatureWithDefaults instantiates a new OutlierContributingFeature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OutlierContributingFeature) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OutlierContributingFeature) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OutlierContributingFeature) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OutlierContributingFeature) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OutlierContributingFeature) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OutlierContributingFeature) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OutlierContributingFeature) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OutlierContributingFeature) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValueType

`func (o *OutlierContributingFeature) GetValueType() string`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *OutlierContributingFeature) GetValueTypeOk() (*string, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *OutlierContributingFeature) SetValueType(v string)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *OutlierContributingFeature) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetValue

`func (o *OutlierContributingFeature) GetValue() OutlierContributingFeatureValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *OutlierContributingFeature) GetValueOk() (*OutlierContributingFeatureValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *OutlierContributingFeature) SetValue(v OutlierContributingFeatureValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *OutlierContributingFeature) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetImportance

`func (o *OutlierContributingFeature) GetImportance() float32`

GetImportance returns the Importance field if non-nil, zero value otherwise.

### GetImportanceOk

`func (o *OutlierContributingFeature) GetImportanceOk() (*float32, bool)`

GetImportanceOk returns a tuple with the Importance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportance

`func (o *OutlierContributingFeature) SetImportance(v float32)`

SetImportance sets Importance field to given value.

### HasImportance

`func (o *OutlierContributingFeature) HasImportance() bool`

HasImportance returns a boolean if a field has been set.

### GetDisplayName

`func (o *OutlierContributingFeature) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *OutlierContributingFeature) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *OutlierContributingFeature) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *OutlierContributingFeature) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *OutlierContributingFeature) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OutlierContributingFeature) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OutlierContributingFeature) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *OutlierContributingFeature) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTranslationMessages

`func (o *OutlierContributingFeature) GetTranslationMessages() OutlierFeatureTranslation`

GetTranslationMessages returns the TranslationMessages field if non-nil, zero value otherwise.

### GetTranslationMessagesOk

`func (o *OutlierContributingFeature) GetTranslationMessagesOk() (*OutlierFeatureTranslation, bool)`

GetTranslationMessagesOk returns a tuple with the TranslationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslationMessages

`func (o *OutlierContributingFeature) SetTranslationMessages(v OutlierFeatureTranslation)`

SetTranslationMessages sets TranslationMessages field to given value.

### HasTranslationMessages

`func (o *OutlierContributingFeature) HasTranslationMessages() bool`

HasTranslationMessages returns a boolean if a field has been set.


[[Back to top]](#) 


