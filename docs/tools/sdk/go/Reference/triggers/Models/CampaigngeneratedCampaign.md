---
id: v1-campaigngenerated-campaign
title: CampaigngeneratedCampaign
pagination_label: CampaigngeneratedCampaign
sidebar_label: CampaigngeneratedCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaigngeneratedCampaign', 'V1CampaigngeneratedCampaign'] 
slug: /tools/sdk/go/triggers/models/campaigngenerated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaigngeneratedCampaign', 'V1CampaigngeneratedCampaign']
---

# CampaigngeneratedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign. | 
**Name** | **string** | Human friendly name of the campaign. | 
**Description** | **string** | Extended description of the campaign. | 
**Created** | **SailPointTime** | The date and time the campaign was created. | 
**Modified** | Pointer to **NullableString** | The date and time the campaign was last modified. | [optional] 
**Deadline** | Pointer to **NullableString** | The date and time when the campaign must be finished by. | [optional] 
**Type** | **string** | The type of campaign that was generated. | 
**CampaignOwner** | [**CampaigngeneratedCampaignCampaignOwner**](campaigngenerated-campaign-campaign-owner) |  | 
**Status** | **string** | The current status of the campaign. | 

## Methods

### NewCampaigngeneratedCampaign

`func NewCampaigngeneratedCampaign(id string, name string, description string, created SailPointTime, type_ string, campaignOwner CampaigngeneratedCampaignCampaignOwner, status string, ) *CampaigngeneratedCampaign`

NewCampaigngeneratedCampaign instantiates a new CampaigngeneratedCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaigngeneratedCampaignWithDefaults

`func NewCampaigngeneratedCampaignWithDefaults() *CampaigngeneratedCampaign`

NewCampaigngeneratedCampaignWithDefaults instantiates a new CampaigngeneratedCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaigngeneratedCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaigngeneratedCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaigngeneratedCampaign) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaigngeneratedCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaigngeneratedCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaigngeneratedCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaigngeneratedCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaigngeneratedCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaigngeneratedCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaigngeneratedCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaigngeneratedCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaigngeneratedCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaigngeneratedCampaign) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaigngeneratedCampaign) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaigngeneratedCampaign) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaigngeneratedCampaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CampaigngeneratedCampaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaigngeneratedCampaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDeadline

`func (o *CampaigngeneratedCampaign) GetDeadline() string`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaigngeneratedCampaign) GetDeadlineOk() (*string, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaigngeneratedCampaign) SetDeadline(v string)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CampaigngeneratedCampaign) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### SetDeadlineNil

`func (o *CampaigngeneratedCampaign) SetDeadlineNil(b bool)`

 SetDeadlineNil sets the value for Deadline to be an explicit nil

### UnsetDeadline
`func (o *CampaigngeneratedCampaign) UnsetDeadline()`

UnsetDeadline ensures that no value is present for Deadline, not even an explicit nil
### GetType

`func (o *CampaigngeneratedCampaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaigngeneratedCampaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaigngeneratedCampaign) SetType(v string)`

SetType sets Type field to given value.


### GetCampaignOwner

`func (o *CampaigngeneratedCampaign) GetCampaignOwner() CampaigngeneratedCampaignCampaignOwner`

GetCampaignOwner returns the CampaignOwner field if non-nil, zero value otherwise.

### GetCampaignOwnerOk

`func (o *CampaigngeneratedCampaign) GetCampaignOwnerOk() (*CampaigngeneratedCampaignCampaignOwner, bool)`

GetCampaignOwnerOk returns a tuple with the CampaignOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignOwner

`func (o *CampaigngeneratedCampaign) SetCampaignOwner(v CampaigngeneratedCampaignCampaignOwner)`

SetCampaignOwner sets CampaignOwner field to given value.


### GetStatus

`func (o *CampaigngeneratedCampaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaigngeneratedCampaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaigngeneratedCampaign) SetStatus(v string)`

SetStatus sets Status field to given value.



