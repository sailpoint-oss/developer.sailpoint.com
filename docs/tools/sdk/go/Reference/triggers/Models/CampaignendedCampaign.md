---
id: v1-campaignended-campaign
title: CampaignendedCampaign
pagination_label: CampaignendedCampaign
sidebar_label: CampaignendedCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignendedCampaign', 'V1CampaignendedCampaign'] 
slug: /tools/sdk/go/triggers/models/campaignended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignendedCampaign', 'V1CampaignendedCampaign']
---

# CampaignendedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID for the campaign. | 
**Name** | **string** | The human friendly name of the campaign. | 
**Description** | **string** | Extended description of the campaign. | 
**Created** | **SailPointTime** | The date and time the campaign was created. | 
**Modified** | Pointer to **NullableTime** | The date and time the campaign was last modified. | [optional] 
**Deadline** | **SailPointTime** | The date and time the campaign is due. | 
**Type** | **string** | The type of campaign. | 
**CampaignOwner** | [**CampaignactivatedCampaignCampaignOwner**](campaignactivated-campaign-campaign-owner) |  | 
**Status** | **string** | The current status of the campaign. | 

## Methods

### NewCampaignendedCampaign

`func NewCampaignendedCampaign(id string, name string, description string, created SailPointTime, deadline SailPointTime, type_ string, campaignOwner CampaignactivatedCampaignCampaignOwner, status string, ) *CampaignendedCampaign`

NewCampaignendedCampaign instantiates a new CampaignendedCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignendedCampaignWithDefaults

`func NewCampaignendedCampaignWithDefaults() *CampaignendedCampaign`

NewCampaignendedCampaignWithDefaults instantiates a new CampaignendedCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignendedCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignendedCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignendedCampaign) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignendedCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignendedCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignendedCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignendedCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignendedCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignendedCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaignendedCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignendedCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignendedCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignendedCampaign) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignendedCampaign) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignendedCampaign) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignendedCampaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CampaignendedCampaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaignendedCampaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDeadline

`func (o *CampaignendedCampaign) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignendedCampaign) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignendedCampaign) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.


### GetType

`func (o *CampaignendedCampaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignendedCampaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignendedCampaign) SetType(v string)`

SetType sets Type field to given value.


### GetCampaignOwner

`func (o *CampaignendedCampaign) GetCampaignOwner() CampaignactivatedCampaignCampaignOwner`

GetCampaignOwner returns the CampaignOwner field if non-nil, zero value otherwise.

### GetCampaignOwnerOk

`func (o *CampaignendedCampaign) GetCampaignOwnerOk() (*CampaignactivatedCampaignCampaignOwner, bool)`

GetCampaignOwnerOk returns a tuple with the CampaignOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignOwner

`func (o *CampaignendedCampaign) SetCampaignOwner(v CampaignactivatedCampaignCampaignOwner)`

SetCampaignOwner sets CampaignOwner field to given value.


### GetStatus

`func (o *CampaignendedCampaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignendedCampaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignendedCampaign) SetStatus(v string)`

SetStatus sets Status field to given value.



