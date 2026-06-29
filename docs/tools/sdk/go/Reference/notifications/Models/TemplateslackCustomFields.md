---
id: v1-templateslack-custom-fields
title: TemplateslackCustomFields
pagination_label: TemplateslackCustomFields
sidebar_label: TemplateslackCustomFields
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateslackCustomFields', 'V1TemplateslackCustomFields'] 
slug: /tools/sdk/go/notifications/models/templateslack-custom-fields
tags: ['SDK', 'Software Development Kit', 'TemplateslackCustomFields', 'V1TemplateslackCustomFields']
---

# TemplateslackCustomFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** | Pointer to **NullableString** | The type of request | [optional] 
**ContainsDeny** | Pointer to **NullableString** | Whether the request contains a deny action | [optional] 
**CampaignId** | Pointer to **NullableString** | The campaign ID | [optional] 
**CampaignStatus** | Pointer to **NullableString** | The campaign status | [optional] 

## Methods

### NewTemplateslackCustomFields

`func NewTemplateslackCustomFields() *TemplateslackCustomFields`

NewTemplateslackCustomFields instantiates a new TemplateslackCustomFields object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateslackCustomFieldsWithDefaults

`func NewTemplateslackCustomFieldsWithDefaults() *TemplateslackCustomFields`

NewTemplateslackCustomFieldsWithDefaults instantiates a new TemplateslackCustomFields object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestType

`func (o *TemplateslackCustomFields) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *TemplateslackCustomFields) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *TemplateslackCustomFields) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *TemplateslackCustomFields) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *TemplateslackCustomFields) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *TemplateslackCustomFields) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetContainsDeny

`func (o *TemplateslackCustomFields) GetContainsDeny() string`

GetContainsDeny returns the ContainsDeny field if non-nil, zero value otherwise.

### GetContainsDenyOk

`func (o *TemplateslackCustomFields) GetContainsDenyOk() (*string, bool)`

GetContainsDenyOk returns a tuple with the ContainsDeny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDeny

`func (o *TemplateslackCustomFields) SetContainsDeny(v string)`

SetContainsDeny sets ContainsDeny field to given value.

### HasContainsDeny

`func (o *TemplateslackCustomFields) HasContainsDeny() bool`

HasContainsDeny returns a boolean if a field has been set.

### SetContainsDenyNil

`func (o *TemplateslackCustomFields) SetContainsDenyNil(b bool)`

 SetContainsDenyNil sets the value for ContainsDeny to be an explicit nil

### UnsetContainsDeny
`func (o *TemplateslackCustomFields) UnsetContainsDeny()`

UnsetContainsDeny ensures that no value is present for ContainsDeny, not even an explicit nil
### GetCampaignId

`func (o *TemplateslackCustomFields) GetCampaignId() string`

GetCampaignId returns the CampaignId field if non-nil, zero value otherwise.

### GetCampaignIdOk

`func (o *TemplateslackCustomFields) GetCampaignIdOk() (*string, bool)`

GetCampaignIdOk returns a tuple with the CampaignId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignId

`func (o *TemplateslackCustomFields) SetCampaignId(v string)`

SetCampaignId sets CampaignId field to given value.

### HasCampaignId

`func (o *TemplateslackCustomFields) HasCampaignId() bool`

HasCampaignId returns a boolean if a field has been set.

### SetCampaignIdNil

`func (o *TemplateslackCustomFields) SetCampaignIdNil(b bool)`

 SetCampaignIdNil sets the value for CampaignId to be an explicit nil

### UnsetCampaignId
`func (o *TemplateslackCustomFields) UnsetCampaignId()`

UnsetCampaignId ensures that no value is present for CampaignId, not even an explicit nil
### GetCampaignStatus

`func (o *TemplateslackCustomFields) GetCampaignStatus() string`

GetCampaignStatus returns the CampaignStatus field if non-nil, zero value otherwise.

### GetCampaignStatusOk

`func (o *TemplateslackCustomFields) GetCampaignStatusOk() (*string, bool)`

GetCampaignStatusOk returns a tuple with the CampaignStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignStatus

`func (o *TemplateslackCustomFields) SetCampaignStatus(v string)`

SetCampaignStatus sets CampaignStatus field to given value.

### HasCampaignStatus

`func (o *TemplateslackCustomFields) HasCampaignStatus() bool`

HasCampaignStatus returns a boolean if a field has been set.

### SetCampaignStatusNil

`func (o *TemplateslackCustomFields) SetCampaignStatusNil(b bool)`

 SetCampaignStatusNil sets the value for CampaignStatus to be an explicit nil

### UnsetCampaignStatus
`func (o *TemplateslackCustomFields) UnsetCampaignStatus()`

UnsetCampaignStatus ensures that no value is present for CampaignStatus, not even an explicit nil

