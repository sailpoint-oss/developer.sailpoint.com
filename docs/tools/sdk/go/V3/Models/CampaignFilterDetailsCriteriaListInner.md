---
id: campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/go/v3/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner']
---

# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**CriteriaType**](criteria-type) |  | 
**Operation** |  [**Operation**](operation) |  | 
**Property** |  **NullableString** | The specified key from the Type of criteria. | 
**Value** |  **NullableString** | The value for the specified key from the Type of Criteria | 

## Methods

### NewCampaignFilterDetailsCriteriaListInner

`func NewCampaignFilterDetailsCriteriaListInner(type_ CriteriaType, operation Operation, property NullableString, value NullableString, ) *CampaignFilterDetailsCriteriaListInner`

NewCampaignFilterDetailsCriteriaListInner instantiates a new CampaignFilterDetailsCriteriaListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignFilterDetailsCriteriaListInnerWithDefaults

`func NewCampaignFilterDetailsCriteriaListInnerWithDefaults() *CampaignFilterDetailsCriteriaListInner`

NewCampaignFilterDetailsCriteriaListInnerWithDefaults instantiates a new CampaignFilterDetailsCriteriaListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CampaignFilterDetailsCriteriaListInner) GetType() CriteriaType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetTypeOk() (*CriteriaType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignFilterDetailsCriteriaListInner) SetType(v CriteriaType)`

SetType sets Type field to given value.


### GetOperation

`func (o *CampaignFilterDetailsCriteriaListInner) GetOperation() Operation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetOperationOk() (*Operation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *CampaignFilterDetailsCriteriaListInner) SetOperation(v Operation)`

SetOperation sets Operation field to given value.


### GetProperty

`func (o *CampaignFilterDetailsCriteriaListInner) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *CampaignFilterDetailsCriteriaListInner) SetProperty(v string)`

SetProperty sets Property field to given value.


### SetPropertyNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetPropertyNil(b bool)`

 SetPropertyNil sets the value for Property to be an explicit nil

### UnsetProperty
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetProperty()`

UnsetProperty ensures that no value is present for Property, not even an explicit nil
### GetValue

`func (o *CampaignFilterDetailsCriteriaListInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CampaignFilterDetailsCriteriaListInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CampaignFilterDetailsCriteriaListInner) SetValue(v string)`

SetValue sets Value field to given value.


### SetValueNil

`func (o *CampaignFilterDetailsCriteriaListInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *CampaignFilterDetailsCriteriaListInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

[[Back to top]](#) 


