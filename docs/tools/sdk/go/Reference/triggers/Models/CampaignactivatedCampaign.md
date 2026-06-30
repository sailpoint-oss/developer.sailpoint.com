---
id: v1-campaignactivated-campaign
title: CampaignactivatedCampaign
pagination_label: CampaignactivatedCampaign
sidebar_label: CampaignactivatedCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignactivatedCampaign', 'V1CampaignactivatedCampaign'] 
slug: /tools/sdk/go/triggers/models/campaignactivated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignactivatedCampaign', 'V1CampaignactivatedCampaign']
---

# CampaignactivatedCampaign

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

### NewCampaignactivatedCampaign

`func NewCampaignactivatedCampaign(id string, name string, description string, created SailPointTime, deadline SailPointTime, type_ string, campaignOwner CampaignactivatedCampaignCampaignOwner, status string, ) *CampaignactivatedCampaign`

NewCampaignactivatedCampaign instantiates a new CampaignactivatedCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignactivatedCampaignWithDefaults

`func NewCampaignactivatedCampaignWithDefaults() *CampaignactivatedCampaign`

NewCampaignactivatedCampaignWithDefaults instantiates a new CampaignactivatedCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignactivatedCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignactivatedCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignactivatedCampaign) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignactivatedCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignactivatedCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignactivatedCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignactivatedCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignactivatedCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignactivatedCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaignactivatedCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignactivatedCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignactivatedCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignactivatedCampaign) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignactivatedCampaign) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignactivatedCampaign) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignactivatedCampaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CampaignactivatedCampaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaignactivatedCampaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDeadline

`func (o *CampaignactivatedCampaign) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignactivatedCampaign) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignactivatedCampaign) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.


### GetType

`func (o *CampaignactivatedCampaign) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignactivatedCampaign) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignactivatedCampaign) SetType(v string)`

SetType sets Type field to given value.


### GetCampaignOwner

`func (o *CampaignactivatedCampaign) GetCampaignOwner() CampaignactivatedCampaignCampaignOwner`

GetCampaignOwner returns the CampaignOwner field if non-nil, zero value otherwise.

### GetCampaignOwnerOk

`func (o *CampaignactivatedCampaign) GetCampaignOwnerOk() (*CampaignactivatedCampaignCampaignOwner, bool)`

GetCampaignOwnerOk returns a tuple with the CampaignOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignOwner

`func (o *CampaignactivatedCampaign) SetCampaignOwner(v CampaignactivatedCampaignCampaignOwner)`

SetCampaignOwner sets CampaignOwner field to given value.


### GetStatus

`func (o *CampaignactivatedCampaign) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignactivatedCampaign) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignactivatedCampaign) SetStatus(v string)`

SetStatus sets Status field to given value.



