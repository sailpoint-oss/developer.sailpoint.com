---
id: campaign-activated-campaign
title: CampaignActivatedCampaign
pagination_label: CampaignActivatedCampaign
sidebar_label: CampaignActivatedCampaign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignActivatedCampaign', 'CampaignActivatedCampaign'] 
slug: /tools/sdk/go//models/campaign-activated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaign', 'CampaignActivatedCampaign']
---

# CampaignActivatedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID for the campaign. | 
**Name** | **string** | The human friendly name of the campaign. | 
**Description** | **string** | Extended description of the campaign. | 
**Created** | **SailPointTime** | The date and time the campaign was created. | 
**Modified** | Pointer to **NullableTime** | The date and time the campaign was last modified. | [optional] 
**Deadline** | **SailPointTime** | The date and time the campaign is due. | 
**Type** | **map[string]interface{}** | The type of campaign. | 
**CampaignOwner** | [**CampaignActivatedCampaignCampaignOwner**](campaign-activated-campaign-campaign-owner) |  | 
**Status** | **map[string]interface{}** | The current status of the campaign. | 

## Methods

### NewCampaignActivatedCampaign

`func NewCampaignActivatedCampaign(id string, name string, description string, created SailPointTime, deadline SailPointTime, type_ map[string]interface{}, campaignOwner CampaignActivatedCampaignCampaignOwner, status map[string]interface{}, ) *CampaignActivatedCampaign`

NewCampaignActivatedCampaign instantiates a new CampaignActivatedCampaign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignActivatedCampaignWithDefaults

`func NewCampaignActivatedCampaignWithDefaults() *CampaignActivatedCampaign`

NewCampaignActivatedCampaignWithDefaults instantiates a new CampaignActivatedCampaign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignActivatedCampaign) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignActivatedCampaign) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignActivatedCampaign) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CampaignActivatedCampaign) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignActivatedCampaign) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignActivatedCampaign) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CampaignActivatedCampaign) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CampaignActivatedCampaign) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CampaignActivatedCampaign) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCreated

`func (o *CampaignActivatedCampaign) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CampaignActivatedCampaign) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CampaignActivatedCampaign) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CampaignActivatedCampaign) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CampaignActivatedCampaign) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CampaignActivatedCampaign) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CampaignActivatedCampaign) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CampaignActivatedCampaign) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CampaignActivatedCampaign) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetDeadline

`func (o *CampaignActivatedCampaign) GetDeadline() SailPointTime`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CampaignActivatedCampaign) GetDeadlineOk() (*SailPointTime, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CampaignActivatedCampaign) SetDeadline(v SailPointTime)`

SetDeadline sets Deadline field to given value.


### GetType

`func (o *CampaignActivatedCampaign) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignActivatedCampaign) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignActivatedCampaign) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetCampaignOwner

`func (o *CampaignActivatedCampaign) GetCampaignOwner() CampaignActivatedCampaignCampaignOwner`

GetCampaignOwner returns the CampaignOwner field if non-nil, zero value otherwise.

### GetCampaignOwnerOk

`func (o *CampaignActivatedCampaign) GetCampaignOwnerOk() (*CampaignActivatedCampaignCampaignOwner, bool)`

GetCampaignOwnerOk returns a tuple with the CampaignOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignOwner

`func (o *CampaignActivatedCampaign) SetCampaignOwner(v CampaignActivatedCampaignCampaignOwner)`

SetCampaignOwner sets CampaignOwner field to given value.


### GetStatus

`func (o *CampaignActivatedCampaign) GetStatus() map[string]interface{}`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CampaignActivatedCampaign) GetStatusOk() (*map[string]interface{}, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CampaignActivatedCampaign) SetStatus(v map[string]interface{})`

SetStatus sets Status field to given value.



